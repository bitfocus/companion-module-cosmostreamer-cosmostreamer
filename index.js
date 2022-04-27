const dgram = require('dgram');
var actions = require('./actions')
var presets = require('./presets')
var presetsPocket2 = require('./presetsPocket2')
var feedbacks = require('./feedbacks')
var variables = require('./variables')
var telemetry = require('./telemetry')
const instance_skel = require('../../instance_skel')


class instance extends instance_skel {
	/**
	 * Create an instance of the module
	 *
	 * @param {EventEmitter} system - the brains of the operation
	 * @param {string} id - the instance ID
	 * @param {Object} config - saved user configuration parameters
	 * @since 1.0.0
	 */

	constructor(system, id, config) {
		super(system, id, config)

		Object.assign(this, { ...actions })
		Object.assign(this, { ...presets })
		Object.assign(this, { ...presetsPocket2 })
		Object.assign(this, { ...feedbacks })
		Object.assign(this, { ...variables })

		this.lastAction = "";
		this.interval = undefined;

		this.feedbackVars = {
			am_active: false,
			cameraStatus: {},
			wiralStatus: {},
		}

	}

	updateConfig(config) {

		this.log('info', 'updateConfig');

		/*if (this.udp !== undefined) {
			this.udp.destroy()
			delete this.udp
		}*/

		this.config = config;

		this.init_udp();
	}

	init() {

		this.actions();
		this.init_presets();
		this.init_feedbacks();
		this.init_variables();
		this.init_udp();
	}


	// Return config fields for web config
	config_fields() {
		var self = this;
		return [
			{
				type: 'text',
				id: 'info',
				label: 'Information',
				width: 12,
				value: `
				<div class="alert">
					<div>
						<p><a href="https://cosmostreamer.com/#contacts" target="_new" class="btn btn-success">Request support for a product</a></p>
					</div>
					<div>
						<p>If "Use auto discovery" is enabled - field "IP" may be empty</p>
					</div>
				</div>
				`,
			},
			{
				type: 'checkbox',
				id: 'autodiscovery',
				label: 'Use auto discovery',
				default: false,
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'IP',
				/*default: '192.168.1.1',*/
				/*regex: this.REGEX_IP,*/
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Port',
				/*width: 2,*/
				default: 6262,
				regex: this.REGEX_PORT,
			},
		]
	}

	// When module gets deleted
	destroy() {

		this.log('info', 'destroy()');

		if (this.udp !== undefined) {
			this.udp = undefined;
		}

		if (this.interval) {
			clearInterval(this.interval);
		}

		this.debug('destroy', this.id)
	}


	init_presets() {
		let allPresets = [];

		allPresets = allPresets.concat(this.getPresets());
		allPresets = allPresets.concat(this.getPresetsPocket2()),

		this.setPresetDefinitions(allPresets);
	}

	init_feedbacks() {
		this.setFeedbackDefinitions(this.getFeedbacks());
	}


	init_variables() {
		this.setVariableDefinitions(this.getVariables());
	}


	actions(system) {
		this.setActions(this.getActions())
	}


	action(action) {

		let cmd;

		switch (action.action) {
			case 'send': {
				this.parseVariables(action.options.value, (value) => {
					cmd = unescape(value);
				})
				} break


			/// Camera common control

			case 'set_camera_mode': {
				cmd = '!{"cmd":"camera","param":"mode","value":"' + action.options.value + '"}';
				} break

			case 'set_camera_shutter': {
				cmd = '!{"cmd":"shutter","param":"' + action.options.value + '"}';
				} break
			case 'set_camera_iso': {
				cmd = '!{"cmd":"iso","param":"' + action.options.value + '"}';
				} break
			case 'set_camera_ev': {
				cmd = '!{"cmd":"ev","param":"' + action.options.value + '"}';
				} break
			case 'set_camera_wb': {
				cmd = '!{"cmd":"wb","param":"' + action.options.value + '"}';
				} break
			case 'set_camera_color': {
				cmd = '!{"cmd":"color","param":"' + action.options.value + '"}';
				} break

			case 'set_camera_shot': {
				cmd = '!{"cmd":"shot"}';
				} break

			case 'set_camera_rec': {
				cmd = '!{"cmd":"record","param":"' + (action.options.value ? 'start' : 'stop') + '"}';
				} break

			case 'set_camera_dzoom_move': {
				cmd = '!{"cmd":"dzoom",\"param\":\"move\","value":"' + action.options.value + '"}';
				} break

			case 'set_camera_dzoom_set': {
				cmd = '!{"cmd":"dzoom",\"param\":\"set\","value":"' + action.options.value + '"}';
				} break

			case 'set_camera_focus': {
				cmd = '!{"cmd":"focus","param":"type","value":"' + action.options.value + '"}';
				} break

			case 'set_camera_image_mode': {
				cmd = '!{"cmd":"video_mode","param":"' + action.options.value + '"}';
				} break

			/// Gimbal control

			case 'set_gimbal_position': {
				cmd = '!{"cmd":"position","param":"' + action.options.value + '"}';
				} break

			case 'set_gimbal_orientation_lock': {
				cmd = '!{"cmd":"orientation","param":"' + action.options.value + '"}';
				} break

			case 'set_gimbal_move': {
				cmd = '{"cmd":"gimbal","param":"move","value":"' + action.options.value + '","value2":"' + action.options.value2 + '","value3":"' + action.options.value3 + '"}';
				} break;

			case 'set_gimbal_stop': {
				cmd = '{"cmd":"gimbal","param":"move","value":"0","value2":"0","value3":"0"}';
				} break;

			case 'set_gimbal_mode': {
				cmd = '!{"cmd":"gimbal","param":"mode","value":"' + action.options.value + '"}';
				} break;


			/// Onboard recording and streaming

			case 'set_onboard_rec': {
				cmd = '{"cmd":"updateconfig","param":"rec","value":"' + (action.options.value ? 1 : 0) + '"}';
				} break;

			case 'set_stream': {
				cmd = '{"cmd":"updateconfig","param":"stream","value":"' + action.options.value + '","value2":"' + (action.options.value2 ? 1 : 0) + '"}';
				} break;
			

			/// Auto movements controls

			case 'set_am_preset': {
				this.parseVariables(action.options.value, (value) => {
					value = value - 1;
					if (value < 0) value = 0;
					cmd = '{"cmd":"updateconfig","param":"automovement","value":"move","value2":"' + value + '"}';
				})
				} break
			case 'store_am_preset': {
				if (this.lastAction == "set_am_preset") break;
				this.parseVariables(action.options.value, (value) => {
					value = value - 1;
					if (value < 0) value = 0;
					cmd = '{"cmd":"updateconfig","param":"automovement","value":"store","value2":"' + value + '"}';
				})
				} break
			case 'set_am_state': {
				cmd = '{"cmd":"updateconfig","param":"automovement","value":"setstate","value2":"' + action.options.value + '"}';
				} break;

			case 'set_am_next': {
				cmd = '{"cmd":"updateconfig","param":"automovement","value":"movenext","value2":""}';
				} break;

			case 'set_am_prev': {
				cmd = '{"cmd":"updateconfig","param":"automovement","value":"moveprev","value2":""}';
				} break;

			/// Wiral Lite controls
	
			case 'wiral_move': {
				cmd = '!{"cmd":"wiral","param":"position","value":"set","value2":"' + action.options.value + '","value3":"' + action.options.value2 + '"}';
				} break;

			case 'wiral_move_to': {
				cmd = '!{"cmd":"wiral","param":"position","value":"set","value2":"' + action.options.value + '","value3":"' + action.options.value2 + '"}';
				} break;

			case 'wiral_stop': {
				cmd = '!{"cmd":"wiral","param":"position","value":"set","value2":"0","value3":"0"}';
				} break;

			case 'wiral_change_speed': {
				cmd = '!{"cmd":"wiral","param":"speed","value":"change","value2":"' + action.options.value + '"}';
			} break;

			case 'wiral_tictac': {
				cmd = '!{"cmd":"wiral","param":"mode","value":"tic-tac","value2":"' + action.options.value + '","value3":"' + action.options.value2 + '"}';
			} break;

		}

        this.lastAction = action.action;

		if (cmd == undefined) return; 

		let sendBuf = Buffer.from(cmd, 'utf8');

		if (sendBuf != '') {
			if ((this.udp !== undefined) && (this.remote_host !== undefined)) {
				try {
					this.log('info', 'sending ' + sendBuf + ' to ' + this.remote_host);
					this.udp.send(sendBuf, this.remote_port, this.remote_host, function(error) {});
				} catch (e) {}
			}
		}
	}
}


instance.prototype.feedback = function(feedback, bank) {
	let self = this;

	//self.log('info', 'checkig feedback: ' + feedback.type);
	
	if (feedback.type === 'am_status') {
		if (self.feedbackVars.am_state) {
			return { color: feedback.options.fg, bgcolor: feedback.options.bg };
		}
	}

	if (feedback.type === 'orientation_lock') {
		if (self.feedbackVars.cameraStatus.orientation_lock) {
			return { color: feedback.options.fg, bgcolor: feedback.options.bg };
		}
	}

	if (feedback.type.startsWith('gimbal_mode_')) {
		try {
		let mode = parseInt(feedback.type.replace('gimbal_mode_', ''));
		if (self.feedbackVars.cameraStatus.gimbal_mode === mode) {
			return { /*color: feedback.options.true_fg,*/ bgcolor: feedback.options.true_bg };
		} else {
			return { /*color: feedback.options.false_fg,*/ bgcolor: feedback.options.false_bg };
		}
		} catch (e) {}
	}

	if (feedback.type === 'wiral_tictac_active') {
		if (self.feedbackVars.wiralStatus.tictac) {
			return { color: feedback.options.fg, bgcolor: feedback.options.bg };
		}
	}

	if (feedback.type === 'wiral_ready') {
		if (self.feedbackVars.wiralStatus.ready === 1) {
			return { color: feedback.options.ready_color };
		} else {
			return { color: feedback.options.not_ready_color };
		}
	}

	if (feedback.type === 'wiral_moving_fwd') {
		if (self.feedbackVars.wiralStatus.current_speed > 10) {
			return { color: feedback.options.true_color };
		} else {
			return { color: feedback.options.false_color };
		}
	}

	if (feedback.type === 'wiral_moving_back') {
		if (self.feedbackVars.wiralStatus.current_speed < -10) {
			return { color: feedback.options.true_color };
		} else {
			return { color: feedback.options.false_color };
		}
	}

	if (feedback.type === 'wiral_battery_low') {
		if (self.feedbackVars.wiralStatus.battery_level <= 25) {
			return { color: feedback.options.true_color };
		} else {
			return { color: feedback.options.false_color };
		}
	}

	if (feedback.type === 'onboard_rec') {
		if (self.feedbackVars.onboard_rec_state) {
			return { color: feedback.options.true_fg, bgcolor: feedback.options.true_bg };
		} else {
			return { color: feedback.options.false_fg, bgcolor: feedback.options.false_bg };
		}
	}

	if (feedback.type.startsWith('stream_state_')) {
		try {
		let type = feedback.type.replace('stream_state_', '');
		if (self.feedbackVars.stream_state[type]) {
			return { color: feedback.options.true_fg, bgcolor: feedback.options.true_bg };
		} else {
			return { color: feedback.options.false_fg, bgcolor: feedback.options.false_bg };
		}
		} catch (e) {}
	}


	if (feedback.type === 'camera_mode_video') {
		if (self.feedbackVars.cameraStatus.camera_mode == "video") {
			return { bgcolor: feedback.options.true_bg };
		} else {
			return { bgcolor: feedback.options.false_bg };
		}
	}
	if (feedback.type === 'camera_mode_photo') {
		if (self.feedbackVars.cameraStatus.camera_mode == "photo") {
			return { bgcolor: feedback.options.true_bg };
		} else {
			return { bgcolor: feedback.options.false_bg };
		}
	}

	if (feedback.type === 'camera_rec_active') {
		if (self.feedbackVars.cameraStatus.rec_active) {
			return { bgcolor: feedback.options.true_bg };
		} else {
			return { bgcolor: feedback.options.false_bg };
		}
	}


	if (feedback.type.startsWith('camera_focus_')) {
		try {
		let type = feedback.type.replace('camera_focus_', '');
		if (self.feedbackVars.cameraStatus.focus_type == type) {
			return { /*color: feedback.options.true_fg,*/ bgcolor: feedback.options.true_bg };
		} else {
			return { /*color: feedback.options.false_fg,*/ bgcolor: feedback.options.false_bg };
		}
		} catch (e) {}
	}


	if (feedback.type.startsWith('camera_image_mode_')) {
		try {
		let type = feedback.type.replace('camera_image_mode_', '');
		if (self.feedbackVars.cameraStatus.image_mode == type) {
			return { /*color: feedback.options.true_fg,*/ bgcolor: feedback.options.true_bg };
		} else {
			return { /*color: feedback.options.false_fg,*/ bgcolor: feedback.options.false_bg };
		}
		} catch (e) {}
	}


	return {};
}



instance.prototype.init_udp = function() {
	let self = this;
	let packetTimestamp = 0;

	self.destroy();

	self.remote_host = "";
	self.remote_port = 0;

	let autoDiscovery = self.config.autodiscovery;

	self.remote_port = self.config.port;
	if (!self.remote_port) {
		self.remote_port = 6262;
	}

	self.remote_host = self.config.host;
	if (!self.remote_host) {
	}

	if (autoDiscovery) {
		self.remote_host = undefined;
	}

	if (autoDiscovery) {
		self.log('info', 'Init UDP with auto discovery');
		self.status(self.STATE_WARNING, 'Searching');
		self.setVariable('cs_state', 'searching');
	} else {
		self.log('info', 'Init UDP remote ' + self.remote_host + ':' + self.remote_port);
	}

	try {
		self.udp = dgram.createSocket('udp4');

		self.udp.on('listening', function () {
			self.udp.setBroadcast(true);
		});

		self.udp.on('error', function (err) {
			self.status(self.STATE_ERROR, err);
			self.log('error','Network error: ' + err.message);
			self.setVariable('cs_state', 'error');
		});
	
		self.udp.on('message', function (data, rinfo) {

			if ((data[0] == 0x52) && (data[1] == 0)) {

				if (packetTimestamp == 0) {

					if (!self.remote_host) {
						self.remote_host = rinfo.address;
					}

					self.log('info', 'connected to ' + rinfo.address + ':' + rinfo.port);
					self.status(self.STATE_OK);

					/// Get host last IP part
					let point = "";
					try {
						point = '.' + rinfo.address.split('.')[3];
					} catch (e) {}
					self.setVariable('cs_state', 'ready ' + point);
				}

				packetTimestamp = new Date().getTime();

				//self.log('info', 'telemetry ' + data.length + ' bytes from ' + rinfo.address + ':' + rinfo.port);

				let packet = data.slice(12, data.length);

				try {
					telemetry.Parse(self, packet, rinfo.address, rinfo.port);
				} catch (e) {
					self.log('info', 'telemetry parsing failed');
				}

				packet = null;
			}

			data = null;
		});
	
		/*self.udp.on('status_change', function (status, message) {
			self.status(self.STATE_OK);
			self.log('info', 'on status_change');
			self.status(status, message);
		});*/
	}
	catch (error) {
		self.log('error', 'Error starting UDP: ' + error);
	}

	if (self.interval != undefined) clearInterval(self.interval);

	self.interval = setInterval(function() {

		if (packetTimestamp == 0) {
			if (!self.remote_host) {
				if (!autoDiscovery) {
					self.status(self.STATE_WARNING, 'IP is empty');
					self.setVariable('cs_state', 'empty IP');
				}
			} else {
				self.status(self.STATE_WARNING, 'Connecting');
				self.setVariable('cs_state', 'connecting');
			}
		}

		if (packetTimestamp > 0) {
			let dt = new Date().getTime() - packetTimestamp;
			//self.log('info', 'dt = ' + dt);
			if (dt > 3000) {
				packetTimestamp = 0;
				self.log('info', 'connection lost');
				self.status(self.STATE_ERROR, "Connection lost");
				self.setVariable('cs_state', 'disconn');

				if (autoDiscovery) {
					self.remote_host = undefined;
				}
			}
		}

		telemetry.Check(self);

		/// Send alive message
		if (self.remote_host) {
			//self.log('info', 'Sending alive message to ' + self.remote_host + ':' + self.remote_port);
			try {
				let sendBuf = Buffer.from('{}', 'utf8');
				self.udp.send(sendBuf, self.remote_port, self.remote_host, function(error) {});
			} catch (e) {}
		}

		/// Send discovery message
		if (autoDiscovery && !self.remote_host) {
			self.status(self.STATE_WARNING, 'Searching');
			self.setVariable('cs_state', 'searching');
			//self.log('info', 'Sending discovery message');
			try {
				let sendBuf = Buffer.from('{}', 'utf8');
				self.udp.send(sendBuf, self.remote_port, "255.255.255.255", function(error) {});
			} catch (e) {}
		}

	}, 1000);
};


exports = module.exports = instance
