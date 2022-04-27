exports.getPresets  = function() {

    var presets = [];

	/// Camera controls

	presets.push({
		category: 'Common camera control',
		label: 'Camera mode: photo',
		bank: {
			style: 'text',
			text: 'Photo',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_mode',
				options: {
					value: 'photo',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Camera mode: video',
		bank: {
			style: 'text',
			text: 'Video',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_mode',
				options: {
					value: 'video',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Make a shot',
		bank: {
			style: 'text',
			text: 'Shot',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_shot',
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Rec start/stop',
		bank: {
			style: 'text',
			text: 'Rec\\n$(cosmostreamer:camera_rec_time)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_camera_rec',
				options: {
					value: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_camera_rec',
				options: {
					value: 0,
				}
			}
		],
	});


	presets.push({
		category: 'Common camera control',
		label: 'Digital zoom in',
		bank: {
			style: 'text',
			text: 'Dig Zoom in \\n $(cosmostreamer:digital_zoom)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_dzoom_move',
				options: {
					value: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_camera_dzoom_move',
				options: {
					value: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Digital zoom out',
		bank: {
			style: 'text',
			text: 'Dig Zoom out \\n $(cosmostreamer:digital_zoom)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_dzoom_move',
				options: {
					value: -1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_camera_dzoom_move',
				options: {
					value: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set digital zoom x1',
		bank: {
			style: 'text',
			text: 'Dig Zoom x1',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_dzoom_set',
				options: {
					value: 100,
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set auto focus continuous',
		bank: {
			style: 'text',
			text: 'AFC',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_focus',
				options: {
					value: 'afc',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set auto focus single',
		bank: {
			style: 'text',
			text: 'AFS',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_focus',
				options: {
					value: 'afs',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set next image mode',
		bank: {
			style: 'text',
			text: 'Next mode \\n ($(cosmostreamer:camera_image_mode))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_image_mode',
				options: {
					value: 'next',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set prev image mode',
		bank: {
			style: 'text',
			text: 'Prev mode \\n ($(cosmostreamer:camera_image_mode))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_image_mode',
				options: {
					value: 'prev',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set Auto image mode',
		bank: {
			style: 'text',
			text: 'Auto image mode',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_image_mode',
				options: {
					value: 'auto',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set Manual image mode',
		bank: {
			style: 'text',
			text: 'Manual image mode',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_image_mode',
				options: {
					value: 'manual',
				}
			}
		],
	});


	presets.push({
		category: 'Common camera control',
		label: 'Set next shutter',
		bank: {
			style: 'text',
			text: 'Next shutter \\n ($(cosmostreamer:camera_shutter))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_shutter',
				options: {
					value: 'next',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set prev shutter',
		bank: {
			style: 'text',
			text: 'Prev shutter \\n ($(cosmostreamer:camera_shutter))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_shutter',
				options: {
					value: 'prev',
				}
			}
		],
	});


	presets.push({
		category: 'Common camera control',
		label: 'Set next ISO',
		bank: {
			style: 'text',
			text: 'Next ISO \\n ($(cosmostreamer:camera_iso))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_iso',
				options: {
					value: 'next',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set prev ISO',
		bank: {
			style: 'text',
			text: 'Prev ISO \\n ($(cosmostreamer:camera_iso))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_iso',
				options: {
					value: 'prev',
				}
			}
		],
	});


	presets.push({
		category: 'Common camera control',
		label: 'Set next EV',
		bank: {
			style: 'text',
			text: 'Next EV \\n ($(cosmostreamer:camera_ev))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_ev',
				options: {
					value: 'next',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set prev EV',
		bank: {
			style: 'text',
			text: 'Prev EV \\n ($(cosmostreamer:camera_ev))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_ev',
				options: {
					value: 'prev',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set next White balance',
		bank: {
			style: 'text',
			text: 'Next WB ($(cosmostreamer:camera_wb))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_wb',
				options: {
					value: 'next',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set prev White balance',
		bank: {
			style: 'text',
			text: 'Prev WB ($(cosmostreamer:camera_wb))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_wb',
				options: {
					value: 'prev',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set next color mode',
		bank: {
			style: 'text',
			text: 'Next color ($(cosmostreamer:camera_color))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_color',
				options: {
					value: 'next',
				}
			}
		],
	});

	presets.push({
		category: 'Common camera control',
		label: 'Set prev color mode',
		bank: {
			style: 'text',
			text: 'Prev color ($(cosmostreamer:camera_color))',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
		},
		actions: [
			{
				action: 'set_camera_color',
				options: {
					value: 'prev',
				}
			}
		],
	});


	/// Gimbal control

	presets.push({
		category: 'Common gimbal control',
		label: 'Move center',
		bank: {
			style: 'text',
			text: 'Move center',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x37, 0x18, 0xFF),
		},
		actions: [
			{
				action: 'set_gimbal_position',
				options: {
					value: 'normal',
				}
			}
		],
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Move Selfie',
		bank: {
			style: 'text',
			text: 'Move Selfie',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x37, 0x18, 0xFF),
		},
		actions: [
			{
				action: 'set_gimbal_position',
				options: {
					value: 'selfie',
				}
			}
		],
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Position lock',
		bank: {
			style: 'text',
			text: 'Position lock',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x31, 0x31, 0xA1),
			latch: true,
		},
		actions: [
			{
				action: 'set_gimbal_orientation_lock',
				options: {
					value: 'lock',
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_orientation_lock',
				options: {
					value: 'unlock',
				}
			}
		],
	});


	presets.push({
		category: 'Common gimbal control',
		label: 'Pan Left',
		bank: {
			style: 'text',
			text: 'Pan Left \\n $(cosmostreamer:gimbal_pan)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x19, 0x42, 0x4C),
		},
		actions: [
			{
				action: 'set_gimbal_move',
				options: {
					value: -0.4,
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_stop',
			}
		]
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Pan Right',
		bank: {
			style: 'text',
			text: 'Pan Right \\n $(cosmostreamer:gimbal_pan)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x19, 0x42, 0x4C),
		},
		actions: [
			{
				action: 'set_gimbal_move',
				options: {
					value: 0.4,
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_stop',
			}
		]
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Tilt Up',
		bank: {
			style: 'text',
			text: 'Tilt Up \\n $(cosmostreamer:gimbal_tilt)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x19, 0x42, 0x4C),
		},
		actions: [
			{
				action: 'set_gimbal_move',
				options: {
					value2: 0.4,
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_stop',
			}
		]
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Tilt Down',
		bank: {
			style: 'text',
			text: 'Tilt Down \\n $(cosmostreamer:gimbal_tilt)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x19, 0x42, 0x4C),
		},
		actions: [
			{
				action: 'set_gimbal_move',
				options: {
					value2: -0.4,
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_stop',
			}
		]
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Roll Left',
		bank: {
			style: 'text',
			text: 'Roll Left \\n $(cosmostreamer:gimbal_roll)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x19, 0x42, 0x4C),
		},
		actions: [
			{
				action: 'set_gimbal_move',
				options: {
					value3: 0.4,
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_stop',
			}
		]
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Roll Right',
		bank: {
			style: 'text',
			text: 'Roll Right \\n $(cosmostreamer:gimbal_roll)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x19, 0x42, 0x4C),
		},
		actions: [
			{
				action: 'set_gimbal_move',
				options: {
					value3: -0.4,
				}
			}
		],
		release_actions: [
			{
				action: 'set_gimbal_stop',
			}
		]
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Stop',
		bank: {
			style: 'text',
			text: 'Stop',
			size: '18',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xFF, 0x00, 0x00),
		},
		actions: [
			{
				action: 'set_gimbal_stop',
			}
		],
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Gimbal mode 1',
		bank: {
			style: 'text',
			text: 'Gimbal mode 1',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x4B, 0x5D, 0x4B),
		},
		actions: [
			{
				action: 'set_gimbal_mode',
				options: {
					value: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Gimbal mode 2',
		bank: {
			style: 'text',
			text: 'Gimbal mode 2',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x4B, 0x5D, 0x4B),
		},
		actions: [
			{
				action: 'set_gimbal_mode',
				options: {
					value: 1,
				}
			}
		],
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Gimbal mode 3',
		bank: {
			style: 'text',
			text: 'Gimbal mode 3',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x4B, 0x5D, 0x4B),
		},
		actions: [
			{
				action: 'set_gimbal_mode',
				options: {
					value: 2,
				}
			}
		],
	});

	presets.push({
		category: 'Common gimbal control',
		label: 'Current gimbal angles',
		bank: {
			style: 'text',
			text: '$(cosmostreamer:gimbal_pan) \\n $(cosmostreamer:gimbal_tilt) \\n $(cosmostreamer:gimbal_roll)',
			alignment: 'center:center',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});



	/// Onboard recording and streaming

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Onboard Rec',
		bank: {
			style: 'text',
			text: 'Onboard Rec \\n $(cosmostreamer:onboard_rec_time)',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_onboard_rec',
				options: {
					value: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_onboard_rec',
				options: {
					value: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream UDP',
		bank: {
			style: 'text',
			text: 'Stream UDP',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'udp',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'udp',
					value2: 0,
				}
			}
		],
		/*feedbacks: [
			{
				type: 'onboard_rec',
				options: {
					true_fg: this.rgb(255,255,255),
					true_bg: this.rgb(0xFF,0x00, 0x00),
					false_fg: this.rgb(255,255,255),
					false_bg: this.rgb(0x0,0x00, 0x00),
				},
			},
		],*/
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream RTMP',
		bank: {
			style: 'text',
			text: 'Stream RTMP \\n $(cosmostreamer:rtmp_time)',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'rtmp',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'rtmp',
					value2: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream SRT',
		bank: {
			style: 'text',
			text: 'Stream SRT \\n $(cosmostreamer:srt_time)',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'srt',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'srt',
					value2: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream RTSP',
		bank: {
			style: 'text',
			text: 'Stream RTSP \\n $(cosmostreamer:rtsp_time)',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'rtsp',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'rtsp',
					value2: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream RTP',
		bank: {
			style: 'text',
			text: 'Stream RTP',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'rtp',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'rtp',
					value2: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream NDI',
		bank: {
			style: 'text',
			text: 'Stream NDI',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'ndi',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'ndi',
					value2: 0,
				}
			}
		],
	});

	presets.push({
		category: 'Onboard recording and streaming',
		label: 'Stream V4L2',
		bank: {
			style: 'text',
			text: 'Stream V4L2',
			size: '14',
			alignment: 'center:top',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x0, 0x0, 0x0),
			latch: true,
		},
		actions: [
			{
				action: 'set_stream',
				options: {
					value: 'v4l2',
					value2: 1,
				}
			}
		],
		release_actions: [
			{
				action: 'set_stream',
				options: {
					value: 'v4l2',
					value2: 0,
				}
			}
		],
	});

	/// Auto movements presets

	presets.push({
		category: 'Auto movements',
		label: 'Auto Movement Preset 1',
		bank: {
			style: 'text',
			text: 'AM Preset 1',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xB7, 0x00, 0xFF),
		},
		actions: [
			{
				action: 'store_am_preset',
				delay: 1000,
				options: {
					value: 1,
				}
			},
		],
		release_actions: [
			{
				action: 'set_am_preset',
				options: {
					value: 1,
				}
			},
		],
	});

	presets.push({
		category: 'Auto movements',
		label: 'Auto Movement Preset 2',
		bank: {
			style: 'text',
			text: 'AM Preset 2',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xB7, 0x00, 0xFF),
		},
		actions: [
			{
				action: 'store_am_preset',
				delay: 1000,
				options: {
					value: 2,
				}
			},
		],
		release_actions: [
			{
				action: 'set_am_preset',
				options: {
					value: 2,
				}
			},
		],
	});

	presets.push({
		category: 'Auto movements',
		label: 'Auto Movement Preset 3',
		bank: {
			style: 'text',
			text: 'AM Preset 3',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xB7, 0x00, 0xFF),
		},
		actions: [
			{
				action: 'store_am_preset',
				delay: 1000,
				options: {
					value: 3,
				}
			},
		],
		release_actions: [
			{
				action: 'set_am_preset',
				options: {
					value: 3,
				}
			},
		],
	});


	presets.push({
		category: 'Auto movements',
		label: 'Auto Move on/off',
		bank: {
			style: 'text',
			text: 'Auto Move on/off',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xFF, 0x80, 0x00),
			latch: true,
		},
		actions: [
			{
				action: 'set_am_state',
				options: {
					value: 1,
				}
			},
		],
		release_actions: [
			{
				action: 'set_am_state',
				options: {
					value: 0,
				}
			},
		],
	});

	presets.push({
		category: 'Auto movements',
		label: 'Auto Move Next',
		bank: {
			style: 'text',
			text: 'Auto Move Next $(cosmostreamer:am_position)/$(cosmostreamer:am_total)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x21, 0xA6, 0x7A),
		},
		actions: [
			{
				action: 'set_am_next',
				options: {
				}
			},
		],
	});

	presets.push({
		category: 'Auto movements',
		label: 'Auto Move Prev',
		bank: {
			style: 'text',
			text: 'Auto Move Prev $(cosmostreamer:am_position)/$(cosmostreamer:am_total)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x21, 0xA6, 0x7A),
		},
		actions: [
			{
				action: 'set_am_prev',
				options: {
				}
			},
		],
	});

	presets.push({
		category: 'Auto movements',
		label: 'Current auto movement position',
		bank: {
			style: 'text',
			text: '$(cosmostreamer:am_position)/$(cosmostreamer:am_total)',
			size: '18',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});

	/// Wiral Lite presets

	presets.push({
		category: 'Wiral Lite control',
		label: 'Move Fwd',
		bank: {
			style: 'text',
			text: 'Move \\n Fwd',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x28, 0xBE, 0xFE),
		},
		actions: [
			{
				action: 'wiral_move_to',
				options: {
					value: 65535,
					value2: -1,
				}
			}
		]
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Move Back',
		bank: {
			style: 'text',
			text: 'Move Back',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x40, 0x47, 0xA6),
		},
		actions: [
			{
				action: 'wiral_move_to',
				options: {
					value: 0,
					value2: -1,
				}
			}
		]
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Stop',
		bank: {
			style: 'text',
			text: 'Stop',
			size: '24',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xFF, 0x38, 0x00),
		},
		actions: [
			{
				action: 'wiral_stop',
				options: {
				}
			}
		]
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Speed Up',
		bank: {
			style: 'text',
			text: 'Speed Up $(cosmostreamer:wiral_last_set_speed)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x77, 0x06, 0xBC),
		},
		actions: [
			{
				action: 'wiral_change_speed',
				options: {
					value: 5, 
				}
			}
		]
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Speed Down',
		bank: {
			style: 'text',
			text: 'Speed Down $(cosmostreamer:wiral_last_set_speed)',
			size: '14',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0x77, 0x06, 0xBC),
		},
		actions: [
			{
				action: 'wiral_change_speed',
				options: {
					value: -5, 
				}
			}
		]
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Tic-Tac On/Off',
		bank: {
			style: 'text',
			text: 'Tic-Tac On/Off',
			size: '18',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0xF2, 0xCC, 0x00),
			latch: true,
		},
		actions: [
			{
				action: 'wiral_tictac',
				options: {
					value: 1, 
				}
			}
		],
		release_actions: [
			{
				action: 'wiral_tictac',
				options: {
					value: 0, 
				}
			}
		]
	});


	presets.push({
		category: 'Wiral Lite control',
		label: 'Wiral Lite Distance',
		bank: {
			style: 'text',
			size: '14',
			text: 'Distance \\n $(cosmostreamer:wiral_distance) \\n $(cosmostreamer:wiral_max_distance)',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Wiral Lite Speed',
		bank: {
			style: 'text',
			size: '14',
			text: 'Speed \\n $(cosmostreamer:wiral_speed)',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Wiral Lite Tic-Tac Counter',
		bank: {
			style: 'text',
			text: '$(cosmostreamer:wiral_tictac_counter) tics \\n $(cosmostreamer:wiral_tictac_tick_time) \\n $(cosmostreamer:wiral_tictac_prev_tick_time)',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Wiral Lite Battery Level',
		bank: {
			style: 'text',
			text: 'Wiral battery $(cosmostreamer:wiral_battery_level)%',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Wiral Lite Status',
		bank: {
			style: 'text',
			size: '14',
			text: 'Wiral $(cosmostreamer:wiral_status)',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
		},
	});

	presets.push({
		category: 'Wiral Lite control',
		label: 'Wiral Lite Status',
		bank: {
			style: 'text',
			text: '$(cosmostreamer:wiral_status)',
			size: '7',
			alignment: 'center:bottom',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
			"png64": "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAIAAACcZYjaAAAACXBIWXMAAAsTAAALEwEAmpwYAAANC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMi0wN1QxNjo1NzozMCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMjRUMTM6MTM6MTQrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMjRUMTM6MTM6MTQrMDM6MDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MjhlOWUzMC1iNDdiLWQ5NDEtODVkOS1jODQzOTNiZDAyMDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWU0MjYzMzktZWIzYS0wMjQzLThkM2QtMWEzYjdiYzE3ZDliIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NDk4N0QyQkZCRTJBRTkxMTkyMDk4RDFCQzUyMTYwMzciIGlsbHVzdHJhdG9yOlN0YXJ0dXBQcm9maWxlPSJQcmludCIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IkY4QUNDNEExMkQxRkZFQkM0MjA4MTkzMzA4RUEyM0ZFIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6SW1hZ2VXaWR0aD0iNTczIiB0aWZmOkltYWdlTGVuZ3RoPSI1NzIiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjIxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNzIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI1OCI+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+UHJpbnQ8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNGVkYjA0MC1iY2IyLWM3NGYtOGQzOC0wNDg2Yzk3NDBhNTAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDMzNmYzOS01ZTY2LWYzNDEtOTA1YS1mODUxMzU3NjkwZTkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo0OTg3RDJCRkJFMkFFOTExOTIwOThEMUJDNTIxNjAzNyIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDIzMDJjMS1mYTNhLWNiNDAtYTAyNS05NjA2YjNmNjZjM2QiIHN0RXZ0OndoZW49IjIwMjEtMTItMTFUMTU6MDE6MjcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTRlZGIwNDAtYmNiMi1jNzRmLThkMzgtMDQ4NmM5NzQwYTUwIiBzdEV2dDp3aGVuPSIyMDIyLTA0LTI0VDEyOjQ2OjAyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUwMzk1NjQzLTc3NmItOTE0Zi04NDc4LTYwN2Yx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",
		},
	});


	/// Cosmostreamer status

	presets.push({
		category: 'Status',
		label: 'Cosmostreamer Status',
		bank: {
			style: 'text',
			text: '$(cosmostreamer:cs_state)',
			size: '7',
			alignment: 'center:bottom',
			color: this.rgb(255, 255, 255),
			bgcolor: this.rgb(0, 0, 0),
			"png64": "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAIAAACcZYjaAAAACXBIWXMAAAsTAAALEwEAmpwYAAANC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMi0wN1QxNjo1NzozMCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMjRUMTI6NTI6NTUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMjRUMTI6NTI6NTUrMDM6MDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNDQyNDA0YS0xZDk0LTc4NDktYTI1Ny0yNDlhY2Y5YTMzZDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmU2MGYxMzYtZjAyYy0zZjQwLTg1YzQtOTJjMTNkNzM4YTM2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NDk4N0QyQkZCRTJBRTkxMTkyMDk4RDFCQzUyMTYwMzciIGlsbHVzdHJhdG9yOlN0YXJ0dXBQcm9maWxlPSJQcmludCIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IkY4QUNDNEExMkQxRkZFQkM0MjA4MTkzMzA4RUEyM0ZFIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6SW1hZ2VXaWR0aD0iNTczIiB0aWZmOkltYWdlTGVuZ3RoPSI1NzIiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjIxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNzIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI1OCI+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+UHJpbnQ8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNGVkYjA0MC1iY2IyLWM3NGYtOGQzOC0wNDg2Yzk3NDBhNTAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDMzNmYzOS01ZTY2LWYzNDEtOTA1YS1mODUxMzU3NjkwZTkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo0OTg3RDJCRkJFMkFFOTExOTIwOThEMUJDNTIxNjAzNyIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDIzMDJjMS1mYTNhLWNiNDAtYTAyNS05NjA2YjNmNjZjM2QiIHN0RXZ0OndoZW49IjIwMjEtMTItMTFUMTU6MDE6MjcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTRlZGIwNDAtYmNiMi1jNzRmLThkMzgtMDQ4NmM5NzQwYTUwIiBzdEV2dDp3aGVuPSIyMDIyLTA0LTI0VDEyOjQ2OjAyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUwMzk1NjQzLTc3NmItOTE0Zi04NDc4LTYwN2Yx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",
		},
	});

	return presets;
}