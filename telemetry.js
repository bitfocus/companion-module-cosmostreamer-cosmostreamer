const PACKET_ID = {
	PACKET_DISCOVERY: 0,
	PACKET_DISCOVERY_ANSWER: 1,
	PACKET_CLIENT_ALIVE: 2,
	PACKET_CLIENT_GONE: 3,
	PACKET_SERVER_STATUS: 4,
	PACKET_CLIENT_BINARY_DATA: 5,
	PACKET_CAMERA_BINARY_TELEMETRY: 6,
	PACKET_CAMERA_TEXT_TELEMETRY: 7,
	PACKET_SERVER_RC_MENU: 8,
	PACKET_PREVIEW_REQUEST: 9,
	PACKET_PREVIEW_ANSWER: 10,
	PACKET_WIRAL_STATUS: 11,
	PACKET_BT_GIMBAL_STATUS: 12,
	PACKET_EXT_FOCUS_STATUS: 13
}

const T_TYPE = {
	BINARY_TELEMETRY1: 0,
	BINARY_TELEMETRY2: 1,
	BINARY_TELEMETRY3: 2,
}

const APP_TYPE = {
	APP_CS_DJI_OSMO: 0, /// Cosmostreamer for Osmo (Wi-Fi connection)							0
	APP_CS_DJI_OSMO_WIRED_USB: 1, /// Cosmostreamer for Osmo Pro/RAW with Wired video adapter	1
	APP_CS_DJI_ZENMUSE: 2, /// Cosmostreamer Wired (USB connection)								2
	APP_CS_DJI_POCKET_USB: 3, /// Cosmostreamer for Pocket Osmo with USB connection				3
	APP_CS_DJI_POCKET_WIRELESS: 4, /// Cosmostreamer for Pocket Osmo with Wi-Fi connection		4
	APP_CS_DJI_ACTION_WIRELESS: 5, /// Cosmostreamer for Osmo Action with Wi-Fi connection		5
	APP_CS_GOPRO: 6, 		/// Cosmostreamer for GoPro											6
	APP_CS_XIAOMI_YI_WIRELESS: 7, /// Cosmostreamer for Xiaomi Yi cams with Wi-Fi connection	7
	APP_CS_PHANTOM_USB: 8, /// Cosmostreamer for Phantom and other DJI Go4 drones				8
	APP_CS_STEREOPI: 9, /// Cosmostreamer for StereoPi/Raspberry Pi								9
	APP_CS_INSTA360EVO_WIRELESS: 10, /// Insta360 EVO Wi-Fi										10
	APP_CS_OCULUS: 11, /// Oculus Go/Quest														11
	APP_CS_OBSBOTTAIL: 12, /// OBSBOT Tail														12
	APP_CS_RTSP: 13, /// RTSP/ONVIF camera														13
	APP_CS_DJI_POCKET2_USB: 14, /// Cosmostreamer for Pocket 2 with USB connection				14
	APP_CS_DJI_POCKET2_WIRELESS: 15, /// Cosmostreamer for Pocket 2 with Wi-Fi connection		15
	APP_CS_REMOTE_CLIENT: 16, /// Cosmostreamer remote client									16
	APP_CS_DJI_FPV_GOGGLES: 17, /// DJI FPV Goggles												17
	APP_CS_NDI_RECEIVER: 18, /// NDI receiver													18
	APP_CS_RTMP_RECEIVER: 19, /// RTMP receiver													19	
	APP_CS_DJI_RAVEN_EYE:20, /// DJI Raven Eye													20
}

const app_types_array = [
	"DJI Osmo Wi-Fi",
	"DJI Osmo Pro/RAW with Wired adapter",
	"DJI Zenmuse",
	"DJI Pocket Osmo USB",
	"DJI Pocket Osmo Wi-Fi",
	"DJI Osmo Action",
	"GoPro",
	"Xiaomi Yi",
	"DJI Phantom4 USB",
	"StereoPi/RaspberryPi",
	"Insta360 EVO Wi-Fi",
	"Oculus Go/Quest",
	"OBSBOT Tail",
	"RTSP/ONVIF camera",
	"DJI Pocket 2 USB",
	"DJI Pocket 2 Wi-Fi",
	"Remote client",
	"DJI FPV Goggles",
	"NDI receiver",
	"RTMP receiver",
	"DJI Raven Eye",
]


var UInt4 = function (value) {
	return (value & 0xF);
};

var Int4 = function (value) {
	var ref = UInt4(value);
	return (ref > 0x7) ? ref - 0x10 : ref;
};

var UInt8 = function (value) {
	return (value & 0xFF);
};

var Int8 = function (value) {
	var ref = UInt8(value);
	return (ref > 0x7F) ? ref - 0x100 : ref;
};

var UInt16 = function (value) {
	return (value & 0xFFFF);
};

var Int16 = function (value) {
	var ref = UInt16(value);
	return (ref > 0x7FFF) ? ref - 0x10000 : ref;
};

let apptype = -1;

function makeTimerStringMs(value_ms) {
    var sec_num = parseInt(value_ms, 10) / 1000;
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = (sec_num - (hours * 3600) - (minutes * 60)).toFixed(3);

    //if (hours   < 10) {hours   = "0"+hours;}
    //if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    //return hours+':'+minutes+':'+seconds;
	return minutes+':'+seconds;
}

function makeTime(value) {
	var hours = parseInt(value / 3600);
	var minutes = parseInt((value % 3600) / 60);
	var seconds = parseInt(value - (hours * 3600) - minutes * 60);
	var hoursStr = (hours < 10) ? "0" + hours : "" + hours;
	var minutesStr = (minutes < 10) ? "0" + minutes : "" + minutes;
	var secondsStr = (seconds < 10) ? "0" + seconds : "" + seconds;
	return hoursStr + ":" + minutesStr + ":" + secondsStr;
}

exports.Parse = function(self, data, host, port) {

	switch (data[0]) {

		case PACKET_ID.PACKET_SERVER_STATUS:

			apptype = data[1] & 0x7F;
			let apptypestr = '';
			try { apptypestr = app_types_array[apptype]; } catch (e) {}

			/// Streams
			let restreamactive = data[6];

			let rtmptime = data[7] + (data[8] << 8) + (data[9] << 16) + (data[10] << 24);
			let rtsptime = data[31] + (data[32] << 8) + (data[33] << 16) + (data[34] << 24);
			let srttime = data[27] + (data[28] << 8) + (data[29] << 16) + (data[30] << 24);
			let onboardrectime = data[11] + (data[12] << 8) + (data[13] << 16) + (data[14] << 24);

			let onboard_rec = (restreamactive >> 0) & 1 == 1;
			let udp_restream = (restreamactive >> 1) & 1 == 1;
			let rtmp_restream = (restreamactive >> 2) & 1 == 1;
			let srt_restream = (restreamactive >> 3) & 1 == 1;
			let rtsp_restream = (restreamactive >> 4) & 1 == 1;
			let rtp_restream = (restreamactive >> 5) & 1 == 1;
			let ndi_restream = (restreamactive >> 6) & 1 == 1;
			let v4l2_restream = (restreamactive >> 7) & 1 == 1;

			/// Automovements state
			var state = parseInt(data[35]);
			var current_number = parseInt(data[36]);
			var total_number = parseInt(data[37]);
			var nearest_number = parseInt(data[38]);

			self.setVariable('onboard_rec_time', onboardrectime > 0 ? makeTime(onboardrectime) : '');
			self.setVariable('srt_time', srttime > 0 ? makeTime(srttime) : '');
			self.setVariable('rtsp_time', rtsptime > 0 ? makeTime(rtsptime) : '');
			self.setVariable('rtmp_time', rtmptime > 0 ? makeTime(rtmptime) : '');

			self.setVariable('am_state', state);
			self.setVariable('am_position', current_number + 1);
			self.setVariable('am_total', total_number);
			self.setVariable('am_nearest', nearest_number + 1);

			self.feedbackVars.am_state = state;
			self.feedbackVars.onboard_rec_state = onboard_rec;

			if (self.feedbackVars.stream_state == undefined) self.feedbackVars.stream_state = []
			self.feedbackVars.stream_state['udp'] = udp_restream;
			self.feedbackVars.stream_state['rtmp'] = rtmp_restream;
			self.feedbackVars.stream_state['srt'] = srt_restream;
			self.feedbackVars.stream_state['rtp'] = rtp_restream;
			self.feedbackVars.stream_state['rtsp'] = rtsp_restream;
			self.feedbackVars.stream_state['ndi'] = ndi_restream;
			self.feedbackVars.stream_state['v4l2'] = v4l2_restream;

			self.checkFeedbacks('am_status');
			self.checkFeedbacks('onboard_rec');
			self.checkFeedbacks('stream_state_udp');
			self.checkFeedbacks('stream_state_rtmp');
			self.checkFeedbacks('stream_state_srt');
			self.checkFeedbacks('stream_state_rtp');
			self.checkFeedbacks('stream_state_rtsp');
			self.checkFeedbacks('stream_state_ndi');
			self.checkFeedbacks('stream_state_v4l2');
		break;

		case PACKET_ID.PACKET_CAMERA_TEXT_TELEMETRY:
			/// Skip first byte
			let packet = data.slice(1, data.length);
			let str = packet.toString('utf8');
			//self.log('info', str);

			/// Split params by commas
			let params = str.split(',');
			for (var i = 0; i < params.length; i++) {
				try {
					var parts = params[i].split('=');
					if (parts[0] == undefined) continue;
					if (parts[1] == undefined) continue;
					this.parseCameraTextTelemetry(self, apptype, parts[0], parts[1]);
				} catch (e) {}
			}
		break;

		case PACKET_ID.PACKET_CAMERA_BINARY_TELEMETRY:
			this.parseCameraBinaryTelemetry(self, apptype, data);
		break;


		case PACKET_ID.PACKET_WIRAL_STATUS:
			self.feedbackVars.wiralStatus.timestamp = new Date().getTime();
			self.feedbackVars.wiralStatus.remote_connected = true;

			self.feedbackVars.wiralStatus.mainunit_connected = data[1] == 1;
			self.feedbackVars.wiralStatus.startpoint_ready = data[2] == 1;
			self.feedbackVars.wiralStatus.endpoint_ready = data[3] == 1;
			self.feedbackVars.wiralStatus.current_distance = data[4] + (data[5] << 8);
			self.feedbackVars.wiralStatus.max_distance = data[6] + (data[7] << 8);
			self.feedbackVars.wiralStatus.current_speed = Int16(data[8] + (data[9] << 8));
			self.feedbackVars.wiralStatus.max_speed = data[10];
			self.feedbackVars.wiralStatus.default_speed = data[11];
			self.feedbackVars.wiralStatus.battery_level = data[26];
			self.feedbackVars.wiralStatus.last_set_speed = data[27] + (data[28] << 8);
			self.feedbackVars.wiralStatus.tictac = data[12] == 1;
			self.feedbackVars.wiralStatus.tictac_speed = data[13];
			self.feedbackVars.wiralStatus.tictac_next_distance = data[14] + (data[15] << 8);
			self.feedbackVars.wiralStatus.tictac_counter = data[16] + (data[17] << 8);
			self.feedbackVars.wiralStatus.tictac_tic_time = data[18] + (data[19] << 8) + (data[20] << 16) + (data[21] << 24);
			self.feedbackVars.wiralStatus.tictac_prev_tic_time = data[22] + (data[23] << 8) + (data[24] << 16) + (data[25] << 24);


			/// If no start point or end point - Wiral Lite is not ready yet
			if (!self.feedbackVars.wiralStatus.startpoint_ready || !self.feedbackVars.wiralStatus.endpoint_ready) {
				self.feedbackVars.wiralStatus.current_distance = 0;
				self.feedbackVars.wiralStatus.max_distance = 0;
				self.feedbackVars.wiralStatus.ready = 0;

				if (!self.feedbackVars.wiralStatus.startpoint_ready) self.feedbackVars.wiralStatus.status = "no start point";
				else if (!self.feedbackVars.wiralStatus.end_ready) self.feedbackVars.wiralStatus.status = "no end point";
			} else {
				self.feedbackVars.wiralStatus.status = "ready " + self.feedbackVars.wiralStatus.battery_level + '%';
				self.feedbackVars.wiralStatus.ready = 1;
			}

			self.setVariable('wiral_status', self.feedbackVars.wiralStatus.status);
			self.setVariable('wiral_distance', self.feedbackVars.wiralStatus.current_distance);
			self.setVariable('wiral_max_distance', self.feedbackVars.wiralStatus.max_distance);
			self.setVariable('wiral_speed', self.feedbackVars.wiralStatus.current_speed / 10.0);
			self.setVariable('wiral_tictac', self.feedbackVars.wiralStatus.tictac);
			self.setVariable('wiral_tictac_counter', self.feedbackVars.wiralStatus.tictac_counter);
			self.setVariable('wiral_tictac_tick_time', makeTimerStringMs(self.feedbackVars.wiralStatus.tictac_tic_time));
			self.setVariable('wiral_tictac_prev_tick_time', makeTimerStringMs(self.feedbackVars.wiralStatus.tictac_prev_tic_time));
			self.setVariable('wiral_battery_level', self.feedbackVars.wiralStatus.battery_level);
			self.setVariable('wiral_last_set_speed', self.feedbackVars.wiralStatus.last_set_speed);

			self.checkFeedbacks('wiral_tictac_active');
			self.checkFeedbacks('wiral_ready');
			self.checkFeedbacks('wiral_moving_back');
			self.checkFeedbacks('wiral_moving_fwd');
			self.checkFeedbacks('wiral_battery_low');

		break;

		case PACKET_ID.PACKET_BT_GIMBAL_STATUS:

            let mode = data[24];
            let pan = Int16((data[25] + (data[26] << 8))) / 10.0;
            let tilt = Int16((data[27] + (data[28] << 8))) / 10.0;
            let roll = Int16((data[29] + (data[30] << 8))) / 10.0;
            let current = Int16((data[31] + (data[32] << 8))) / 100.0;
            let voltage = Int16((data[33] + (data[34] << 8))) / 100.0;
            let battery_level = data[35];
            let battery_charging = data[36] == 1;

			self.feedbackVars.cameraStatus.gimbal_mode = mode + 1;

			self.setVariable('gimbal_pan', pan.toFixed(1));
			self.setVariable('gimbal_tilt', tilt.toFixed(1));
			self.setVariable('gimbal_roll', roll.toFixed(1));

			self.checkFeedbacks('gimbal_mode_1');
			self.checkFeedbacks('gimbal_mode_2');
			self.checkFeedbacks('gimbal_mode_3');
		break;
	}
	
}


exports.parseCameraTextTelemetry = function(self, app_type, name, value) {
	//self.log('info', "telemetry: name " + name + " value " + value);

	switch (app_type) {

		case APP_TYPE.APP_CS_DJI_POCKET2_USB:
		case APP_TYPE.APP_CS_DJI_POCKET2_WIRELESS:
		{
			if (name == "camera_mode") { 
				//self.log('info', "telemetry: name " + name + " value " + value);
				self.feedbackVars.cameraStatus.camera_mode = value;
				self.checkFeedbacks('camera_mode_photo');
				self.checkFeedbacks('camera_mode_video');
			}

			if (name == "image_mode") { 
				self.feedbackVars.cameraStatus.image_mode = value;

				self.setVariable('camera_image_mode', value);

				self.checkFeedbacks('camera_image_mode_auto');
				self.checkFeedbacks('camera_image_mode_shutter');
				self.checkFeedbacks('camera_image_mode_manual');
			}

			if (name == "shutter") { 
				self.feedbackVars.cameraStatus.shutter = value;
				self.setVariable('camera_shutter', value);
			}
			if (name == "iso") { 
				self.feedbackVars.cameraStatus.iso = value;
				self.setVariable('camera_iso', value);
			}
			if (name == "ev") { 
				self.feedbackVars.cameraStatus.ev = value;
				self.setVariable('camera_ev', value);
			}
			if (name == "wb") { 
				self.feedbackVars.cameraStatus.wb = value;
				self.setVariable('camera_wb', value);
			}
			if (name == "color_mode") { 
				self.feedbackVars.cameraStatus.color = value;
				self.setVariable('camera_color', value);
			}

			if (name == "rec_time") { 
				if (self.feedbackVars.cameraStatus.rec_active) {
					self.setVariable('camera_rec_time', value);
				} else {
					self.setVariable('camera_rec_time', '');
				}
			}
		}
		break;
	}
}


exports.parseCameraBinaryTelemetry = function(self, app_type, data) {

	switch (app_type) {

		case APP_TYPE.APP_CS_DJI_POCKET2_USB:
		case APP_TYPE.APP_CS_DJI_POCKET2_WIRELESS:
		{
			if (data[1] == T_TYPE.BINARY_TELEMETRY1) {

				let orientation_lock = data[2] & 0x01;
				let pan = Int16(data[3] + (data[4] << 8)) / 10.0;
				let tilt = Int16(data[5] + (data[6] << 8)) / 10.0;
				let roll = Int16(data[7] + (data[8] << 8)) / 10.0;
				let rec_state = data[9];
				let focus_type = data[13];
				let digital_zoom = data[34] + (data[35] << 8);

				self.feedbackVars.cameraStatus.orientation_lock = orientation_lock;
				self.feedbackVars.cameraStatus.rec_active = ((rec_state >> 6) & 0x03) == 2;

				if (focus_type == 0x85) self.feedbackVars.cameraStatus.focus_type = 'afs';
				if (focus_type == 0x86) self.feedbackVars.cameraStatus.focus_type = "afc";

				self.setVariable('gimbal_pan', pan.toFixed(1));
				self.setVariable('gimbal_tilt', tilt.toFixed(1));
				self.setVariable('gimbal_roll', roll.toFixed(1));
				self.setVariable('digital_zoom', "x" + (digital_zoom / 100.0));

				self.checkFeedbacks('orientation_lock');
				self.checkFeedbacks('camera_rec_active');
				self.checkFeedbacks('camera_focus_afc');
				self.checkFeedbacks('camera_focus_afs');
			}
		}
		break;

	}
}


exports.Check = function(self) {
	//self.log('info', "telemetry check");

	/// Check Wiral Lite telemetry
	if (self.feedbackVars.wiralStatus.timestamp != 0) {
		let dt = new Date().getTime() - self.feedbackVars.wiralStatus.timestamp;
		if (dt > 5000) {
			self.feedbackVars.wiralStatus.ready = 0;
			self.feedbackVars.wiralStatus.status = "not connected";
			self.feedbackVars.wiralStatus.remote_connected = false;
			self.feedbackVars.wiralStatus.timestamp = 0;
			self.feedbackVars.wiralStatus.current_distance = 0;
			self.feedbackVars.wiralStatus.max_distance = 0;
			self.feedbackVars.wiralStatus.current_speed = 0;
			self.feedbackVars.wiralStatus.tictac = 0;
			self.feedbackVars.wiralStatus.tictac_counter = 0;
			self.feedbackVars.wiralStatus.tictac_tic_time = 0;
			self.feedbackVars.wiralStatus.battery_level = 0;

			self.setVariable('wiral_status', self.feedbackVars.wiralStatus.status);
			self.setVariable('wiral_distance', self.feedbackVars.wiralStatus.current_distance);
			self.setVariable('wiral_max_distance', self.feedbackVars.wiralStatus.max_distance);
			self.setVariable('wiral_speed', self.feedbackVars.wiralStatus.current_speed);
			self.setVariable('wiral_tictac', self.feedbackVars.wiralStatus.tictac);
			self.setVariable('wiral_tictac_counter', self.feedbackVars.wiralStatus.tictac_counter);
			self.setVariable('wiral_tictac_tick_time', makeTimerStringMs(self.feedbackVars.wiralStatus.tictac_tic_time));
			self.setVariable('wiral_battery_level', self.feedbackVars.wiralStatus.battery_level);

			self.checkFeedbacks('wiral_tictac_active');
			self.checkFeedbacks('wiral_ready');
			self.checkFeedbacks('wiral_moving_back');
			self.checkFeedbacks('wiral_moving_fwd');
			self.checkFeedbacks('wiral_battery_low');
		}
	}
}
