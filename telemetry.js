const Feedback = require('./feedbacks');
const Variables = require('./variables');

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
	APP_CS_WEBCAM: 21, 		  /// UVC Webcams													21
	APP_CS_DJI_MINI2: 22, 	  /// DJI Mini2 and other DJI Fly drones							22
	APP_CS_DJI_AVATA: 23, 	  /// DJI Avata/O3													23
	APP_CS_JETSON_CAMERA:24,   /// Jetson Nano camera											24
	APP_CS_DJI_ACTION234:25,   /// DJI Action 2/3/4												25
	APP_CS_DJI_POCKET3:26, /// DJI Pocket3														26
	APP_CS_AIRPLAY:27, /// Apple AirPlay														27
	APP_CS_DJI_PILOT:28, /// DJI Pilot drones													28
	APP_CS_DJI_SKYPORT:29, /// DJI Skyport cams (H20t, etc)										29
	APP_CS_DJI_GOGGLES3_WIRELESS:30, /// DJI Goggles3 Wireless									30
    APP_CS_DJI_SDR: 31, /// DJI SDR                                                             31
	APP_CS_DJI_MINI2_PRO: 32, 	  /// DJI Fly drones Pro										32
	APP_CS_DJI_AVATA_PRO: 33 	  /// DJI Goggles2/3/Integra/N3 Pro								23
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
	"DJI SDR"
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
let connected = false;

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

function makeTimeMinSec(value) {
	var minutes = parseInt((value % 3600) / 60);
	var seconds = parseInt(value - minutes * 60);
	var minutesStr = (minutes < 10) ? "0" + minutes : "" + minutes;
	var secondsStr = (seconds < 10) ? "0" + seconds : "" + seconds;
	return minutesStr + ":" + secondsStr;
}

exports.Parse = function(self, data, host, port) {

    //self.log('info', 'Telemetry parse');

	switch (data[0]) {

		case PACKET_ID.PACKET_SERVER_STATUS:

			apptype = data[1] & 0x7F;
			let apptypestr = '';
			try { apptypestr = app_types_array[apptype]; } catch (e) {}

            /// If no camera connected - clear all stored data
            let datavideoactive = data[5];
            if (datavideoactive == 0) {
                if (connected) {
                    connected = false;
                    /// Clear all feedback vars
                    Feedback.clear(self);
                    Variables.clear(self);
                }
            } else {
                connected = true;
            }

			/// Streams
			let restreamactive = data[6];
			let restreamactive2 = 0;
			try { restreamactive2 = data[51]; } catch (e) { }
			var restreamactive3 = 0;
			try { restreamactive3 = data[83]; } catch (e) { }

			let rtmptime = data[7] + (data[8] << 8) + (data[9] << 16) + (data[10] << 24);
			let rtmptime2 = 0;
			try { rtmptime2 = data[58] + (data[59] << 8) + (data[60] << 16) + (data[61] << 24); } catch (e) {}
			var rtmp_youtube_time = 0;
			try { rtmp_youtube_time = data[66] + (data[67] << 8) + (data[68] << 16) + (data[69] << 24); } catch (e) {}
			var rtmp_instagram_time = 0;
			try { rtmp_instagram_time = data[70] + (data[71] << 8) + (data[72] << 16) + (data[73] << 24); } catch (e) {}
			var rtmp_facebook_time = 0;
			try { rtmp_facebook_time = data[74] + (data[75] << 8) + (data[76] << 16) + (data[77] << 24); } catch (e) {}
			var rtmp_tiktok_time = 0;
			try { rtmp_tiktok_time = data[78] + (data[79] << 8) + (data[80] << 16) + (data[81] << 24); } catch (e) {}
			var hlstime = 0;
			try { hlstime = data[84] + (data[85] << 8) + (data[86] << 16) + (data[87] << 24); } catch (e) {}


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
			let dvbt_restream = (restreamactive2 >> 0) & 1 == 1;
			let ndihx_restream = (restreamactive2 >> 1) & 1 == 1;
			let mpegts_restream = (restreamactive2 >> 2) & 1 == 1;
			let rtmp2_restream = (restreamactive2 >> 3) & 1 == 1;
			var rtmp_youtube_restream = (restreamactive2 >> 4) & 1 == 1;
			var rtmp_instagram_restream = (restreamactive2 >> 5) & 1 == 1;
			var rtmp_facebook_restream = (restreamactive2 >> 6) & 1 == 1;
			var rtmp_tiktok_restream = (restreamactive2 >> 7) & 1 == 1;

            var hls_restream = (restreamactive3 >> 0) & 1 == 1;
            if (hls_restream == 0) hlstime = 0;

            var rtsp_client_restream = (restreamactive3 >> 1) & 1 == 1;
            var video_paused = (restreamactive3 >> 2) & 1 == 1;


			/// Automovements state
			var state = parseInt(data[35]);
			var current_number = parseInt(data[36]);
			var total_number = parseInt(data[37]);
			var nearest_number = parseInt(data[38]);


            /// Other states
            try {
                var display_smooth_enabled = data[93] & 1;
                var video_intro_enabled = data[82] & 1;
                var bgaudio_enabled = (data[82] >> 1) & 1;
                var app2_enabled = data[88] == 1;

                Feedback.feedbackVars.app_vars.display_smooth_enabled = display_smooth_enabled;
                Feedback.feedbackVars.app_vars.video_intro_enabled = video_intro_enabled;
                Feedback.feedbackVars.app_vars.bgaudio_enabled = bgaudio_enabled;
                Feedback.feedbackVars.app_vars.app2_enabled = app2_enabled;

                self.checkFeedbacks('feedback_display_smooth_enabled');
                self.checkFeedbacks('feedback_display_smooth_disabled');
                self.checkFeedbacks('feedback_video_intro_enabled');
                self.checkFeedbacks('feedback_video_intro_disabled');
                self.checkFeedbacks('feedback_bgaudio_enabled');
                self.checkFeedbacks('feedback_bgaudio_disabled');
                self.checkFeedbacks('feedback_secondary_camera_enabled');
                self.checkFeedbacks('feedback_secondary_camera_disabled');
            } catch (e) {}

            self.setVariableValues({ 'onboard_rec_time': onboardrectime > 0 ? makeTime(onboardrectime) : ''});
            self.setVariableValues({ 'srt_time': srttime > 0 ? makeTime(srttime) : ''});
            self.setVariableValues({ 'rtsp_time': rtsptime > 0 ? makeTime(rtsptime) : ''});
            self.setVariableValues({ 'hls_time': hlstime > 0 ? makeTime(hlstime) : ''});
            self.setVariableValues({ 'rtmp_time_custom1': rtmptime > 0 ? makeTime(rtmptime) : ''});
            self.setVariableValues({ 'rtmp_time_custom2': rtmptime2 > 0 ? makeTime(rtmptime2) : ''});
            self.setVariableValues({ 'rtmp_time_youtube': rtmp_youtube_time > 0 ? makeTime(rtmp_youtube_time) : ''});
            self.setVariableValues({ 'rtmp_time_insta': rtmp_instagram_time > 0 ? makeTime(rtmp_instagram_time) : ''});
            self.setVariableValues({ 'rtmp_time_facebook': rtmp_facebook_time > 0 ? makeTime(rtmp_facebook_time) : ''});
            self.setVariableValues({ 'rtmp_time_tiktok': rtmp_tiktok_time > 0 ? makeTime(rtmp_tiktok_time) : ''});

            /*
			self.setVariable('am_state', state);
			self.setVariable('am_position', current_number + 1);
			self.setVariable('am_total', total_number);
			self.setVariable('am_nearest', nearest_number + 1);

			self.feedbackVars.am_state = state;*/

            Feedback.feedbackVars.video_pause_state = video_paused;
            Feedback.feedbackVars.camera_connected = datavideoactive;
			Feedback.feedbackVars.onboard_rec_state = onboard_rec;
			Feedback.feedbackVars.stream_state_udp = udp_restream;
			Feedback.feedbackVars.stream_state_srt = srt_restream;
			Feedback.feedbackVars.stream_state_rtp = rtp_restream;
			Feedback.feedbackVars.stream_state_rtsp = rtsp_restream;
			Feedback.feedbackVars.stream_state_rtsp_client = rtsp_client_restream;
			Feedback.feedbackVars.stream_state_ndi = ndi_restream;
			Feedback.feedbackVars.stream_state_v4l2 = v4l2_restream;
            Feedback.feedbackVars.stream_state_dvbt = dvbt_restream;
            Feedback.feedbackVars.stream_state_ndihx = ndihx_restream;
            Feedback.feedbackVars.stream_state_mpegts = mpegts_restream;
            Feedback.feedbackVars.stream_state_hls = hls_restream;
			Feedback.feedbackVars.stream_state_rtmp_custom1 = rtmp_restream;
			Feedback.feedbackVars.stream_state_rtmp_custom2 = rtmp2_restream;
			Feedback.feedbackVars.stream_state_rtmp_youtube = rtmp_youtube_restream;
			Feedback.feedbackVars.stream_state_rtmp_insta = rtmp_instagram_restream;
			Feedback.feedbackVars.stream_state_rtmp_facebook = rtmp_facebook_restream;
			Feedback.feedbackVars.stream_state_rtmp_tiktok = rtmp_tiktok_restream;

            self.checkFeedbacks('am_status');
            self.checkFeedbacks('video_paused');
			self.checkFeedbacks('onboard_rec');
			self.checkFeedbacks('stream_state_udp');
			self.checkFeedbacks('stream_state_srt');
			self.checkFeedbacks('stream_state_rtp');
			self.checkFeedbacks('stream_state_rtsp');
			self.checkFeedbacks('stream_state_rtsp_client');
			self.checkFeedbacks('stream_state_ndi');
			self.checkFeedbacks('stream_state_v4l2');
			self.checkFeedbacks('stream_state_dvbt');
			self.checkFeedbacks('stream_state_dvbt');
			self.checkFeedbacks('stream_state_ndihx');
			self.checkFeedbacks('stream_state_mpegts');
			self.checkFeedbacks('stream_state_hls');
			self.checkFeedbacks('stream_state_rtmp_custom1');
			self.checkFeedbacks('stream_state_rtmp_custom2');
			self.checkFeedbacks('stream_state_rtmp_youtube');
			self.checkFeedbacks('stream_state_rtmp_insta');
            self.checkFeedbacks('stream_state_rtmp_facebook');
			self.checkFeedbacks('stream_state_rtmp_tiktok');
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
			/*self.feedbackVars.wiralStatus.timestamp = new Date().getTime();
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
			self.checkFeedbacks('wiral_battery_low');*/

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

			/*self.feedbackVars.cameraStatus.gimbal_mode = mode + 1;

			self.setVariable('gimbal_pan', pan.toFixed(1));
			self.setVariable('gimbal_tilt', tilt.toFixed(1));
			self.setVariable('gimbal_roll', roll.toFixed(1));

			self.checkFeedbacks('gimbal_mode_1');
			self.checkFeedbacks('gimbal_mode_2');
			self.checkFeedbacks('gimbal_mode_3');*/
		break;
	}

}


exports.parseCameraTextTelemetry = function(self, app_type, name, value) {
	//self.log('info', "telemetry: name " + name + " value " + value);

    if (name == "camera_model") {
        Feedback.feedbackVars.camera_vars.camera_model = value;
        self.setVariableValues({'camera_model': value});
    }


    if (name == "camera_mode") {
        Feedback.feedbackVars.camera_vars.camera_mode = value;
        self.checkFeedbacks('camera_mode_photo');
        self.checkFeedbacks('camera_mode_video');
    }

	if (name == "lense_mode") {
        Feedback.feedbackVars.camera_vars.lense_mode = value;
        self.checkFeedbacks('lense_mode_single');
        self.checkFeedbacks('lense_mode_360');
    }

	if (name == "angle360") {
        Feedback.feedbackVars.camera_vars.angle360 = parseInt(value);

		self.setVariableValues({ '360angle': parseInt(value)});

        self.checkFeedbacks('camera_angle360_104');
		self.checkFeedbacks('camera_angle360_134');
		self.checkFeedbacks('camera_angle360_272');
    }

    if (name == "image_mode") {
        Feedback.feedbackVars.camera_vars.image_mode = value;

        self.setVariableValues({'camera_image_mode': value});

        self.checkFeedbacks('image_mode_auto');
        self.checkFeedbacks('image_mode_shutter');
        self.checkFeedbacks('image_mode_manual');
    }

    if (name == "rec_time") {
        Feedback.feedbackVars.camera_vars.rec_time = value;
        self.setVariableValues({'rec_time': value});
    }

    if (name == "ev") {
        Feedback.feedbackVars.camera_vars.camera_ev = value;
        self.setVariableValues({'camera_ev': value});
    }

    if (name == "shutter") {
        Feedback.feedbackVars.camera_vars.camera_shutter = value;
        self.setVariableValues({'camera_shutter': value});
    }
    if (name == "shutter_set") {
        Feedback.feedbackVars.camera_vars.camera_shutter_set = value;
        self.setVariableValues({'camera_shutter_set': value});
    }

    if (name == "iso") {
        Feedback.feedbackVars.camera_vars.camera_iso = value;
        self.setVariableValues({'camera_iso': value});
    }
    if (name == "iso_set") {
        Feedback.feedbackVars.camera_vars.camera_iso_set = value;
        self.setVariableValues({'camera_iso_set': value});
    }

    if (name == "aperture") {
        Feedback.feedbackVars.camera_vars.camera_aperture = value;
        self.setVariableValues({'camera_aperture': value});
    }

    if (name == "wb") {
        Feedback.feedbackVars.camera_vars.camera_wb = value;
        self.setVariableValues({'camera_wb': value});
    }
    if (name == "wb_temp") {
        if (value > 0) {
            Feedback.feedbackVars.camera_vars.camera_wb_temp = value;
            self.setVariableValues({'camera_wb_temp': value});
        }
    }

    if (name == "dzoom") {
        Feedback.feedbackVars.camera_vars.camera_dzoom = value;
        self.setVariableValues({'camera_dzoom': value});
    }

    if (name == "sd") {
        Feedback.feedbackVars.camera_vars.camera_sd_free = value;
        self.setVariableValues({'camera_sd_free': value});
    }

    if (name == "battery_level") {
        Feedback.feedbackVars.drone_vars.camera_battery_level = value;
        self.setVariableValues({'camera_battery_level': value});
    }
    if (name == "goggles_battery_level") {
        Feedback.feedbackVars.drone_vars.goggles_battery_level = value;
        self.setVariableValues({'goggles_battery_level': value});
    }
    if (name == "rc_battery_level") {
        Feedback.feedbackVars.drone_vars.rc_battery_level = value;
        self.setVariableValues({'rc_battery_level': value});
    }

    if (name == "rssi_v") {
        Feedback.feedbackVars.drone_vars.rssi_video = value;
        self.setVariableValues({'drone_rssi_video': value});
    }
    if (name == "rssi_rc") {
        Feedback.feedbackVars.drone_vars.rssi_rc = value;
        self.setVariableValues({'drone_rssi_rc': value});
    }

    if (name == "ftime_left") {
        var t_str = makeTimeMinSec(value);
        Feedback.feedbackVars.drone_vars.flight_time_estimated = t_str;
        self.setVariableValues({'drone_flight_time_estimated': t_str});
    }

    if (name == "home_distance") {
        Feedback.feedbackVars.drone_vars.home_distance = value;
        self.setVariableValues({'home_distance': value + 'm'});
    }
    if (name == "alt") {
        Feedback.feedbackVars.drone_vars.altitude = value;
        self.setVariableValues({'altitude': value + 'm'});
    }
    if (name == "alt2") {
        if (value <= 0.1) value = '';
        if (value >= 20) value = '';
        Feedback.feedbackVars.drone_vars.altitude_sonar = value;
        if (value != '') {
            self.setVariableValues({'altitude_sonar': value + 'm'});
        } else {
            self.setVariableValues({'altitude_sonar': ''});
        }
    }

    /// Drone control from app enabled/disabled
    if (name == "ctrl_app_en") {
        Feedback.feedbackVars.drone_vars.app_control_enabled = parseInt(value);
        self.checkFeedbacks('drone_control_app_enabled');
        self.checkFeedbacks('drone_control_app_disabled');
    }

    /// Drone waypoints mission
    if (name == "wp_active") {
        Feedback.feedbackVars.drone_vars.wp_active = parseInt(value);
        self.checkFeedbacks('drone_wp_active');
        self.checkFeedbacks('drone_wp_inactive');
    }
    if (name == "wp_paused") {
        Feedback.feedbackVars.drone_vars.wp_paused = parseInt(value);
        self.checkFeedbacks('drone_wp_paused');
        self.checkFeedbacks('drone_wp_not_paused');
    }
    if (name == "wp_name") {
        Feedback.feedbackVars.drone_vars.wp_name = value;
        self.setVariableValues({'mission_name': value});
    }
    if (name == "wp_point") {
        Feedback.feedbackVars.drone_vars.wp_point = value;
        self.setVariableValues({'mission_point': value});
    }
    if (name == "wp_point_total") {
        Feedback.feedbackVars.drone_vars.wp_point_total = value;
        self.setVariableValues({'mission_point_total': value});
    }
    if (name == "wp_distance") {
        Feedback.feedbackVars.drone_vars.wp_distance = value;
        self.setVariableValues({'mission_distance': value});
    }
    if (name == "wp_distance_total") {
        Feedback.feedbackVars.drone_vars.wp_distance_total = value;
        self.setVariableValues({'mission_distance_total': value});
    }
    if (name == "wp_time") {
        Feedback.feedbackVars.drone_vars.wp_time = makeTimeMinSec(value);
        self.setVariableValues({'mission_time': makeTimeMinSec(value)});
    }
    if (name == "wp_time_total") {
        Feedback.feedbackVars.drone_vars.wp_time_total = makeTimeMinSec(value);
        self.setVariableValues({'mission_time_total': makeTimeMinSec(value)});
    }

    if (name == "flight_mode") {
        Feedback.feedbackVars.drone_vars.flight_mode = value;
        self.setVariableValues({'drone_flight_mode': value});
    }
    if (name == "in_flight") {
        Feedback.feedbackVars.drone_vars.in_flight = parseInt(value);
        self.setVariableValues({'drone_in_flight': parseInt(value)});
        self.checkFeedbacks('drone_in_flight');
    }
    if (name == "landing") {
        Feedback.feedbackVars.drone_vars.in_landing = parseInt(value);
        self.setVariableValues({'drone_in_landing': parseInt(value)});
        self.checkFeedbacks('drone_in_landing');
    }
    if (name == "rth") {
        Feedback.feedbackVars.drone_vars.in_rth = parseInt(value);
        self.setVariableValues({'drone_in_rth': parseInt(value)});
        self.checkFeedbacks('drone_in_rth');
    }

    if (name == "ass_cam") {
        Feedback.feedbackVars.drone_vars.obstacle_cam_id = parseInt(value);
        self.setVariableValues({'drone_obstacle_cam_id': parseInt(value)});
        self.checkFeedbacks('feedback_obstacle_camera_0');
        self.checkFeedbacks('feedback_obstacle_camera_1');
        self.checkFeedbacks('feedback_obstacle_camera_2');
        self.checkFeedbacks('feedback_obstacle_camera_3');
        self.checkFeedbacks('feedback_obstacle_camera_4');
		self.checkFeedbacks('feedback_obstacle_camera_5');
		self.checkFeedbacks('feedback_obstacle_camera_6');
    }


    /// DJI SDR
    if (name == "rssi_rx") {
        Feedback.feedbackVars.link_vars.rssi_rx = parseInt(value);
        self.setVariableValues({'link_rssi_rx': parseInt(value)});
    }
    if (name == "rssi_tx") {
        Feedback.feedbackVars.link_vars.rssi_tx = parseInt(value);
        self.setVariableValues({'link_rssi_tx': parseInt(value)});
    }
    if (name == "auto_channel") {
        Feedback.feedbackVars.link_vars.auto_channel = value == "1" ? true : false;
        self.setVariableValues({'link_auto_channel': value == "1" ? true : false});
        self.checkFeedbacks('link_channel_auto');
    }
    if (name == "current_ch") {
        Feedback.feedbackVars.link_vars.current_channel = parseInt(value);
        self.setVariableValues({'link_current_channel': parseInt(value)});
        for (var i = 1; i <= 32; i++) self.checkFeedbacks('link_channel_' + i);
    }
    if (name == "current_ch_freq") {
        Feedback.feedbackVars.link_vars.current_channel_freq = parseInt(value);
        self.setVariableValues({'link_current_channel_freq': parseInt(value)});
    }
    if (name == "channels_list") {
        let list = value.split(';');
        for (var i in list) {
            if (list[i] == '') continue;
            let items = list[i].split(':');
            let item_id = items[0];
            let item_freq = items[2];
            let item_level = items[3];

            let varname = 'link_channel_' + item_id + '_freq';
            let new_item = {}
            new_item[varname] = parseInt(item_freq);
            self.setVariableValues(new_item);

            let varname2 = 'link_channel_' + item_id + '_level';
            let new_item2 = {}
            new_item2[varname2] = parseInt(item_level);
            self.setVariableValues(new_item2);
        }
    }
    if (name == "tx_a") {
        Feedback.feedbackVars.link_vars.link_tx_ok = value == "1" ? true : false;
        self.setVariableValues({'link_tx_ok': value == "1" ? "OK" : "none"});
    }
    if (name == "g_a") {
        Feedback.feedbackVars.link_vars.link_gimbal_ok = value == "1" ? true : false;
        self.setVariableValues({'link_gimbal_ok': value == "1" ? "OK" : "none"});
    }
    if (name == "c_a") {
        Feedback.feedbackVars.link_vars.link_camera_ok = value == "1" ? true : false;
        self.setVariableValues({'link_camera_ok': value == "1" ? "OK" : "none"});
    }


    if (name == "js") {
        let parts = value.split(':');
        try {
            self.setVariableValues({'gimbal_speed_pan': parts[0]});
            self.setVariableValues({'gimbal_speed_tilt': parts[1]});
            self.setVariableValues({'gimbal_speed_roll': parts[2]});

            self.setVariableValues({'gimbal_smooth_pan': parts[3]});
            self.setVariableValues({'gimbal_smooth_tilt': parts[4]});
            self.setVariableValues({'gimbal_smooth_roll': parts[5]});
        } catch (e) {}
    }


	/*switch (app_type) {

		default:
		case APP_TYPE.APP_CS_DJI_POCKET2_USB:
		case APP_TYPE.APP_CS_DJI_POCKET2_WIRELESS:
		{
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

		case APP_TYPE.APP_CS_DJI_RAVEN_EYE:
		{
			if (name == "rec_time") {
				if (self.feedbackVars.cameraStatus.rec_active) {
					self.setVariable('camera_rec_time', value);
				} else {
					self.setVariable('camera_rec_time', '');
				}
			}
		}
		break;
	}*/
}



exports.parseCameraBinaryTelemetry = function(self, app_type, data) {

	switch (app_type) {

		/*default:
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

		case APP_TYPE.APP_CS_DJI_RAVEN_EYE:
		{
			if (data[1] == T_TYPE.BINARY_TELEMETRY1) {
				let mode = data[12];
				let pan = Int16(data[3] + (data[4] << 8)) / 10.0;
				let tilt = Int16(data[5] + (data[6] << 8)) / 10.0;
				let roll = Int16(data[7] + (data[8] << 8)) / 10.0;
				let rec_state = data[14];

				self.feedbackVars.cameraStatus.gimbal_mode = mode + 1;
				self.feedbackVars.cameraStatus.rec_active = rec_state == 1;

				self.setVariable('gimbal_pan', pan.toFixed(1));
				self.setVariable('gimbal_tilt', tilt.toFixed(1));
				self.setVariable('gimbal_roll', roll.toFixed(1));

				self.checkFeedbacks('camera_rec_active');
				self.checkFeedbacks('gimbal_mode_1');
				self.checkFeedbacks('gimbal_mode_2');
				self.checkFeedbacks('gimbal_mode_3');
			}
		}
		break;*/

        case APP_TYPE.APP_CS_DJI_AVATA:
        case APP_TYPE.APP_CS_DJI_AVATA_PRO: {
			let orientation_lock = data[2];
            Feedback.feedbackVars.gimbal_vars.orientation_lock = orientation_lock == 1;
            self.checkFeedbacks('feedback_gimbal_orientation_lock');
			self.checkFeedbacks('feedback_gimbal_orientation_unlock');

            let pan = Int16(data[3] + (data[4] << 8)) / 10.0;
            let tilt = Int16(data[5] + (data[6] << 8)) / 10.0;
            let roll = Int16(data[7] + (data[8] << 8)) / 10.0;

            let pan_rel = Int16(data[26] + (data[27] << 8)) / 10.0;
            let tilt_rel = Int16(data[28] + (data[29] << 8)) / 10.0;
            let roll_rel = Int16(data[30] + (data[31] << 8)) / 10.0;

            self.setVariableValues({ 'camera_pan': pan});
            self.setVariableValues({ 'camera_tilt': tilt});
            self.setVariableValues({ 'camera_roll': roll});

            self.setVariableValues({ 'camera_pan_rel': pan_rel});
            self.setVariableValues({ 'camera_tilt_rel': tilt_rel});
            self.setVariableValues({ 'camera_roll_rel': roll_rel});

            let drone_yaw = Int16(data[37] + (data[38] << 8)) / 10.0;
            let drone_pitch = Int16(data[39] + (data[40] << 8)) / 10.0;
            let drone_roll = Int16(data[41] + (data[42] << 8)) / 10.0;

            let drone_hspeed = Int16(data[51] + (data[52] << 8)) / 10.0;
            let drone_vspeed = Int16(data[53] + (data[54] << 8)) / 10.0;

            self.setVariableValues({ 'drone_yaw': drone_yaw});
            self.setVariableValues({ 'drone_pitch': drone_pitch});
            self.setVariableValues({ 'drone_roll': drone_roll});
            self.setVariableValues({ 'drone_hspeed': drone_hspeed + ' m/s'});
            self.setVariableValues({ 'drone_vspeed': drone_vspeed + ' m/s'});

            let rec_state = data[9];
            switch ((rec_state >> 6) & 0x03)
            {
                case 1:
                    self.setVariableValues({ 'rec_label': 'starting'});
                    Feedback.feedbackVars.camera_vars.record_active = false;
                break;
                case 2:
                    self.setVariableValues({ 'rec_label': Feedback.feedbackVars.camera_vars.rec_time});
                    Feedback.feedbackVars.camera_vars.record_active = true;
                    break;
                case 3:
                    self.setVariableValues({ 'rec_label': 'stopping'});
                    Feedback.feedbackVars.camera_vars.record_active = false;
                break;

                default:
                    self.setVariableValues({ 'rec_label': ''});
                    Feedback.feedbackVars.camera_vars.record_active = false;
            }

            self.checkFeedbacks('camera_rec_active');
        }
        break;


        case APP_TYPE.APP_CS_DJI_MINI2:
        case APP_TYPE.APP_CS_DJI_MINI2_PRO: {
			let orientation_lock = data[2];
            Feedback.feedbackVars.gimbal_vars.orientation_lock = orientation_lock == 1;
            self.checkFeedbacks('feedback_gimbal_orientation_lock');
			self.checkFeedbacks('feedback_gimbal_orientation_unlock');

            let pan = Int16(data[3] + (data[4] << 8)) / 10.0;
            let tilt = Int16(data[5] + (data[6] << 8)) / 10.0;
            let roll = Int16(data[7] + (data[8] << 8)) / 10.0;

            let pan_rel = Int16(data[26] + (data[27] << 8)) / 10.0;
            let tilt_rel = Int16(data[28] + (data[29] << 8)) / 10.0;
            let roll_rel = Int16(data[30] + (data[31] << 8)) / 10.0;

            self.setVariableValues({ 'camera_pan': pan});
            self.setVariableValues({ 'camera_tilt': tilt});
            self.setVariableValues({ 'camera_roll': roll});

            self.setVariableValues({ 'camera_pan_rel': pan_rel});
            self.setVariableValues({ 'camera_tilt_rel': tilt_rel});
            self.setVariableValues({ 'camera_roll_rel': roll_rel});

            let drone_yaw = Int16(data[37] + (data[38] << 8)) / 10.0;
            let drone_pitch = Int16(data[39] + (data[40] << 8)) / 10.0;
            let drone_roll = Int16(data[41] + (data[42] << 8)) / 10.0;

            let drone_hspeed = Int16(data[51] + (data[52] << 8)) / 10.0;
            let drone_vspeed = Int16(data[53] + (data[54] << 8)) / 10.0;

            self.setVariableValues({ 'drone_yaw': drone_yaw});
            self.setVariableValues({ 'drone_pitch': drone_pitch});
            self.setVariableValues({ 'drone_roll': drone_roll});
            self.setVariableValues({ 'drone_hspeed': drone_hspeed + ' m/s'});
            self.setVariableValues({ 'drone_vspeed': drone_vspeed + ' m/s'});

            let rec_state = data[9];
            switch ((rec_state >> 6) & 0x03)
            {
                case 1:
                    self.setVariableValues({ 'rec_label': 'starting'});
                    Feedback.feedbackVars.camera_vars.record_active = false;
                break;
                case 2:
                    self.setVariableValues({ 'rec_label': Feedback.feedbackVars.camera_vars.rec_time});
                    Feedback.feedbackVars.camera_vars.record_active = true;
                    break;
                case 3:
                    self.setVariableValues({ 'rec_label': 'stopping'});
                    Feedback.feedbackVars.camera_vars.record_active = false;
                break;

                default:
                    self.setVariableValues({ 'rec_label': ''});
                    Feedback.feedbackVars.camera_vars.record_active = false;
            }

            self.checkFeedbacks('camera_rec_active');

            let focus_type = data[13];
            let focus_type_str = "";
            switch (focus_type) {
                case 4: focus_type_str = "mf"; break;
                case 5: focus_type_str = "afs"; break;
                case 6: focus_type_str = "afc"; break;
            }
            self.setVariableValues({ 'camera_focus_type': focus_type_str});
            Feedback.feedbackVars.camera_vars.camera_focus_type = focus_type_str;
            self.checkFeedbacks('focus_type_mf');
            self.checkFeedbacks('focus_type_afc');
            self.checkFeedbacks('focus_type_afs');
        }
        break;

        case APP_TYPE.APP_CS_DJI_SDR:

            let orientation_lock = data[2];
            Feedback.feedbackVars.gimbal_vars.orientation_lock = orientation_lock == 1;
            self.checkFeedbacks('feedback_gimbal_orientation_lock');
			self.checkFeedbacks('feedback_gimbal_orientation_unlock');

            let pan = Int16(data[3] + (data[4] << 8)) / 10.0;
            let tilt = Int16(data[5] + (data[6] << 8)) / 10.0;
            let roll = Int16(data[7] + (data[8] << 8)) / 10.0;

            let pan_rel = Int16(data[26] + (data[27] << 8)) / 10.0;
            let tilt_rel = Int16(data[28] + (data[29] << 8)) / 10.0;
            let roll_rel = Int16(data[30] + (data[31] << 8)) / 10.0;

            self.setVariableValues({ 'camera_pan': pan});
            self.setVariableValues({ 'camera_tilt': tilt});
            self.setVariableValues({ 'camera_roll': roll});

            self.setVariableValues({ 'camera_pan_rel': pan_rel});
            self.setVariableValues({ 'camera_tilt_rel': tilt_rel});
            self.setVariableValues({ 'camera_roll_rel': roll_rel});


            let motor_focus_available = data[12] == 1;
            let motor_focus_endpoints_done = data[13] == 1;
            let motor_focus_percentage = UInt16(data[14] + (data[15] << 8)) / 100.0;
            let motor_focus_status = '';
            if (motor_focus_available) {
                if (motor_focus_endpoints_done) {
                    motor_focus_status += motor_focus_percentage.toFixed(2) + '%';
                    Feedback.feedbackVars.gimbal_vars.motor_focus_ready = true;
                } else {
                    motor_focus_status += 'No Endpoints';
                    Feedback.feedbackVars.gimbal_vars.motor_focus_ready = false;
                }
            } else {
              motor_focus_status += 'Not Found';
              Feedback.feedbackVars.gimbal_vars.motor_focus_ready = false;
            }
            self.checkFeedbacks('feedback_motor_focus_ready');
            self.setVariableValues({ 'motor_focus_status': motor_focus_status});
            self.setVariableValues({ 'motor_focus_percentage': motor_focus_percentage.toFixed(2) + '%'});


            let motor_iris_available = data[16] == 1;
            let motor_iris_endpoints_done = data[17] == 1;
            let motor_iris_percentage = UInt16(data[18] + (data[19] << 8)) / 100.0;
            let motor_iris_status = '';
            if (motor_iris_available) {
                if (motor_iris_endpoints_done) {
                    motor_iris_status += motor_iris_percentage.toFixed(2) + '%';
                    Feedback.feedbackVars.gimbal_vars.motor_iris_ready = true;
                } else {
                    motor_iris_status += 'No Endpoints';
                    Feedback.feedbackVars.gimbal_vars.motor_iris_ready = false;
                }
            } else {
              motor_iris_status += 'Not Found';
              Feedback.feedbackVars.gimbal_vars.motor_iris_ready = false;
            }
            self.checkFeedbacks('feedback_motor_iris_ready');
            self.setVariableValues({ 'motor_iris_status': motor_iris_status});
            self.setVariableValues({ 'motor_iris_percentage': motor_iris_percentage.toFixed(2) + '%'});


            let motor_zoom_available = data[20] == 1;
            let motor_zoom_endpoints_done = data[21] == 1;
            let motor_zoom_percentage = UInt16(data[22] + (data[23] << 8)) / 100.0;
            let motor_zoom_status = '';
            if (motor_zoom_available) {
                if (motor_zoom_endpoints_done) {
                    motor_zoom_status += motor_zoom_percentage.toFixed(2) + '%';
                    Feedback.feedbackVars.gimbal_vars.motor_zoom_ready = true;
                } else {
                    motor_zoom_status += 'No Endpoints';
                    Feedback.feedbackVars.gimbal_vars.motor_zoom_ready = false;
                }
            } else {
              motor_zoom_status += 'Not Found';
              Feedback.feedbackVars.gimbal_vars.motor_zoom_ready = false;
            }
            self.checkFeedbacks('feedback_motor_zoom_ready');
            self.setVariableValues({ 'motor_zoom_status': motor_zoom_status});
            self.setVariableValues({ 'motor_zoom_percentage': motor_zoom_percentage.toFixed(2) + '%'});


            let rec_state = data[9];
            switch (rec_state)
            {
                case 1:
                    self.setVariableValues({ 'rec_label': Feedback.feedbackVars.camera_vars.rec_time});
                    Feedback.feedbackVars.camera_vars.record_active = true;
                    break;
                default:
                    self.setVariableValues({ 'rec_label': ''});
                    Feedback.feedbackVars.camera_vars.record_active = false;
            }

            self.checkFeedbacks('camera_rec_active');
        break;
    }
}

/*
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
*/
