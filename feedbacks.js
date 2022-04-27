exports.getFeedbacks  = function() {

	let feedbacks = {}

	feedbacks['am_status'] = {
		label: 'Change Button Color If Auto Movements is Active',
		description: 'If active, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(255,0,0)
			},
		]
	};


	feedbacks['orientation_lock'] = {
		label: 'Change Button Color If Position Lock is Active',
		description: 'If active, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(255,0,0)
			},
		]
	};


	let gimbal_mode_feedback_common = {
		label: 'Change Button Color If Gimbal Mode is XXX',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_bg',
				default: this.rgb(0,0,255)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_bg',
				default: this.rgb(0,0,0)
			},
		]
	};

	feedbacks['gimbal_mode_1'] = {...gimbal_mode_feedback_common};
	feedbacks['gimbal_mode_1'].label = 'Change Button Color If Gimbal Mode is 1';
	feedbacks['gimbal_mode_2'] = {...gimbal_mode_feedback_common};
	feedbacks['gimbal_mode_2'].label = 'Change Button Color If Gimbal Mode is 2';
	feedbacks['gimbal_mode_3'] = {...gimbal_mode_feedback_common};
	feedbacks['gimbal_mode_3'].label = 'Change Button Color If Gimbal Mode is 3';



	feedbacks['wiral_tictac_active'] = {
		label: 'Change Button Color If Wiral Lite Tic-Tac mode is Active',
		description: 'If active, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(255,0,0)
			},
		]
	};

	feedbacks['wiral_ready'] = {
		label: 'Change Button Color If Wiral Lite is Ready',
		description: 'If active, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'Active color',
				id: 'ready_color',
				default: this.rgb(0,255,0)
			},
			{
				type: 'colorpicker',
				label: 'Inactive color',
				id: 'not_ready_color',
				default: this.rgb(255,0,0)
			},
		]
	};

	feedbacks['wiral_moving_fwd'] = {
		label: 'Change Button Text Color If Wiral Lite Moving Forward',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_color',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_color',
				default: this.rgb(0,0,0)
			},
		]
	};

	feedbacks['wiral_moving_back'] = {
		label: 'Change Button Text Color If Wiral Lite Moving Backward',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_color',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_color',
				default: this.rgb(0,0,0)
			},
		]
	};

	feedbacks['wiral_battery_low'] = {
		label: 'Change Button Text Color If Wiral Lite Battery Low',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_color',
				default: this.rgb(255,0,0)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_color',
				default: this.rgb(0xff,0xff,0xff)
			},
		]
	};



	let streams_feedback_common = {
		label: 'Change Button If XXX stream is Active',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True - this text color',
				id: 'true_fg',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'If True - this background color',
				id: 'true_bg',
				default: this.rgb(0xFF,0x00, 0x00)
			},
			{
				type: 'colorpicker',
				label: 'If False - this text color',
				id: 'false_fg',
				default: this.rgb(255,255,255)
			},
			{
				type: 'colorpicker',
				label: 'If False - this background color',
				id: 'false_bg',
				default: this.rgb(0x52,0x45,0x45)
			},
		]
	};

	feedbacks['onboard_rec'] = {...streams_feedback_common};
	feedbacks['onboard_rec'].label = 'Change Button If Onboard Recording is Active';
	feedbacks['stream_state_udp'] = {...streams_feedback_common};
	feedbacks['stream_state_udp'].label = 'Change Button If UDP stream is Active';
	feedbacks['stream_state_rtmp'] = {...streams_feedback_common};
	feedbacks['stream_state_rtmp'].label = 'Change Button If RTMP stream is Active';
	feedbacks['stream_state_srt'] = {...streams_feedback_common};
	feedbacks['stream_state_srt'].label = 'Change Button If SRT stream is Active';
	feedbacks['stream_state_rtp'] = {...streams_feedback_common};
	feedbacks['stream_state_rtp'].label = 'Change Button If RTP stream is Active';
	feedbacks['stream_state_rtsp'] = {...streams_feedback_common};
	feedbacks['stream_state_rtsp'].label = 'Change Button If RTSP stream is Active';
	feedbacks['stream_state_ndi'] = {...streams_feedback_common};
	feedbacks['stream_state_ndi'].label = 'Change Button If NDI stream is Active';
	feedbacks['stream_state_v4l2'] = {...streams_feedback_common};
	feedbacks['stream_state_v4l2'].label = 'Change Button If V4L2 stream is Active';



	let mode_feedback_common = {
		label: 'Change Button Color If Camera Mode is Photo',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_bg',
				default: this.rgb(0,0,255)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_bg',
				default: this.rgb(0,0,0)
			},
		]
	};

	feedbacks['camera_mode_photo'] = {...mode_feedback_common};
	feedbacks['camera_mode_photo'].label = 'Change Button Color If Camera Mode is Photo';
	feedbacks['camera_mode_video'] = {...mode_feedback_common};
	feedbacks['camera_mode_video'].label = 'Change Button Color If Camera Mode is Video';


	feedbacks['camera_rec_active'] = {
		label: 'Change Button Color If Camera Recording is Active',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_bg',
				default: this.rgb(255,0,0)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_bg',
				default: this.rgb(0,0,0)
			},
		]
	};


	let focus_feedback_common = {
		label: 'Change Button Color If Focus Mode is XXX',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_bg',
				default: this.rgb(0,0,255)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_bg',
				default: this.rgb(0,0,0)
			},
		]
	};

	feedbacks['camera_focus_afc'] = {...focus_feedback_common};
	feedbacks['camera_focus_afc'].label = 'Change Button Color If Camera Focus Mode is AFC';
	feedbacks['camera_focus_afs'] = {...focus_feedback_common};
	feedbacks['camera_focus_afs'].label = 'Change Button Color If Camera Focus Mode is AFS';



	let image_mode_feedback_common = {
		label: 'Change Button Color If Image Mode is XXX',
		description: 'If yes, set the button to this color',
		options: [
			{
				type: 'colorpicker',
				label: 'If True color',
				id: 'true_bg',
				default: this.rgb(0,0,255)
			},
			{
				type: 'colorpicker',
				label: 'If False color',
				id: 'false_bg',
				default: this.rgb(0,0,0)
			},
		]
	};

	feedbacks['camera_image_mode_auto'] = {...image_mode_feedback_common};
	feedbacks['camera_image_mode_auto'].label = 'Change Button Color If Camera Image Mode is Auto';
	feedbacks['camera_image_mode_manual'] = {...focus_feedback_common};
	feedbacks['camera_image_mode_manual'].label = 'Change Button Color If Camera Image Mode is Manual';
	feedbacks['camera_image_mode_shutter'] = {...focus_feedback_common};
	feedbacks['camera_image_mode_shutter'].label = 'Change Button Color If Camera Image Mode is Shutter';

	return feedbacks;
}