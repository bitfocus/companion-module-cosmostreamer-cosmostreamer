const { combineRgb } = require('@companion-module/base')

let feedbackList = {}

module.exports = async function (self) {

	const ColorWhite = combineRgb(255, 255, 255);
    const ColorRed = combineRgb(200, 0, 0);
    const ColorGreen = combineRgb(0, 127, 0);

	feedbackList = {

		/*ChannelState: {
			name: 'Example Feedback',
			type: 'boolean',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: ColorRed,
				color: ColorWhite,
			},
			options: [
				{
					id: 'num',
					type: 'number',
					label: 'Test',
					default: 5,
					min: 0,
					max: 10,
				},
			],
			callback: (feedback) => {
				console.log('Hello world!', feedback.options.num)
				if (feedback.options.num > 5) {
					return true
				} else {
					return false
				}
			},
		},*/


		/*CameraMode: {
			name: 'Camera mode feedback',
			type: 'boolean',
			label: 'Camera mode',
			defaultStyle: {
				bgcolor: ColorRed,
				color: ColorWhite,
			},
			callback: (feedback) => {
				//console.log('Hello world!', module.exports.feedbackVars.stream_state_udp);
				if (module.exports.feedbackVars.stream_state_udp) {
					return true
				} else {
					return false
				}
			},
		},*/

		drone_in_flight: {
			type: 'boolean', name: 'Drone flight state', label: 'Drone flight state',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.in_flight == 1 ? true : false;
			},
		},

		drone_in_landing: {
			type: 'boolean', name: 'Drone landing state', label: 'Drone landing state',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.in_landing == 1 ? true : false;
			},
		},

		drone_in_rth: {
			type: 'boolean', name: 'Drone RTH state', label: 'Drone RTH state',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.in_rth == 1 ? true : false;
			},
		},

		feedback_obstacle_camera_0: {
			type: 'boolean', name: 'Drone obstacle cam OFF', label: 'Drone obstacle cam OFF',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 0 ? true : false;
			},
		},
		feedback_obstacle_camera_1: {
			type: 'boolean', name: 'Drone obstacle cam forward', label: 'Drone obstacle cam forward',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 1 ? true : false;
			},
		},
		feedback_obstacle_camera_2: {
			type: 'boolean', name: 'Drone obstacle cam backward', label: 'Drone obstacle cam backward',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 2 ? true : false;
			},
		},
		feedback_obstacle_camera_3: {
			type: 'boolean', name: 'Drone obstacle cam left', label: 'Drone obstacle cam left',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 3 ? true : false;
			},
		},
		feedback_obstacle_camera_4: {
			type: 'boolean', name: 'Drone obstacle cam right', label: 'Drone obstacle cam right',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 4 ? true : false;
			},
		},
		feedback_obstacle_camera_5: {
			type: 'boolean', name: 'Drone obstacle cam bottom', label: 'Drone obstacle cam bottom',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 5 ? true : false;
			},
		},
		feedback_obstacle_camera_6: {
			type: 'boolean', name: 'Drone obstacle cam top', label: 'Drone obstacle cam top',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 6 ? true : false;
			},
		},
		feedback_obstacle_camera_255: {
			type: 'boolean', name: 'Drone obstacle cam Auto', label: 'Drone obstacle cam Auto',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.obstacle_cam_id == 255 ? true : false;
			},
		},


		drone_control_app_enabled: {
			type: 'boolean', name: 'Drone app control enabled', label: 'Drone app control enabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.app_control_enabled == 1 ? true : false;
			},
		},
		drone_control_app_disabled: {
			type: 'boolean', name: 'Drone app control disabled', label: 'Drone app control disabled',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.app_control_enabled == 0 ? true : false;
			},
		},


		drone_wp_active	: {
			type: 'boolean', name: 'Drone Mission Active', label: 'Drone Mission Active',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.wp_active == 1 ? true : false;
			},
		},
		drone_wp_inactive	: {
			type: 'boolean', name: 'Drone Mission Active', label: 'Drone Mission Active',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.drone_vars.wp_active == 0 ? true : false;
			},
		},

		drone_wp_paused	: {
			type: 'boolean', name: 'Drone Mission Paused', label: 'Drone Mission Paused',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				if (!module.exports.feedbackVars.drone_vars.wp_active) {
					return false;
				}
				return module.exports.feedbackVars.drone_vars.wp_paused == 1 ? true : false;
			},
		},
		drone_wp_not_paused	: {
			type: 'boolean', name: 'Drone Mission Not Paused', label: 'Drone Mission Not Paused',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				if (!module.exports.feedbackVars.drone_vars.wp_active) {
					return false;
				}
				return module.exports.feedbackVars.drone_vars.wp_paused == 0 ? true : false;
			},
		},


		camera_mode_photo: {
			type: 'boolean', name: 'Camera mode PHOTO', label: 'Camera mode PHOTO',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.camera_mode == "photo";
			},
		},

		camera_mode_video: {
			type: 'boolean', name: 'Camera mode VIDEO', label: 'Camera mode VIDEO',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.camera_mode == "video";
			},
		},

		lense_mode_single: {
			type: 'boolean', name: 'Lense mode single', label: 'Lense mode single',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.lense_mode == "1";
			},
		},
		lense_mode_360: {
			type: 'boolean', name: 'Lense mode 360', label: 'Lense mode 360',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.lense_mode == "360";
			},
		},

		camera_angle360_104: {
			type: 'boolean', name: '360 Angle 104', label: '360 Angle 104',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.angle360 == 104;
			},
		},
		camera_angle360_134: {
			type: 'boolean', name: '360 Angle 134', label: '360 Angle 134',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.angle360 == 134;
			},
		},
		camera_angle360_272: {
			type: 'boolean', name: '360 Angle 272', label: '360 Angle 272',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.angle360 == 272;
			},
		},



		camera_rec_active: {
			type: 'boolean', name: 'Camera rec active', label: 'Camera rec active',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.record_active;
			},
		},


		image_mode_auto: {
			type: 'boolean', name: 'Image mode AUTO', label: 'Camera mode AUTO',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.image_mode == "auto";
			},
		},
		image_mode_manual: {
			type: 'boolean', name: 'Image mode MANUAL', label: 'Camera mode MANUAL',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.image_mode == "manual";
			},
		},
		image_mode_shutter: {
			type: 'boolean', name: 'Image mode SHUTTER', label: 'Camera mode SHUTTER',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.image_mode == "shutter";
			},
		},


		focus_type_mf: {
			type: 'boolean', name: 'Focus type MF', label: 'Focus type MF',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.camera_focus_type == "mf";
			},
		},
		focus_type_afs: {
			type: 'boolean', name: 'Focus type AFS', label: 'Focus type AFS',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.camera_focus_type == "afs";
			},
		},
		focus_type_afc: {
			type: 'boolean', name: 'Focus type AFC', label: 'Focus type AFC',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.camera_vars.camera_focus_type == "afc";
			},
		},




		onboard_rec: {
			type: 'boolean', name: 'Onboard REC', label: 'Onboard REC',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.onboard_rec_state ? true : false;
			},
		},

		video_paused: {
			type: 'boolean', name: 'Video Paused', label: 'Video Paused',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.video_pause_state ? true : false;
			},
		},

		stream_state_udp: {
			type: 'boolean', name: 'Streaming raw UDP', label: 'Streaming raw UDP',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_udp ? true : false;
			},
		},

		stream_state_srt: {
			type: 'boolean', name: 'Streaming SRT', label: 'Streaming SRT',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_srt ? true : false;
			},
		},

		stream_state_rtp: {
			type: 'boolean', name: 'Streaming RTP', label: 'Streaming RTP',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtp ? true : false;
			},
		},

		stream_state_rtsp: {
			type: 'boolean', name: 'Streaming RTSP', label: 'Streaming RTSP',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtsp ? true : false;
			},
		},

		stream_state_rtsp_client: {
			type: 'boolean', name: 'Streaming RTSP Client', label: 'Streaming RTSP Client',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtsp_client ? true : false;
			},
		},

		stream_state_ndi: {
			type: 'boolean', name: 'Streaming NDI', label: 'Streaming NDI',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_ndi ? true : false;
			},
		},

		stream_state_v4l2: {
			type: 'boolean', name: 'Streaming V4L2', label: 'Streaming V4L2',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_v4l2 ? true : false;
			},
		},

		stream_state_dvbt: {
			type: 'boolean', name: 'Streaming DVB-T', label: 'Streaming DVB-T',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_dvbt ? true : false;
			},
		},

		stream_state_ndihx: {
			type: 'boolean', name: 'Streaming NDI HX', label: 'Streaming NDI HX',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_ndihx ? true : false;
			},
		},

		stream_state_mpegts: {
			type: 'boolean', name: 'Streaming MPEG-TS', label: 'Streaming MPEG-TS',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_mpegts ? true : false;
			},
		},

		stream_state_hls: {
			type: 'boolean', name: 'Streaming HLS', label: 'Streaming HLS',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_hls ? true : false;
			},
		},


		stream_state_rtmp_custom1: {
			type: 'boolean', name: 'Streaming RTMP Custom1', label: 'Streaming RTMP Custom1',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtmp_custom1 ? true : false;
			},
		},
		stream_state_rtmp_custom2: {
			type: 'boolean', name: 'Streaming RTMP Custom2', label: 'Streaming RTMP Custom2',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtmp_custom2 ? true : false;
			},
		},
		stream_state_rtmp_youtube: {
			type: 'boolean', name: 'Streaming RTMP Youtube', label: 'Streaming RTMP Youtube',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtmp_youtube ? true : false;
			},
		},
		stream_state_rtmp_insta: {
			type: 'boolean', name: 'Streaming RTMP Instagram', label: 'Streaming RTMP Instagram',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtmp_insta ? true : false;
			},
		},
		stream_state_rtmp_facebook: {
			type: 'boolean', name: 'Streaming RTMP Facebook', label: 'Streaming RTMP Facebook',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtmp_facebook ? true : false;
			},
		},
		stream_state_rtmp_tiktok: {
			type: 'boolean', name: 'Streaming RTMP TikTok', label: 'Streaming RTMP TikTok',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.stream_state_rtmp_tiktok ? true : false;
			},
		},


		feedback_display_smooth_enabled: {
			type: 'boolean', name: 'Display Smooth Enabled', label: 'Display Smooth Enabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.display_smooth_enabled == 1 ? true : false;
			},
		},
		feedback_display_smooth_disabled: {
			type: 'boolean', name: 'Display Smooth Disabled', label: 'Display Smooth Disabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.display_smooth_enabled == 0 ? true : false;
			},
		},


		feedback_video_intro_enabled: {
			type: 'boolean', name: 'Video Intro Enabled', label: 'Video Intro Enabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.video_intro_enabled == 1 ? true : false;
			},
		},
		feedback_video_intro_disabled: {
			type: 'boolean', name: 'Video Intro Enabled', label: 'Video Intro Enabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.video_intro_enabled == 0 ? true : false;
			},
		},

		feedback_bgaudio_enabled: {
			type: 'boolean', name: 'Background Audio Enabled', label: 'Background Audio Enabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.bgaudio_enabled == 1 ? true : false;
			},
		},
		feedback_bgaudio_disabled: {
			type: 'boolean', name: 'Background Audio Disabled', label: 'Background Audio Disabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.bgaudio_enabled == 0 ? true : false;
			},
		},


		feedback_secondary_camera_enabled: {
			type: 'boolean', name: 'Secondary Camera Enabled', label: 'Secondary Camera Enabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.app2_enabled == 1 ? true : false;
			},
		},
		feedback_secondary_camera_disabled: {
			type: 'boolean', name: 'Secondary Camera Disabled', label: 'Secondary Camera Disabled',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.app_vars.app2_enabled == 0 ? true : false;
			},
		},



		feedback_motor_focus_ready: {
			type: 'boolean', name: 'Motor Focus Found', label: 'Motor Focus Found',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.gimbal_vars.motor_focus_ready == 1 ? true : false;
			},
		},
		feedback_motor_iris_ready: {
			type: 'boolean', name: 'Motor IRIS Found', label: 'Motor IRIS Found',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.gimbal_vars.motor_iris_ready == 1 ? true : false;
			},
		},
		feedback_motor_zoom_ready: {
			type: 'boolean', name: 'Motor Zoom Found', label: 'Motor Zoom Found',
			defaultStyle: { bgcolor: ColorGreen, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.gimbal_vars.motor_zoom_ready == 1 ? true : false;
			},
		},


		feedback_gimbal_orientation_lock: {
			type: 'boolean', name: 'Gimbal Orientation Lock state', label: 'Gimbal Orientation Lock state',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.gimbal_vars.orientation_lock == 1 ? true : false;
			},
		},
		feedback_gimbal_orientation_unlock: {
			type: 'boolean', name: 'Gimbal Orientation Unlock state', label: 'Gimbal Orientation Unlock state',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				return module.exports.feedbackVars.gimbal_vars.orientation_lock == 1 ? false : true;
			},
		},

	}


	/// Add link channels
	feedbackList['link_channel_auto'] = {
			type: 'boolean', name: 'Link Channel Auto', label: 'Link Channel Auto',
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				if (module.exports.feedbackVars.link_vars.auto_channel) return true;
				//return module.exports.feedbackVars.link_vars.auto_channel ? true : false;
			}
	}

	for (var i = 1; i <= 32; i++) {
		feedbackList['link_channel_' + i] = {
			type: 'boolean', name: 'Link Channel ' + i, label: 'Link Channel ' + i,
			defaultStyle: { bgcolor: ColorRed, color: ColorWhite },
			callback: (feedback) => {
				if (module.exports.feedbackVars.link_vars.auto_channel) return false;
				var id = feedback.feedbackId.replace('link_channel_', '');
				return module.exports.feedbackVars.link_vars.current_channel == id ? true : false;
			},
		}
	}



	self.setFeedbackDefinitions(feedbackList);
}


module.exports.feedbackVars = {
	app_vars: {},
	camera_vars: {},
	drone_vars: {},
	link_vars: {},
	gimbal_vars: {},
}


module.exports.clear = async function (self) {

	module.exports.feedbackVars.app_vars = {}
	module.exports.feedbackVars.camera_vars = {}
	module.exports.feedbackVars.drone_vars = {}
	module.exports.feedbackVars.link_vars = {}

	//self.log('info', 'Clear all feedback vars');

	for (var name in feedbackList) {
		self.checkFeedbacks(name);
	}
}
