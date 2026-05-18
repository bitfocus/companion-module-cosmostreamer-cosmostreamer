const Feedback = require('./feedbacks');
const Network = require('./network');
const Variables = require('./variables');

module.exports = function (self) {

	self.log('debug', 'Actions init');

	/// For rotary WB (white balance)
	Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value = 0;

	/// For rotary ISO
	var iso_values = [
		{ name: "100"},
		{ name: "200"},
		{ name: "400"},
		{ name: "800"},
		{ name: "1600"},
		{ name: "3200"},
		{ name: "6400"},
		{ name: "12800"},
		{ name: "25600"},
	]
	Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index = 0;
	Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_value = iso_values[Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index];
	self.setVariableValues({ 'camera_iso_set_rotary': 'not set'});

	/// For rotary EV
	var ev_values = [
		{ name: "-3.0"},
		{ name: "-2.7"},
		{ name: "-2.3"},
		{ name: "-2.0"},
		{ name: "-1.7"},
		{ name: "-1.3"},
		{ name: "-1.0"},
		{ name: "-0.7"},
		{ name: "-0.3"},
		{ name: "0.0"},
		{ name: "+0.3"},
		{ name: "+0.7"},
		{ name: "+1.0"},
		{ name: "+1.3"},
		{ name: "+1.7"},
		{ name: "+2.0"},
		{ name: "+2.3"},
		{ name: "+2.7"},
		{ name: "+3.0"},
	]
	Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index = 9;
	Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_value = ev_values[Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index];
	self.setVariableValues({ 'camera_ev_set_rotary': 'not set'});

	/// For rotary shutter
	var shutter_values = [
		{ name: "1/25"},
		{ name: "1/30"},
		{ name: "1/40"},
		{ name: "1/50"},
		{ name: "1/60"},
		{ name: "1/80"},
		{ name: "1/100"},
		{ name: "1/120"},
		{ name: "1/160"},
		{ name: "1/200"},
		{ name: "1/240"},
		{ name: "1/320"},
		{ name: "1/400"},
		{ name: "1/500"},
		{ name: "1/640"},
		{ name: "1/800"},
		{ name: "1/1000"},
		{ name: "1/1250"},
		{ name: "1/1600"},
		{ name: "1/2000"},
		{ name: "1/2500"},
		{ name: "1/3200"},
		{ name: "1/4000"},
		{ name: "1/5000"},
		{ name: "1/6400"},
		{ name: "1/8000"},
	]
	Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index = 0;
	Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_value = shutter_values[Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index];
	self.setVariableValues({ 'camera_shutter_set_rotary': 'not set'});


	self.setActionDefinitions({

		action_camera_mode: {
			name: 'Camera Set Mode',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'video',
					choices: [
						{ id: 'video', label: 'Video' },
						{ id: 'photo', label: 'Photo' },
					],
				},
			],
			callback: async (event) => {
				//console.log('Hello world!', event.options)
				cmd = '!{"cmd":"camera","param":"mode","value":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},

		action_lense_mode: {
			name: 'Set Lense Mode',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'single',
					choices: [
						{ id: 'single', label: 'Single' },
						{ id: '360', label: '360' },
					],
				},
			],
			callback: async (event) => {
				//console.log('Hello world!', event.options)
				var mode;
				switch (event.options.value) {
					default:
					case 'single': mode = 1; break;
					case '360': mode = 360; break;
				}
				cmd = '!{"cmd":"camera","param":"lense-mode","value":"' + mode + '"}';
				Network.send(cmd);
			},
		},

		action_camera_view_angle: {
			name: 'Set 360 angle',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Set',
					default: '104',
					choices: [
						{ id: 'inc', label: 'Increase' },
						{ id: 'dec', label: 'Decrease' },
						{ id: 'stop', label: 'Stop' },
						{ id: '104', label: '104' },
						{ id: '134', label: '134' },
						{ id: '272', label: '272' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case 'inc': Network.send('!{"cmd":"camera","param":"angle360-speed","value":"1"}'); break;
					case 'dec': Network.send('!{"cmd":"camera","param":"angle360-speed","value":"-1"}'); break;
					case 'stop': Network.send('!{"cmd":"camera","param":"angle360-speed","value":"0"}'); break;
					default: Network.send('!{"cmd":"camera","param":"angle360","value":"' + event.options.value + '\"}');
				}
			},
		},

		action_camera_shot: {
			name: 'Camera Shot',
			options: [
				{
					id: 'value',
					type: 'button',
					label: 'Show',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"shot","param":"","value":""}';
				Network.send(cmd);
			},
		},

		action_camera_rec: {
			name: 'Camera Rec',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Rec',
					default: 'toggle',
					choices: [
						{ id: 'start', label: 'Start' },
						{ id: 'stop', label: 'Stop' },
						{ id: 'toggle', label: 'Toggle' },
					],
				},
			],
			callback: async (event) => {
				let param = event.options.value;
				if (event.options.value == "toggle") {
					if (Feedback.feedbackVars.camera_vars.record_active) {
						param = "stop";
					} else {
						param = "start";
					}
				}
				cmd = '!{"cmd":"record","param":"' + param + '"}';
				Network.send(cmd);
			},
		},


		action_image_mode: {
			name: 'Camera Set Image Mode',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'auto', label: 'Auto' },
						{ id: 'manual', label: 'Manual' },
						{ id: 'shutter', label: 'Shutter' },
						{ id: 'next', label: 'next' },
						{ id: 'prev', label: 'prev' },
					],
				},
			],
			callback: async (event) => {
				//console.log('Hello world!', event.options)
				cmd = '!{"cmd":"video_mode","param":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


		action_ev: {
			name: 'Camera Set EV',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: '0',
					choices: [
						{ id: 'next', label: 'next' },
						{ id: 'prev', label: 'prev' },
						{ id: 'rotary_next', label: 'next rotary' },
						{ id: 'rotary_prev', label: 'prev rotary' },
						{ id: 'rotary_set', label: 'set rotary' },
						{ id: '-3.0', label: '-3.0' },
						{ id: '-2.7', label: '-2.7' },
						{ id: '-2.3', label: '-2.3' },
						{ id: '-2.0', label: '-2.0' },
						{ id: '-1.7', label: '-1.7' },
						{ id: '-1.3', label: '-1.3' },
						{ id: '-1.0', label: '-1.0' },
						{ id: '-0.7', label: '-0.7' },
						{ id: '-0.3', label: '-0.3' },
						{ id: '0', label: '0' },
						{ id: '+0.3', label: '+0.3' },
						{ id: '+0.7', label: '+0.7' },
						{ id: '+1.0', label: '+1.0' },
						{ id: '+1.3', label: '+1.3' },
						{ id: '+1.7', label: '+1.7' },
						{ id: '+2.0', label: '+2.0' },
						{ id: '+2.3', label: '+2.3' },
						{ id: '+2.7', label: '+2.7' },
						{ id: '+3.0', label: '+3.0' },
					],
				},
			],
			callback: async (event) => {
				if (Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index == undefined) Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index = 9;
				switch (event.options.value) {
					case 'rotary_next':
						var inc = 1;
						var set_index = Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index + inc;
						if (set_index >= ev_values.length) set_index = ev_values.length - 1;
						if (set_index < 0) set_index = 0;
						var set_value = ev_values[set_index].name;
						Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index = set_index;
						Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_ev_set_rotary': set_value});
						Network.send('!{"cmd":"ev","param":"' + Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_value + '"}');
					break;
					case 'rotary_prev':
						var inc = -1;
						var set_index = Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index + inc;
						if (set_index >= ev_values.length) set_index = ev_values.length - 1;
						if (set_index < 0) set_index = 0;
						var set_value = ev_values[set_index].name;
						Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_index = set_index;
						Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_ev_set_rotary': set_value});
						Network.send('!{"cmd":"ev","param":"' + Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_value + '"}');
					break;
					case 'rotary_set':
						Network.send('!{"cmd":"ev","param":"' + Feedback.feedbackVars.camera_vars.camera_ev_set_rotary_value + '"}');
					break;

					default:
						Network.send('!{"cmd":"ev","param":"' + event.options.value + '"}');
				}
			},
		},


		action_iso: {
			name: 'Camera Set ISO',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'next', label: 'next' },
						{ id: 'prev', label: 'prev' },
						{ id: 'rotary_next', label: 'next rotary' },
						{ id: 'rotary_prev', label: 'prev rotary' },
						{ id: 'rotary_set', label: 'set rotary' },
						{ id: 'auto', label: 'auto' },
						{ id: '100', label: '100' },
						{ id: '200', label: '200' },
						{ id: '400', label: '400' },
						{ id: '800', label: '800' },
						{ id: '1600', label: '1600' },
						{ id: '3200', label: '3200' },
						{ id: '6400', label: '6400' },
						{ id: '12800', label: '12800' },
						{ id: '25600', label: '25600' },
					],
				},
			],
			callback: async (event) => {
				//self.log('info', 'action: ' + event.options.value);
				if (Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index == undefined) Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index  = 0;
				switch (event.options.value) {
					case 'rotary_next':
						var inc = 1;
						var set_index = Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index + inc;
						if (set_index >= ev_values.length) set_index = ev_values.length - 1;
						if (set_index < 0) set_index = 0;
						var set_value = iso_values[set_index].name;
						Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index = set_index;
						Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_iso_set_rotary': set_value});
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"iso","param":"' + Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_value + '"}');
					break;
					case 'rotary_prev':
						var inc = -1;
						var set_index = Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index + inc;
						if (set_index >= ev_values.length) set_index = ev_values.length - 1;
						if (set_index < 0) set_index = 0;
						var set_value = iso_values[set_index].name;
						Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_index = set_index;
						Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_iso_set_rotary': set_value});
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"iso","param":"' + Feedback.feedbackVars.camera_vars.camera_iso_set_rotary_value + '"}');
					break;
					case 'rotary_set':
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"iso","param":"auto"}');
					break;

					default:
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"iso","param":"' + event.options.value + '"}');
				}
			},
		},


		action_aperture: {
			name: 'Camera Set Aperture',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'next', label: 'next' },
						{ id: 'prev', label: 'prev' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"aperture","param":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


		action_shutter: {
			name: 'Camera Set Shutter',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: '1/25',
					choices: [
						{ id: 'next', label: 'next' },
						{ id: 'prev', label: 'prev' },
						{ id: 'rotary_next', label: 'next rotary' },
						{ id: 'rotary_prev', label: 'prev rotary' },
						{ id: 'rotary_set', label: 'set rotary' },
						{ id: '1/25', label: '1/25' },
						{ id: '1/30', label: '1/30' },
						{ id: '1/40', label: '1/40' },
						{ id: '1/50', label: '1/50' },
						{ id: '1/60', label: '1/60' },
						{ id: '1/80', label: '1/80' },
						{ id: '1/100', label: '1/100' },
						{ id: '1/120', label: '1/120' },
						{ id: '1/160', label: '1/160' },
						{ id: '1/200', label: '1/200' },
						{ id: '1/240', label: '1/240' },
						{ id: '1/320', label: '1/320' },
						{ id: '1/400', label: '1/400' },
						{ id: '1/500', label: '1/500' },
						{ id: '1/640', label: '1/640' },
						{ id: '1/800', label: '1/800' },
						{ id: '1/1000', label: '1/1000' },
						{ id: '1/1250', label: '1/1250' },
						{ id: '1/1600', label: '1/1600' },
						{ id: '1/2000', label: '1/2000' },
						{ id: '1/2500', label: '1/2500' },
						{ id: '1/3200', label: '1/3200' },
						{ id: '1/4000', label: '1/4000' },
						{ id: '1/5000', label: '1/5000' },
						{ id: '1/6400', label: '1/6400' },
						{ id: '1/8000', label: '1/8000' },
					],
				},
			],
			callback: async (event) => {
				if (Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index == undefined) Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index = 0;
				switch (event.options.value) {
					case 'rotary_next':
						var inc = 1;
						var set_index = Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index + inc;
						if (set_index >= shutter_values.length) set_index = shutter_values.length - 1;
						if (set_index < 0) set_index = 0;
						var set_value = shutter_values[set_index].name;
						Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index = set_index;
						Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_shutter_set_rotary': set_value});
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"shutter","param":"' + Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_value + '"}');
					break;
					case 'rotary_prev':
						var inc = -1;
						var set_index = Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index + inc;
						if (set_index >= shutter_values.length) set_index = shutter_values.length - 1;
						if (set_index < 0) set_index = 0;
						var set_value = shutter_values[set_index].name;
						Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_index = set_index;
						Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_shutter_set_rotary': set_value});
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"shutter","param":"' + Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_value + '"}');
					break;
					case 'rotary_set':
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"shutter","param":"' + Feedback.feedbackVars.camera_vars.camera_shutter_set_rotary_value + '"}');
					break;

					default:
						Network.send('!{"cmd":"video_mode","param":"manual"}');
						Network.send('!{"cmd":"shutter","param":"' + event.options.value + '"}');
				}
			},
		},


		action_wb: {
			name: 'Camera Set WB',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'rotary_next', label: 'next rotary' },
						{ id: 'rotary_prev', label: 'prev rotary' },
						{ id: 'rotary_set', label: 'set rotary' },
						{ id: 'auto', label: 'auto' },
						{ id: '2000', label: '2000' },
						{ id: '2500', label: '2500' },
						{ id: '3000', label: '3000' },
						{ id: '3500', label: '3500' },
						{ id: '4000', label: '4000' },
						{ id: '4500', label: '4500' },
						{ id: '5000', label: '5000' },
						{ id: '5500', label: '5500' },
						{ id: '6000', label: '6000' },
						{ id: '6500', label: '6500' },
						{ id: '7000', label: '7000' },
						{ id: '7500', label: '7500' },
						{ id: '8000', label: '8000' },
						{ id: '8500', label: '8500' },
						{ id: '9000', label: '9000' },
						{ id: '9500', label: '9500' },
						{ id: '10000', label: '10000' },
					],
				},
			],
			callback: async (event) => {
				if (Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value == undefined) Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value = 6000;
				switch (event.options.value) {
					case 'rotary_next':
						var inc = 50;
						var set_value = Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value + inc;
						if (set_value >= 10000) set_value = 10000;
						if (set_value <= 2000) set_value = 2000;
						Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_wb_set_rotary': set_value});
						Network.send('!{"cmd":"wb","param":"custom","value":"' + Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value + '"}');
					break;
					case 'rotary_prev':
						var inc = -50;
						var set_value = Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value + inc;
						if (set_value >= 10000) set_value = 10000;
						if (set_value <= 2000) set_value = 2000;
						Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value = set_value;
						self.setVariableValues({ 'camera_wb_set_rotary': set_value});
						Network.send('!{"cmd":"wb","param":"custom","value":"' + Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value + '"}');
					break;
					case 'rotary_set':
						Network.send('!{"cmd":"wb","param":"custom","value":"' + Feedback.feedbackVars.camera_vars.camera_wb_set_rotary_value + '"}');
					break;

					default:
						let param = event.options.value;
						let value = 0;
						if (parseInt(param) > 0) {
							value = parseInt(param);
							param = 'custom';
						}
						Network.send('!{"cmd":"wb","param":"' + param + '","value":"' + value + '"}');
				}
			},
		},



		action_focus: {
			name: 'Camera Set Focus',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'mf', label: 'MF' },
						{ id: 'afc', label: 'AFC' },
						{ id: 'afs', label: 'AFS' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "mf":
					case "afs":
					case "afc":
						cmd = '!{"cmd":"focus","param":"type","value":"' + event.options.value + '"}';
					break;
				}
				Network.send(cmd);
			},
		},


		action_dzoom: {
			name: 'Camera Set Digital Zoom',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'stop', label: 'Stop' },
						{ id: 'in', label: 'Zoom In' },
						{ id: 'out', label: 'Zoom Out' },
						{ id: '1x', label: 'Zoom 1x' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "in":
						cmd = '!{"cmd":"dzoom","param":"move","value":"0.01"}';
					break;
					case "out":
						cmd = '!{"cmd":"dzoom","param":"move","value":"-0.01"}';
					break;
					case "stop":
						cmd = '!{"cmd":"dzoom","param":"move","value":"0.0"}';
					break;
					case "1x":
						cmd = '!{"cmd":"dzoom","param":"set","value":"1.0"}';
					break;
				}
				Network.send(cmd);
			},
		},



		action_menu_navigation: {
			name: 'Menu Controls',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'menu-press', label: 'Menu Press'},
						{ id: 'menu-release', label: 'Menu Release'},
						{ id: 'ok-press', label: 'Ok Press'},
						{ id: 'ok-release', label: 'Ok Release'},
						{ id: 'up-press', label: 'Up Press'},
						{ id: 'up-release', label: 'Up Release'},
						{ id: 'down-press', label: 'Down Press'},
						{ id: 'down-release', label: 'Down Release'},
						{ id: 'left-press', label: 'Left Press'},
						{ id: 'left-release', label: 'Left Release'},
						{ id: 'right-press', label: 'Right Press'},
						{ id: 'right-release', label: 'Right Release'},
					],
				},
			],
			callback: async (event) => {
				let state = 0;
				let parts = event.options.value.split('-');
				if (parts[1] == 'press') state = 1;
				cmd = '!{"cmd":"camera-control","param":"' + parts[0] + '","value":"' + state + '"}';
				Network.send(cmd);
			},
		},


		action_onboard_rec: {
			name: 'Onboard Recording',
			callback: async (event) => {
				cmd = '{"cmd":"updateconfig","param":"rec","value":"' + (Feedback.feedbackVars.onboard_rec_state ? 0 : 1) + '"}';
				Network.send(cmd);
			},
		},

		action_video_pause: {
			name: 'Video pause',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'toggle',
					choices: [
						{ id: 'on', label: 'on' },
						{ id: 'off', label: 'off' },
						{ id: 'toggle', label: 'toggle' },
					],
				},
			],
			callback: async (event) => {
				let value = '';
				switch (event.options.value) {
					case "on":
						value = 1;
					break;
					case "off":
						value = 0;
						break;
					case "toggle":
						if (Feedback.feedbackVars.video_pause_state) {
							value = 0;
						} else {
							value = 1;
						}
						break;
				}
				cmd = '{"cmd":"updateconfig","param":"display","value":"pause","value2":"' + value + '"}';
				Network.send(cmd);
			},
		},


		action_streaming: {
			name: 'Menu Streaming',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'udp',
					choices: [
						{ id: 'udp', label: 'Raw UDP'},
						{ id: 'rtp', label: 'RTP'},
						{ id: 'rtsp', label: 'RTSP'},
						{ id: 'rtsp-client', label: 'RTSP Client'},
						{ id: 'srt', label: 'SRT'},
						{ id: 'mpegts', label: 'MPEG-TS'},
						{ id: 'hls', label: 'HLS'},
						{ id: 'ndi', label: 'NDI'},
						{ id: 'ndihx', label: 'NDI HX'},
						{ id: 'v4l2', label: 'V4L2'},
						{ id: 'dvbt', label: 'DVB-T'},
						{ id: 'rtmp_custom1', label: 'RTMP Custom 1'},
						{ id: 'rtmp_custom2', label: 'RTMP Custom 1'},
						{ id: 'rtmp_youtube', label: 'RTMP Youtube'},
						{ id: 'rtmp_insta', label: 'RTMP Instagram'},
						{ id: 'rtmp_facebook', label: 'RTMP Facebook'},
						{ id: 'rtmp_tiktok', label: 'RTMP TikTok'},
					],
				},
			],
			callback: async (event) => {
				var cmd = '';
				switch (event.options.value) {
					case 'udp':
					case 'srt':
					case 'mpegts':
					case 'hls':
					case 'rtp':
					case 'rtsp':
					case 'rtsp-client':
					case 'ndihx':
					case 'ndi':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"' + event.options.value + '","value4":"2"}';
						break;

					case 'rtmp_custom1':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"rtmp","value3":"custom1","value4":"2"}';
						break;
					case 'rtmp_custom2':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"rtmp","value3":"custom2","value4":"2"}';
						break;
					case 'rtmp_youtube':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"rtmp","value3":"youtube","value4":"2"}';
						break;
					case 'rtmp_insta':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"rtmp","value3":"insta","value4":"2"}';
						break;
					case 'rtmp_facebook':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"rtmp","value3":"facebook","value4":"2"}';
						break;
					case 'rtmp_tiktok':
						cmd = '{"cmd":"updateconfig","param":"streaming","value":"control","value2":"rtmp","value3":"tiktok","value4":"2"}';
						break;


					case 'dvbt':
						cmd = '{"cmd":"updateconfig","param":"stream","value":"dvbt","value2":"' + (Feedback.feedbackVars.stream_state_dvbt ? 0 : 1) + '"}';
						break;
					case 'v4l2':
						cmd = '{"cmd":"updateconfig","param":"stream","value":"v4l2","value2":"' + (Feedback.feedbackVars.stream_state_v4l2 ? 0 : 1) + '"}';
						break;
				}
				Network.send(cmd);
			},
		},



		action_drone_control: {
			name: 'Drone Controls',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'takeoff', label: 'Take-Off' },
						{ id: 'landing', label: 'Landing' },
						{ id: 'rth', label: 'Return To Home' },
						{ id: 'cancel_landing', label: 'Cancel landing' },
						{ id: 'cancel_rth', label: 'Cancel RTH' },

						{ id: 'control_toggle', label: 'Control Toggle' },
						{ id: 'control_enable', label: 'Control Enable' },
						{ id: 'control_disable', label: 'Control Disable' },

						{ id: 'move_fwd', label: 'Move Forward' },
						{ id: 'move_back', label: 'Move Back' },
						{ id: 'move_fwd_back_stop', label: 'Move Fwd/Back Stop' },
						{ id: 'move_left', label: 'Move Left' },
						{ id: 'move_right', label: 'Move Right' },
						{ id: 'move_left_right_stop', label: 'Move Left/Right Stop' },
						{ id: 'move_up', label: 'Move Up' },
						{ id: 'move_down', label: 'Move Down' },
						{ id: 'move_up_down_stop', label: 'Move Up/Down Stop' },
						{ id: 'rotate_left', label: 'Rotate Left' },
						{ id: 'rotate_right', label: 'Rotate Right' },
						{ id: 'rotate_left_right_stop', label: 'Rotate Left/Right Stop' },
					],
				},
			],
			callback: async (event) => {
				let cmd = '';
				let speed = 0.2;

				if (Feedback.feedbackVars.drone_vars.set_fwd_back_speed == undefined) Feedback.feedbackVars.drone_vars.set_fwd_back_speed = 0.0;
				if (Feedback.feedbackVars.drone_vars.set_left_right_speed == undefined) Feedback.feedbackVars.drone_vars.set_left_right_speed = 0.0;
				if (Feedback.feedbackVars.drone_vars.set_up_down_speed == undefined) Feedback.feedbackVars.drone_vars.set_up_down_speed = 0.0;
				if (Feedback.feedbackVars.drone_vars.set_yaw_speed == undefined) Feedback.feedbackVars.drone_vars.set_yaw_speed = 0.0;

				switch (event.options.value) {
					case "takeoff":
						cmd = '!{"cmd":"drone","param":"takeoff"}';
						Network.send(cmd);
					break;


					case "landing":
						if (Feedback.feedbackVars.drone_vars.in_landing) {
							cmd = '!{"cmd":"drone","param":"cancel_landing"}';
							Network.send(cmd);
						} else {
							cmd = '!{"cmd":"drone","param":"landing"}';
							Network.send(cmd);
						}
						break;

					case "rth":
						if (Feedback.feedbackVars.drone_vars.in_rth) {
							cmd = '!{"cmd":"drone","param":"cancel_rth"}';
							Network.send(cmd);
						} else {
							cmd = '!{"cmd":"drone","param":"rth"}';
							Network.send(cmd);
						}
						break;

					case "cancel_landing":
					case "cancel_rth":
						cmd = '!{"cmd":"drone","param":"' + event.options.value + '"}';
						Network.send(cmd);
					break;


					case "control_toggle":
						if (Feedback.feedbackVars.drone_vars.app_control_enabled == 0) cmd = '!{"cmd":"drone","param":"control_app","value":"1"}';
						if (Feedback.feedbackVars.drone_vars.app_control_enabled == 1) cmd = '!{"cmd":"drone","param":"control_app","value":"0"}';
						Network.send(cmd);
						return;
					break;
					case "control_enable":
						cmd = '!{"cmd":"drone","param":"control_app","value":"1"}';
						Network.send(cmd);
						return;
					break;
					case "control_disable":
						cmd = '!{"cmd":"drone","param":"control_app","value":"0"}';
						Network.send(cmd);
						return;
					break;

					case "move_fwd":
						Feedback.feedbackVars.drone_vars.set_fwd_back_speed = speed;
					break;
					case "move_back":
						Feedback.feedbackVars.drone_vars.set_fwd_back_speed = -speed;
					break;
					case "move_fwd_back_stop":
						Feedback.feedbackVars.drone_vars.set_fwd_back_speed = 0;
					break;

					case "move_left":
						Feedback.feedbackVars.drone_vars.set_left_right_speed = -speed;
					break;
					case "move_right":
						Feedback.feedbackVars.drone_vars.set_left_right_speed = speed;
					break;
					case "move_left_right_stop":
						Feedback.feedbackVars.drone_vars.set_left_right_speed = 0;
					break;

					case "move_up":
						Feedback.feedbackVars.drone_vars.set_up_down_speed = speed;
					break;
					case "move_down":
						Feedback.feedbackVars.drone_vars.set_up_down_speed = -speed;
					break;
					case "move_up_down_stop":
						Feedback.feedbackVars.drone_vars.set_up_down_speed = 0;
					break;

					case "rotate_left":
						Feedback.feedbackVars.drone_vars.set_yaw_speed = -speed;
					break;
					case "rotate_right":
						Feedback.feedbackVars.drone_vars.set_yaw_speed = speed;
					break;
					case "rotate_left_right_stop":
						Feedback.feedbackVars.drone_vars.set_yaw_speed = 0;
					break;
				}

				cmd = '!{"cmd":"drone","param":"move","value":"' + Feedback.feedbackVars.drone_vars.set_left_right_speed + '","value2":"' + Feedback.feedbackVars.drone_vars.set_up_down_speed + '","value3":"' + Feedback.feedbackVars.drone_vars.set_fwd_back_speed + '","value4":"' + Feedback.feedbackVars.drone_vars.set_yaw_speed + '"}';
				Network.send(cmd);

			},
		},

		action_drone_waypoints: {
			name: 'Drone Waypoints Mission',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'start', label: 'Mission Start' },
						{ id: 'stop', label: 'Mission Stop' },
						{ id: 'pause', label: 'Mission Pause' },
						{ id: 'resume', label: 'Mission Resume' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"drone","param":"wp","value":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},

		action_drone_waypoint_start_name: {
			name: 'Drone Mission Start Name',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Mission Name',
					default: '',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"drone","param":"wp","value":"start","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


		action_drone_waypoint_start_fast_name: {
			name: 'Drone Mission Fast Start Name',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Mission Name',
					default: '',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"drone","param":"wp","value":"start-fast","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


		action_drone_zeropoint_update: {
			name: 'Drone Update Zero Point',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'set_current', label: 'Set Current Zero Point' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "set_current":
						cmd = '!{"cmd":"drone","param":"zeropoint","value":"set_current"}';
						break;
				}
				Network.send(cmd);
			},
		},


		action_link_bind: {
			name: 'Binding start',
			callback: async (event) => {
				cmd = '!{"cmd":"link","param":"bind","value":"1"}';
				Network.send(cmd);
			},
		},

		action_link_cancel_bind: {
			name: 'Binding cancel',
			callback: async (event) => {
				cmd = '!{"cmd":"link","param":"bind","value":"0"}';
				Network.send(cmd);
			},
		},

		action_link_freq_band: {
			name: 'Link Frequency Band',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Freq',
					default: 'dualband',
					choices: [
						{ id: 'dualband', label: 'dualband' },
						{ id: '2.4', label: '2.4' },
						{ id: '5.8', label: '5.8' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"link","param":"frequency","value":"' + event.options.value + '\"}';
				Network.send(cmd);
			},
		},

		action_link_channel_mode: {
			name: 'Link Channel Mode',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Freq',
					default: 'dualband',
					choices: [
						{ id: 'auto', label: 'auto' },
						{ id: 'manual', label: 'manual' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"link","param":"channel","value":"' + event.options.value + '\"}';
				Network.send(cmd);
			},
		},

		action_link_channel_bandwidth: {
			name: 'Link Channel Bandwidth',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Freq',
					default: '60',
					choices: [
						{ id: '10', label: '10' },
						{ id: '20', label: '20' },
						{ id: '40', label: '40' },
						{ id: '60', label: '60' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"link","param":"channel-width","value":"' + event.options.value + '\"}';
				Network.send(cmd);
			},
		},


		action_link_channel: {
			name: 'Link Controls',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Channel',
					default: 'auto',
					choices: [
						{ id: 'auto', label: 'Auto' },
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
						{ id: '3', label: '3' },
						{ id: '4', label: '4' },
						{ id: '5', label: '5' },
						{ id: '6', label: '6' },
						{ id: '7', label: '7' },
						{ id: '8', label: '8' },
						{ id: '9', label: '9' },
						{ id: '10', label: '10' },
						{ id: '11', label: '11' },
						{ id: '12', label: '12' },
						{ id: '13', label: '13' },
						{ id: '14', label: '14' },
						{ id: '15', label: '15' },
						{ id: '16', label: '16' },
						{ id: '17', label: '17' },
						{ id: '18', label: '18' },
						{ id: '19', label: '19' },
						{ id: '20', label: '20' },
						{ id: '21', label: '21' },
						{ id: '22', label: '22' },
						{ id: '23', label: '23' },
						{ id: '24', label: '24' },
						{ id: '25', label: '25' },
						{ id: '26', label: '26' },
						{ id: '27', label: '27' },
						{ id: '28', label: '28' },
						{ id: '29', label: '29' },
						{ id: '30', label: '30' },
						{ id: '31', label: '31' },
						{ id: '32', label: '32' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"link","param":"channel","value":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


		action_gimbal_orientation_lock: {
			name: 'Gimbal Orientation Lock/Unlock',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'toggle',
					choices: [
						{ id: 'lock', label: 'lock' },
						{ id: 'unlock', label: 'unlock' },
						{ id: 'toggle', label: 'toggle' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "lock":
					case "unlock":
						cmd = '!{"cmd":"orientation","param":"' + event.options.value + '"}';
						break;
					case "toggle":
						if (Feedback.feedbackVars.gimbal_vars.orientation_lock) {
							cmd = '!{"cmd":"orientation","param":"unlock"}';
						} else {
							cmd = '!{"cmd":"orientation","param":"lock"}';
						}
						break;
				}
				Network.send(cmd);
			},
		},


		action_gimbal_maxspeed_pan: {
			name: 'Gimbal Max Pan Speed',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Gimbal max pan speed (0 - 100%)',
					default: '50',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal-control","param":"stick","value":"speed-pan","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},
		action_gimbal_maxspeed_tilt: {
			name: 'Gimbal Max Tilt Speed',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Gimbal max tilt speed (0 - 100%)',
					default: '50',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal-control","param":"stick","value":"speed-tilt","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},
		action_gimbal_maxspeed_roll: {
			name: 'Gimbal Max Roll Speed',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Gimbal max roll speed (0 - 100%)',
					default: '50',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal-control","param":"stick","value":"speed-roll","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},
		action_gimbal_smooth_pan: {
			name: 'Gimbal Pan Smoothness',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Gimbal pan smoothness (0 - 30)',
					default: '15',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal-control","param":"stick","value":"smooth-pan","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},
		action_gimbal_smooth_tilt: {
			name: 'Gimbal Tilt Smoothness',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Gimbal tilt smoothness (0 - 30)',
					default: '15',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal-control","param":"stick","value":"smooth-tilt","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},
		action_gimbal_smooth_roll: {
			name: 'Gimbal Roll Smoothness',
			options: [
				{
					id: 'value',
					type: 'textinput',
					label: 'Gimbal roll smoothness (0 - 30)',
					default: '15',
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal-control","param":"stick","value":"smooth-roll","value2":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},




		action_gimbal_preset_speed: {
			name: 'Gimbal Presets Speed',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'Speed', default: 'speed1',
					choices: [
						{ id: 'speed1', label: '1' },
						{ id: 'speed2', label: '2' },
						{ id: 'speed3', label: '3' },
						{ id: 'speed4', label: '4' },
						{ id: 'speed5', label: '5' },
						{ id: 'speed6', label: '6' },
						{ id: 'speed7', label: '7' },
						{ id: 'speed8', label: '8' },
						{ id: 'speed9', label: '9' },
						{ id: 'speed10', label: '10' },
					],
				},
			],
			callback: async (event) => {
				var speed = 0.2;
				switch (event.options.value) {
					case 'speed1': speed = 0.1;  break;
					case 'speed2': speed = 0.2;  break;
					case 'speed3': speed = 0.3;  break;
					case 'speed4': speed = 0.4;  break;
					case 'speed5': speed = 0.5;  break;
					case 'speed6': speed = 0.6;  break;
					case 'speed7': speed = 0.7;  break;
					case 'speed8': speed = 0.8;  break;
					case 'speed9': speed = 0.9;  break;
					case 'speed10': speed = 1.0;  break;
				}
				Feedback.feedbackVars.gimbal_vars.gimbal_speed = speed;
			},
		},


		action_gimbal: {
			name: 'Gimbal actions',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'auto',
					choices: [
						{ id: 'recenter', label: 'Center' },
						{ id: 'selfie', label: 'Selfie' },
						{ id: 'stable', label: 'Stable' },
						{ id: 'fpv', label: 'FPV' },
						{ id: 'up', label: 'up' },
						{ id: 'up-stop', label: 'up-stop' },
						{ id: 'down', label: 'down' },
						{ id: 'down-stop', label: 'down-stop' },
						{ id: 'left', label: 'left' },
						{ id: 'left-stop', label: 'left-stop' },
						{ id: 'right', label: 'right' },
						{ id: 'right-stop', label: 'right-stop' },
						{ id: 'roll-cw', label: 'roll-cw' },
						{ id: 'roll-cw-stop', label: 'roll-cw-stop' },
						{ id: 'roll-ccw', label: 'roll-ccw' },
						{ id: 'roll-ccw-stop', label: 'roll-ccw-stop' },
						{ id: 'stop', label: 'stop' },
					],
				},
			],
			callback: async (event) => {
				let speed = parseFloat(Feedback.feedbackVars.gimbal_vars.gimbal_speed);
				if (speed == 0) speed = 0.2;

				if (Feedback.feedbackVars.camera_vars.set_pan_speed == undefined) Feedback.feedbackVars.camera_vars.set_pan_speed = 0.0;
				if (Feedback.feedbackVars.camera_vars.set_tilt_speed == undefined) Feedback.feedbackVars.camera_vars.set_tilt_speed = 0.0;
				if (Feedback.feedbackVars.camera_vars.set_roll_speed == undefined) Feedback.feedbackVars.camera_vars.set_roll_speed = 0.0;

				switch (event.options.value) {
					case "center":
						cmd = '!{"cmd":"position","param":"normal"}';
					break;
					case "selfie":
						cmd = '!{"cmd":"position","param":"selfie"}';
					break;
					case "stable":
						cmd = '!{"cmd":"gimbal","param":"mode","value":"stable"}';
					break;
					case "fpv":
						cmd = '!{"cmd":"gimbal","param":"mode","value":"fpv"}';
					break;

					case "up":
						Feedback.feedbackVars.camera_vars.set_tilt_speed = speed;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "up-stop":
						Feedback.feedbackVars.camera_vars.set_tilt_speed = 0;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "down":
						Feedback.feedbackVars.camera_vars.set_tilt_speed = -speed;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "down-stop":
						Feedback.feedbackVars.camera_vars.set_tilt_speed = 0;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "left":
						Feedback.feedbackVars.camera_vars.set_pan_speed = -speed;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "left-stop":
						Feedback.feedbackVars.camera_vars.set_pan_speed = 0;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "right":
						Feedback.feedbackVars.camera_vars.set_pan_speed = speed;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "right-stop":
						Feedback.feedbackVars.camera_vars.set_pan_speed = 0;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "roll-cw":
						Feedback.feedbackVars.camera_vars.set_roll_speed = -speed;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "roll-cw-stop":
						Feedback.feedbackVars.camera_vars.set_roll_speed = 0;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "roll-ccw":
						Feedback.feedbackVars.camera_vars.set_roll_speed = speed;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;
					case "roll-ccw-stop":
						Feedback.feedbackVars.camera_vars.set_roll_speed = 0;
						cmd = '{"cmd":"gimbal","param":"move","value":"' + Feedback.feedbackVars.camera_vars.set_pan_speed + '","value2":"' + Feedback.feedbackVars.camera_vars.set_tilt_speed + '","value3":"' + Feedback.feedbackVars.camera_vars.set_roll_speed + '"}';
					break;

					case "stop":
						Feedback.feedbackVars.camera_vars.set_pan_speed = 0.0;
						Feedback.feedbackVars.camera_vars.set_tilt_speed = 0.0;
						Feedback.feedbackVars.camera_vars.set_roll_speed = 0.0;
						cmd = '{"cmd":"gimbal","param":"move","value":"0","value2":"0","value3":"0"}';
					break;
				}
				Network.send(cmd);
			},
		},


		action_obstacle_camera: {
			name: 'Obstacle camera',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Set',
					default: 'next',
					choices: [
						{ id: 'next', label: 'Next' },
						{ id: 'prev', label: 'Prev' },
						{ id: '255', label: 'Auto' },
						{ id: '0', label: '0' },
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
						{ id: '3', label: '3' },
						{ id: '4', label: '4' },
						{ id: '5', label: '5' },
						{ id: '6', label: '6' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"drone","param":"visual-assistant-show","value":"' + event.options.value + '\"}';
				Network.send(cmd);
			},
		},

		action_display_smooth: {
			name: 'Display Smooth',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'toggle',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
				},
			],
			callback: async (event) => {
				var state = 0;
				switch (event.options.value) {
					case 'on': state = 1; break;
					case 'off': state = 0; break;
					case 'toggle': state = 2; break;
				}
				cmd = '{"cmd":"updateconfig","param":"display","value":"smooth","value2":"' + state + '\","value3":"1"}';
				self.log('info', 'display smooth:' + cmd);
				Network.send(cmd);
			},
		},

		action_display_clear_latency: {
			name: 'Display Clear Latency',
			options: [
				{
					id: 'value',
					type: 'button',
					label: 'Show',
				},
			],
			callback: async (event) => {
				cmd = '{"cmd":"latency-clear","param":"","":""}';
				Network.send(cmd);
			},
		},


		action_video_intro: {
			name: 'Video Intro',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'toggle',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
				},
			],
			callback: async (event) => {
				var state = 0;
				switch (event.options.value) {
					case 'on': state = 1; break;
					case 'off': state = 0; break;
					case 'toggle': state = 2; break;
				}
				cmd = '{"cmd":"updateconfig","param":"video_intro","value":"' + state + '\"}';
				self.log('info', 'intro video:' + cmd);
				Network.send(cmd);
			},
		},

		action_bgaudio: {
			name: 'Background Audio',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'toggle',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
				},
			],
			callback: async (event) => {
				var state = 0;
				switch (event.options.value) {
					case 'on': state = 1; break;
					case 'off': state = 0; break;
					case 'toggle': state = 2; break;
				}
				cmd = '{"cmd":"updateconfig","param":"bgaudio","value":"' + state + '\"}';
				Network.send(cmd);
			},
		},

		action_secondary_camera: {
			name: 'Secondary Camera',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'toggle',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
				},
			],
			callback: async (event) => {
				var state = 0;
				switch (event.options.value) {
					case 'on': state = 1; break;
					case 'off': state = 0; break;
					case 'toggle': state = 2; break;
				}
				cmd = '{"cmd":"updateconfig","param":"app2-toggle","value":"' + state + '\"}';
				Network.send(cmd);
			},
		},



		action_ronin_focus: {
			name: 'Ronin Focus Motor',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'back1',
					choices: [
						{ id: 'set', label: 'Set' },
						{ id: 'back1', label: 'Back Speed 1' },
						{ id: 'back2', label: 'Back Speed 2' },
						{ id: 'back3', label: 'Back Speed 3' },
						{ id: 'back4', label: 'Back Speed 4' },
						{ id: 'back5', label: 'Back Speed 5' },
						{ id: 'fwd1', label: 'Fwd Speed 1' },
						{ id: 'fwd2', label: 'Fwd Speed 2' },
						{ id: 'fwd3', label: 'Fwd Speed 3' },
						{ id: 'fwd4', label: 'Fwd Speed 4' },
						{ id: 'fwd5', label: 'Fwd Speed 5' },
						{ id: 'stop', label: 'Stop' },
						{ id: 'calibrate-auto', label: 'Auto calibration' },
						{ id: 'calibrate-manual-start', label: 'Manual calibration Start' },
						{ id: 'calibrate-manual-stop', label: 'Manual calibration Stop' },
						{ id: 'calibrate-manual-min', label: 'Manual calibration Set Min Point' },
						{ id: 'calibrate-manual-max', label: 'Manual calibration Set Max Point' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "back1": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"-0.01"}'; break;
					case "back2": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"-0.05"}'; break;
					case "back3": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"-0.1"}'; break;
					case "back4": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"-0.5"}'; break;
					case "back5": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"-1.0"}'; break;

					case "fwd1": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"0.01"}'; break;
					case "fwd2": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"0.05"}'; break;
					case "fwd3": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"0.1"}'; break;
					case "fwd4": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"0.5"}'; break;
					case "fwd5": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"1.0"}'; break;

					case "stop": cmd = '!{"cmd":"motor","param":"focus","value":"move","value2":"0"}'; break;

					case "calibrate-auto": cmd = '!{"cmd":"motor","param":"focus","value":"calibration","value2":"auto"}'; break;
					case "calibrate-manual-start": cmd = '!{"cmd":"motor","param":"focus","value":"calibration","value2":"manual"}'; break;
					case "calibrate-manual-stop": cmd = '!{"cmd":"motor","param":"focus","value":"calibration","value2":"stop"}'; break;
					case "calibrate-manual-min": cmd = '!{"cmd":"motor","param":"focus","value":"calibration","value2":"min"}'; break;
					case "calibrate-manual-max": cmd = '!{"cmd":"motor","param":"focus","value":"calibration","value2":"max"}'; break;
				}
				Network.send(cmd);
			},
		},
		action_ronin_iris: {
			name: 'Ronin IRIS Motor',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'back1',
					choices: [
						{ id: 'set', label: 'Set' },
						{ id: 'back1', label: 'Back Speed 1' },
						{ id: 'back2', label: 'Back Speed 2' },
						{ id: 'back3', label: 'Back Speed 3' },
						{ id: 'back4', label: 'Back Speed 4' },
						{ id: 'back5', label: 'Back Speed 5' },
						{ id: 'fwd1', label: 'Fwd Speed 1' },
						{ id: 'fwd2', label: 'Fwd Speed 2' },
						{ id: 'fwd3', label: 'Fwd Speed 3' },
						{ id: 'fwd4', label: 'Fwd Speed 4' },
						{ id: 'fwd5', label: 'Fwd Speed 5' },
						{ id: 'stop', label: 'Stop' },
						{ id: 'calibrate-auto', label: 'Auto calibration' },
						{ id: 'calibrate-manual-start', label: 'Manual calibration Start' },
						{ id: 'calibrate-manual-stop', label: 'Manual calibration Stop' },
						{ id: 'calibrate-manual-min', label: 'Manual calibration Set Min Point' },
						{ id: 'calibrate-manual-max', label: 'Manual calibration Set Max Point' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "back1": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"-0.01"}'; break;
					case "back2": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"-0.05"}'; break;
					case "back3": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"-0.1"}'; break;
					case "back4": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"-0.5"}'; break;
					case "back5": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"-1.0"}'; break;

					case "fwd1": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"0.01"}'; break;
					case "fwd2": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"0.05"}'; break;
					case "fwd3": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"0.1"}'; break;
					case "fwd4": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"0.5"}'; break;
					case "fwd5": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"1.0"}'; break;

					case "stop": cmd = '!{"cmd":"motor","param":"iris","value":"move","value2":"0"}'; break;

					case "calibrate-auto": cmd = '!{"cmd":"motor","param":"iris","value":"calibration","value2":"auto"}'; break;
					case "calibrate-manual-start": cmd = '!{"cmd":"motor","param":"iris","value":"calibration","value2":"manual"}'; break;
					case "calibrate-manual-stop": cmd = '!{"cmd":"motor","param":"iris","value":"calibration","value2":"stop"}'; break;
					case "calibrate-manual-min": cmd = '!{"cmd":"motor","param":"iris","value":"calibration","value2":"min"}'; break;
					case "calibrate-manual-max": cmd = '!{"cmd":"motor","param":"iris","value":"calibration","value2":"max"}'; break;
				}
				Network.send(cmd);
			},
		},
		action_ronin_zoom: {
			name: 'Ronin Zoom Motor',
			options: [
				{
					id: 'value',
					type: 'dropdown',
					label: 'Mode',
					default: 'back1',
					choices: [
						{ id: 'set', label: 'Set' },
						{ id: 'back1', label: 'Back Speed 1' },
						{ id: 'back2', label: 'Back Speed 2' },
						{ id: 'back3', label: 'Back Speed 3' },
						{ id: 'back4', label: 'Back Speed 4' },
						{ id: 'back5', label: 'Back Speed 5' },
						{ id: 'fwd1', label: 'Fwd Speed 1' },
						{ id: 'fwd2', label: 'Fwd Speed 2' },
						{ id: 'fwd3', label: 'Fwd Speed 3' },
						{ id: 'fwd4', label: 'Fwd Speed 4' },
						{ id: 'fwd5', label: 'Fwd Speed 5' },
						{ id: 'stop', label: 'Stop' },
						{ id: 'calibrate-auto', label: 'Auto calibration' },
						{ id: 'calibrate-manual-start', label: 'Manual calibration Start' },
						{ id: 'calibrate-manual-stop', label: 'Manual calibration Stop' },
						{ id: 'calibrate-manual-min', label: 'Manual calibration Set Min Point' },
						{ id: 'calibrate-manual-max', label: 'Manual calibration Set Max Point' },
					],
				},
			],
			callback: async (event) => {
				switch (event.options.value) {
					case "back1": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"-0.01"}'; break;
					case "back2": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"-0.05"}'; break;
					case "back3": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"-0.1"}'; break;
					case "back4": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"-0.5"}'; break;
					case "back5": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"-1.0"}'; break;

					case "fwd1": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"0.01"}'; break;
					case "fwd2": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"0.05"}'; break;
					case "fwd3": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"0.1"}'; break;
					case "fwd4": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"0.5"}'; break;
					case "fwd5": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"1.0"}'; break;

					case "stop": cmd = '!{"cmd":"motor","param":"zoom","value":"move","value2":"0"}'; break;

					case "calibrate-auto": cmd = '!{"cmd":"motor","param":"zoom","value":"calibration","value2":"auto"}'; break;
					case "calibrate-manual-start": cmd = '!{"cmd":"motor","param":"zoom","value":"calibration","value2":"manual"}'; break;
					case "calibrate-manual-stop": cmd = '!{"cmd":"motor","param":"zoom","value":"calibration","value2":"stop"}'; break;
					case "calibrate-manual-min": cmd = '!{"cmd":"motor","param":"zoom","value":"calibration","value2":"min"}'; break;
					case "calibrate-manual-max": cmd = '!{"cmd":"motor","param":"zoom","value":"calibration","value2":"max"}'; break;
				}
				Network.send(cmd);
			},
		},


		action_ronin_motors_preset_save: {
			name: 'Ronin Motors Preset Save',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'Preset Number', default: 'preset1',
					choices: [
						{ id: 'preset1', label: '1' },
						{ id: 'preset2', label: '2' },
						{ id: 'preset3', label: '3' },
						{ id: 'preset4', label: '4' },
						{ id: 'preset5', label: '5' },
						{ id: 'preset6', label: '6' },
						{ id: 'preset7', label: '7' },
						{ id: 'preset8', label: '8' },
						{ id: 'preset9', label: '9' },
						{ id: 'preset10', label: '10' },
					],
				},
			],
			callback: async (event) => {
				var id = 0;
				switch (event.options.value) {
					case 'preset1': id = 0;  break;
					case 'preset2': id = 1;  break;
					case 'preset3': id = 2;  break;
					case 'preset4': id = 3;  break;
					case 'preset5': id = 4;  break;
					case 'preset6': id = 5;  break;
					case 'preset7': id = 6;  break;
					case 'preset8': id = 7;  break;
					case 'preset9': id = 8;  break;
					case 'preset10': id = 9;  break;
				}
				cmd = '!{"cmd":"motor","param":"preset","value":"save","value2":"' + id + '"}';
				Network.send(cmd);
			},
		},

		action_ronin_motors_preset_set: {
			name: 'Ronin Motors Preset Set',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'Preset Number', default: 'preset1',
					choices: [
						{ id: 'preset1', label: '1' },
						{ id: 'preset2', label: '2' },
						{ id: 'preset3', label: '3' },
						{ id: 'preset4', label: '4' },
						{ id: 'preset5', label: '5' },
						{ id: 'preset6', label: '6' },
						{ id: 'preset7', label: '7' },
						{ id: 'preset8', label: '8' },
						{ id: 'preset9', label: '9' },
						{ id: 'preset10', label: '10' },
					],
				},
			],
			callback: async (event) => {
				var id = 0;
				switch (event.options.value) {
					case 'preset1': id = 0;  break;
					case 'preset2': id = 1;  break;
					case 'preset3': id = 2;  break;
					case 'preset4': id = 3;  break;
					case 'preset5': id = 4;  break;
					case 'preset6': id = 5;  break;
					case 'preset7': id = 6;  break;
					case 'preset8': id = 7;  break;
					case 'preset9': id = 8;  break;
					case 'preset10': id = 9;  break;
				}
				cmd = '!{"cmd":"motor","param":"preset","value":"set","value2":"' + id + '"}';
				Network.send(cmd);
			},
		},


		action_ronin_gimbal_preset_save: {
			name: 'Ronin Gimbal Preset Save',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'Preset Number', default: 'preset1',
					choices: [
						{ id: 'preset1', label: '1' },
						{ id: 'preset2', label: '2' },
						{ id: 'preset3', label: '3' },
						{ id: 'preset4', label: '4' },
						{ id: 'preset5', label: '5' },
						{ id: 'preset6', label: '6' },
						{ id: 'preset7', label: '7' },
						{ id: 'preset8', label: '8' },
						{ id: 'preset9', label: '9' },
						{ id: 'preset10', label: '10' },
					],
				},
			],
			callback: async (event) => {
				var id = 0;
				switch (event.options.value) {
					case 'preset1': id = 0;  break;
					case 'preset2': id = 1;  break;
					case 'preset3': id = 2;  break;
					case 'preset4': id = 3;  break;
					case 'preset5': id = 4;  break;
					case 'preset6': id = 5;  break;
					case 'preset7': id = 6;  break;
					case 'preset8': id = 7;  break;
					case 'preset9': id = 8;  break;
					case 'preset10': id = 9;  break;
				}
				cmd = '!{"cmd":"gimbal","param":"preset","value":"save","value2":"' + id + '"}';
				Network.send(cmd);
			},
		},


		action_ronin_gimbal_preset_set: {
			name: 'Ronin Gimbal Preset Set',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'Preset Number', default: 'preset1',
					choices: [
						{ id: 'preset1', label: '1' },
						{ id: 'preset2', label: '2' },
						{ id: 'preset3', label: '3' },
						{ id: 'preset4', label: '4' },
						{ id: 'preset5', label: '5' },
						{ id: 'preset6', label: '6' },
						{ id: 'preset7', label: '7' },
						{ id: 'preset8', label: '8' },
						{ id: 'preset9', label: '9' },
						{ id: 'preset10', label: '10' },
					],
				},
			],
			callback: async (event) => {
				var id = 0;
				switch (event.options.value) {
					case 'preset1': id = 0;  break;
					case 'preset2': id = 1;  break;
					case 'preset3': id = 2;  break;
					case 'preset4': id = 3;  break;
					case 'preset5': id = 4;  break;
					case 'preset6': id = 5;  break;
					case 'preset7': id = 6;  break;
					case 'preset8': id = 7;  break;
					case 'preset9': id = 8;  break;
					case 'preset10': id = 9;  break;
				}
				cmd = '!{"cmd":"gimbal","param":"preset","value":"set","value2":"' + id + '"}';
				Network.send(cmd);
			},
		},


		action_ronin_gimbal_preset_speed: {
			name: 'Ronin Gimbal Presets Speed',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'Speed', default: 'speed1',
					choices: [
						{ id: 'speed1', label: '1' },
						{ id: 'speed2', label: '2' },
						{ id: 'speed3', label: '3' },
						{ id: 'speed4', label: '4' },
						{ id: 'speed5', label: '5' },
						{ id: 'speed6', label: '6' },
						{ id: 'speed7', label: '7' },
						{ id: 'speed8', label: '8' },
						{ id: 'speed9', label: '9' },
						{ id: 'speed10', label: '10' },
					],
				},
			],
			callback: async (event) => {
				var id = 0;
				switch (event.options.value) {
					case 'speed1': id = 0;  break;
					case 'speed2': id = 1;  break;
					case 'speed3': id = 2;  break;
					case 'speed4': id = 3;  break;
					case 'speed5': id = 4;  break;
					case 'speed6': id = 5;  break;
					case 'speed7': id = 6;  break;
					case 'speed8': id = 7;  break;
					case 'speed9': id = 8;  break;
					case 'speed10': id = 9;  break;
				}
				cmd = '!{"cmd":"gimbal","param":"preset","value":"speed","value2":"' + id + '"}';
				Network.send(cmd);
			},
		},





		action_ronin_gimbal_power_set: {
			name: 'Ronin Gimbal Power Control',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'sleep',
					choices: [
						{ id: 'sleep', label: 'sleep' },
						{ id: 'wakeup', label: 'wakeup' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"power","param":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


		action_ronin_gimbal_calibratiom: {
			name: 'Ronin Gimbal Calibration',
			options: [
				{
					id: 'value', type: 'dropdown', label: 'State', default: 'calibration',
					choices: [
						{ id: 'calibration', label: 'Calibrate' },
					],
				},
			],
			callback: async (event) => {
				cmd = '!{"cmd":"gimbal","param":"' + event.options.value + '"}';
				Network.send(cmd);
			},
		},


	})
}
