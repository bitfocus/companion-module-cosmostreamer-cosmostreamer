exports.getActions  = function() {

	var actions = {

			send: {
				label: 'Send Command',
				options: [
					{
						type: 'textwithvariables',
						id: 'value',
						label: 'Command:',
						tooltip: 'Use %hh to insert Hex codes',
						default: '',
						width: 6,
					},
				],
			},

			/// Camera controls

			set_camera_mode: {
				label: 'Set camera mode',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Mode:',
						default: 'video',
						choices: [
							{ id: 'video', label: 'Video' },
							{ id: 'photo', label: 'Photo' },
						]
					},
				],
			},

			set_camera_shot: {
				label: 'Make a shot',
			},

			set_camera_rec: {
				label: 'Camera rec start/stop',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 0,
						choices: [
							{ id: 0, label: 'Stop' },
							{ id: 1, label: 'Start' },
						]
					},
				],
			},

			set_camera_dzoom_move: {
				label: 'Camera digital zoom in/out',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 0,
						choices: [
							{ id: 0, label: 'Stop' },
							{ id: 1, label: 'Zoom in' },
							{ id: -1, label: 'Zoom out' },
						]
					},
				],
			},

			set_camera_dzoom_set: {
				label: 'Camera digital zoom set',
				options: [
					{
						type: 'number',
						label: 'Digital zoom value',
						id: 'value',
						min: 100,
						max: 800,
						default: 100,
						step: 1,
						required: true,
						range: true,
						tooltip: 'Digital zoom value'
					},
				],
			},

			set_camera_focus: {
				label: 'Camera focus',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'af',
						choices: [
							{ id: 'mf', label: 'Manual Focus' },
							{ id: 'af', label: 'Auto Focus' },
							{ id: 'afc', label: 'AF Continuous' },
							{ id: 'afs', label: 'AF Single' },
						]
					},
				],
			},

			set_camera_image_mode: {
				label: 'Camera image mode',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'next',
						choices: [
							{ id: 'next', label: 'Next' },
							{ id: 'prev', label: 'Previous' },
							{ id: 'auto', label: 'Auto' },
							{ id: 'shutter', label: 'Shutter' },
							{ id: 'manual', label: 'Manual' },
						]
					},
				],
			},


			set_camera_shutter: {
				label: 'Camera shutter',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'next',
						choices: [
							{ id: 'next', label: 'Next' },
							{ id: 'prev', label: 'Previous' },
						]
					},
				],
			},

			set_camera_iso: {
				label: 'Camera ISO',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'next',
						choices: [
							{ id: 'next', label: 'Next' },
							{ id: 'prev', label: 'Previous' },
						]
					},
				],
			},

			set_camera_ev: {
				label: 'Camera EV',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'next',
						choices: [
							{ id: 'next', label: 'Next' },
							{ id: 'prev', label: 'Previous' },
						]
					},
				],
			},

			set_camera_wb: {
				label: 'Camera WB',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'next',
						choices: [
							{ id: 'next', label: 'Next' },
							{ id: 'prev', label: 'Previous' },
						]
					},
				],
			},

			set_camera_color: {
				label: 'Camera color',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: '',
						default: 'next',
						choices: [
							{ id: 'next', label: 'Next' },
							{ id: 'prev', label: 'Previous' },
						]
					},
				],
			},

			/// Gimbal controls

			set_gimbal_position: {
				label: 'Gimbal set position',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Position:',
						default: 'normal',
						choices: [
							{ id: 'normal', label: 'Normal' },
							{ id: 'selfie', label: 'Selfie' },
						]
					},
				],
			},

			set_gimbal_orientation_lock: {
				label: 'Gimbal orientation lock',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Orientation lock/unlock:',
						default: 'unlock',
						choices: [
							{ id: 'lock', label: 'Locked' },
							{ id: 'unlock', label: 'Unlocked' },
						]
					},
				],
			},

			set_gimbal_move: {
				label: 'Gimbal move',
				options: [
					{
						type: 'number',
						label: 'Pan speed',
						id: 'value',
						min: -1.0,
						max: 1.0,
						default: 0.0,
						step: 0.05,
						required: true,
						range: true,
						tooltip: 'Pan speed'
					},
					{
						type: 'number',
						label: 'Tilt speed',
						id: 'value2',
						min: -1.0,
						max: 1.0,
						default: 0.0,
						step: 0.05,
						required: true,
						range: true,
						tooltip: 'Tilt speed'
					},
					{
						type: 'number',
						label: 'Roll speed',
						id: 'value3',
						min: -1.0,
						max: 1.0,
						default: 0.0,
						step: 0.05,
						required: true,
						range: true,
						tooltip: 'Roll speed'
					}
				]
			},

			set_gimbal_stop: {
				label: 'Gimbal stop',
				options: [
				]
			},

			set_gimbal_mode: {
				label: 'Gimbal change mode',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Mode',
						default: 0,
						choices: [
							{ id: 0, label: 'Mode 1' },
							{ id: 1, label: 'Mode 2' },
							{ id: 2, label: 'Mode 3' },
						]
					},
				],
			},


			/// Onboard recorind and streaming

			set_onboard_rec: {
				label: 'Set onboard recording',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'State:',
						default: 'off',
						choices: [
							{ id: 0, label: 'Off' },
							{ id: 1, label: 'On' },
						]
					},
				],
			},

			set_stream: {
				label: 'Streams',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Stream type:',
						default: 'udp',
						choices: [
							{ id: 'udp', label: 'RAW UDP' },
							{ id: 'rtmp', label: 'RTMP' },
							{ id: 'srt', label: 'SRT' },
							{ id: 'rtsp', label: 'RTSP' },
							{ id: 'rtp', label: 'RTP' },
							{ id: 'ndi', label: 'NDI' },
							{ id: 'v4l2', label: 'V4L2' },
						]
					},
					{
						type: 'dropdown',
						id: 'value2',
						label: 'State:',
						default: '0',
						choices: [
							{ id: 0, label: 'Off' },
							{ id: 1, label: 'On' },
						]
					},
				],
			},


			/// Automovements controls

			set_am_preset: {
				label: 'Automovement preset go to',
				options: [
					{
						type: 'number',
						label: 'Preset number',
						id: 'value',
						min: 1,
						max: 20,
						default: 1,
						step: 1,
						required: true,
						range: false,
						tooltip: 'Preset number'
					}
				],
			},

			store_am_preset: {
				label: 'Automovement preset save',
				options: [
					{
						type: 'textwithvariables',
						id: 'value',
						label: 'Preset number (from 1):',
						tooltip: 'Numeration starts from 1',
						default: '',
						width: 6,
					},
				],
			},

			set_am_next: {
				label: 'Automovement next',
				options: [
				],
			},

			set_am_prev: {
				label: 'Automovement prev',
				options: [
				],
			},

			set_am_state: {
				label: 'Automovement enable/disable',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Enable/disable',
						default: '0',
						choices: [
							{ id: '0', label: 'Disabled' },
							{ id: '1', label: 'Enabled' },
						]
					},
				],
			},


			/// Wiral Lite controls

			wiral_move: {
				label: 'Wiral Lite move to custom distance',
				options: [
					{
						type: 'number',
						label: 'Distance',
						id: 'value',
						min: 0,
						max: 65535,
						default: 0,
						step: 1,
						required: true,
						range: true,
						tooltip: 'Distance'
					},
					{
						type: 'number',
						label: 'Speed (-1 for current speed)',
						id: 'value2',
						min: -1,
						max: 255,
						default: -1,
						step: 1,
						required: true,
						range: true,
						tooltip: 'Speed'
					}
				],
			},

			wiral_move_to: {
				label: 'Wiral Lite move to',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Position',
						default: '0',
						choices: [
							{ id: '0', label: 'Start point' },
							{ id: '65535', label: 'End point' },
						]
					},
					{
						type: 'number',
						label: 'Speed (-1 for current speed)',
						id: 'value2',
						min: -1,
						max: 255,
						default: -1,
						step: 1,
						required: true,
						range: true,
						tooltip: 'Speed'
					}
				],
			},

			wiral_stop: {
				label: 'Wiral Lite stop',
				options: [
				],
			},

			wiral_change_speed: {
				label: 'Wiral Lite change speed',
				options: [
					{
						type: 'number',
						label: 'Speed increment',
						id: 'value',
						min: -25,
						max: 25,
						default: 5,
						step: 1,
						required: true,
						range: true,
						tooltip: 'Speed increment'
					}
				],
			},

			wiral_tictac: {
				label: 'Wiral Lite tic-tac mode',
				options: [
					{
						type: 'dropdown',
						id: 'value',
						label: 'Enable/disable',
						default: '0',
						choices: [
							{ id: '0', label: 'Disabled' },
							{ id: '1', label: 'Enabled' },
						]
					},
					{
						type: 'number',
						label: 'Speed (-1 for current speed)',
						id: 'value2',
						min: -1,
						max: 255,
						default: -1,
						step: 1,
						required: true,
						range: true,
						tooltip: 'Speed'
					}
				],
			},
	}

	return actions
}