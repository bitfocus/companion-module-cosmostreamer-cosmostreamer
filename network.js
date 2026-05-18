let self;
let udp;
let packetTimestamp = 0;
let remote_host;
let remote_port;
let interval;
let connected = false;

const os = require('os');
const dgram = require('dgram');
const telemetry = require('./telemetry')

module.exports.init = function (_self) {
    self = _self;

    if (self.config.autodiscovery) {
        self.log('info', 'Network init with auto discovery');
        self.setVariableValues({ 'cs_state': 'searching'});
    } else {
        self.log('info', 'Network init ' + self.config.host + ':' + self.config.port);
    }

    remote_port = self.config.port;
	if (remote_port == undefined || remote_port == "" || remote_port == 0) {
		remote_port = 6262;
	}

	remote_host = self.config.host;
	if (!remote_host) {
	}

	if (self.config.autodiscovery) {
		remote_host = undefined;
	}

    try {
		udp = dgram.createSocket('udp4');

		udp.on('listening', function () {
			udp.setBroadcast(true);
		});

		udp.on('error', function (err) {
			//self.status(self.STATE_ERROR, err);
			self.log('error', 'Network error: ' + err.message);
            self.setVariableValues({ 'cs_state': 'error'});
		});
	
		udp.on('message', function (data, rinfo) {
            on_message(data, rinfo);
		});

    } catch (error) {
		self.log('error', 'Error starting UDP: ' + error);
	}

    if (interval != undefined) clearInterval(interval);
    interval = setInterval(module.exports.on_timer, 1000);

}

module.exports.close = function (self) {
    self.log('info', 'Network close');

    if (interval != undefined) clearInterval(interval);

    try {
        udp.close();
        udp = null;
    } catch (e) {}
}


function on_message(data, rinfo) {
    //self.log('info', 'on message from ' + rinfo.address + ':' + rinfo.port);

    if (connected) {
        if (rinfo.address != remote_host) return;
    }

    if (!self.config.autodiscovery) {
        self.log('info', 'on_message when auto discovery is off');
        if (rinfo.address != remote_host) {
            self.log('info', 'on message from ' + rinfo.address + ' but should be from ' + remote_host);
            return;
        }
    }

    if ((data[0] == 0x52) && (data[1] == 0)) {

        //updateDeviceList(data, rinfo);

        if (packetTimestamp == 0) {

            if (!remote_host) {
                remote_host = rinfo.address;
            }

            self.log('info', 'connected to ' + rinfo.address + ':' + rinfo.port);
            //self.status(self.STATE_OK);

            /// Get host last IP part
            let point = "";
            try {
                point = '.' + rinfo.address.split('.')[3];
            } catch (e) {}
            
            self.setVariableValues({ 'cs_state': 'ready ' + point});

            connected = true;
        }

        packetTimestamp = new Date().getTime();

        //self.log('info', 'telemetry ' + data.length + ' bytes from ' + rinfo.address + ':' + rinfo.port);

        let packet = data.slice(12, data.length);

        try {
            telemetry.Parse(self, packet, rinfo.address, rinfo.port);
        } catch (e) {
            self.log('info', 'telemetry parsing failed: ' + e);
        }

        packet = null;
    }

    data = null;
}


/*function updateDeviceList(data, rinfo) {
    var packet_type = data[12];
    self.log('info', 'packet_type: ' + packet_type);
    if (packet_type == 1) {
        self.log('info', 'data: ' + JSON.stringify(data));
    }
}*/


module.exports.on_timer = function() {
    //self.log('info', 'on timer');

    //if (packetTimestamp == 0) {
    if (!connected) {

        if (!remote_host) {
            if (!self.config.autodiscovery) {
                //self.status(self.STATE_WARNING, 'IP is empty');
                self.setVariableValues({ 'cs_state': 'empty IP'});
            }
        } else {
            //self.status(self.STATE_WARNING, 'Connecting');
            self.setVariableValues({ 'cs_state': 'connecting to ' + remote_host});
        }
    }

    if (packetTimestamp > 0) {
        let dt = new Date().getTime() - packetTimestamp;
        //self.log('info', 'dt = ' + dt);
        if (dt > 3000) {
            packetTimestamp = 0;
            self.log('info', 'connection lost');
            //self.status(self.STATE_ERROR, "Connection lost");
            self.setVariableValues({ 'cs_state': 'disconn'});

            connected = false;

            if (self.config.autodiscovery) {
                remote_host = undefined;
            }
        }
    }

    //telemetry.Check(self);

    /// Send alive message
    if (remote_host) {
        //self.log('info', 'Sending alive message to ' + remote_host + ':' + remote_port);
        try {
            let sendBuf = Buffer.from('{}', 'utf8');
            udp.send(sendBuf, remote_port, remote_host, function(error) {});
        } catch (e) {}
    }

    /// Send discovery message
    if (self.config.autodiscovery && !remote_host) {
        self.setVariableValues({ 'cs_state': 'searching'});
    }

    /// Send discovery every second
    if (self.config.autodiscovery && !connected) {
        var ifaces = getLocalInterfaces();
        //self.log('info', 'ifaces: ' + JSON.stringify(ifaces));

        try {
            let sendBuf = Buffer.from('{}', 'utf8');

            for (var i in ifaces) {
                var iface = ifaces[i];
                //self.log('info', 'Discovery send  to ' + iface.broadcast);
                udp.send(sendBuf, remote_port, iface.broadcast, function(error) {});
            }

            //udp.send(sendBuf, remote_port, "255.255.255.255", function(error) {});
        } catch (e) {}
    }

}

module.exports.send = function(cmd) {
	if (cmd == undefined) return; 

	let sendBuf = Buffer.from(cmd, 'utf8');

	if (sendBuf != '') {
		if ((udp !== undefined) && (remote_host !== undefined)) {
			try {
				self.log('info', 'sending ' + sendBuf + ' to ' + remote_host + ':' + remote_port);
				udp.send(sendBuf, remote_port, remote_host, function(error) {});
			} catch (e) {}
		}
	}
}


function getBroadcastAddress(ip, subnetMask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = subnetMask.split('.').map(Number);
    const broadcastParts = ipParts.map((part, index) => (part | (~maskParts[index] & 255)));
    return broadcastParts.join('.');
}

function getLocalInterfaces() {
    const interfaces = os.networkInterfaces();
    const result = [];

    for (const name in interfaces) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                const broadcastAddress = getBroadcastAddress(iface.address, iface.netmask);
                result.push({
                    interface: name,
                    address: iface.address,
                    netmask: iface.netmask,
                    broadcast: broadcastAddress,
                });
            }
        }
    }
    return result;
}