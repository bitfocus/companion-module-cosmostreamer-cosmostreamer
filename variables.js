let varList = []

module.exports = function (self) {
	varList = [
		{ variableId: 'cs_state', name: 'cs_state' },
		{ variableId: 'camera_model', name: 'camera_model' },

		{ variableId: 'camera_pan', name: 'camera_pan' },
		{ variableId: 'camera_tilt', name: 'camera_tilt' },
		{ variableId: 'camera_roll', name: 'camera_roll' },
		{ variableId: 'camera_pan_rel', name: 'camera_pan_rel' },
		{ variableId: 'camera_tilt_rel', name: 'camera_tilt_rel' },
		{ variableId: 'camera_roll_rel', name: 'camera_roll_rel' },

		{ variableId: 'camera_focus_type', name: 'camera_focus_type' },
		{ variableId: 'camera_dzoom', name: 'camera_dzoom' },

		{ variableId: '360angle', name: '360angle' },

		{ variableId: 'camera_image_mode', name: 'camera_image_mode' },
		{ variableId: 'camera_ev', name: 'camera_ev' },
		{ variableId: 'camera_ev_set_rotary', name: 'camera_ev_set_rotary' },
		{ variableId: 'camera_iso', name: 'camera_iso' },
		{ variableId: 'camera_iso_set', name: 'camera_iso_set' },
		{ variableId: 'camera_iso_set_rotary', name: 'camera_iso_set_rotary' },
		{ variableId: 'camera_aperture', name: 'camera_aperture' },
		{ variableId: 'camera_shutter', name: 'camera_shutter' },
		{ variableId: 'camera_shutter_set', name: 'camera_shutter_set' },
		{ variableId: 'camera_shutter_set_rotary', name: 'camera_shutter_set_rotary' },
		{ variableId: 'camera_wb', name: 'camera_wb' },
		{ variableId: 'camera_wb_temp', name: 'camera_wb_temp' },
		{ variableId: 'camera_wb_set_rotary', name: 'camera_wb_set_rotary' },
		{ variableId: 'camera_sd_free', name: 'camera_sd_free' },
		{ variableId: 'camera_battery_level', name: 'camera_battery_level' },
		{ variableId: 'goggles_battery_level', name: 'goggles_battery_level' },
		{ variableId: 'rc_battery_level', name: 'rc_battery_level' },



		{ variableId: 'rec_label', name: 'rec_label' },
		{ variableId: 'rec_time', name: 'rec_time' },

		{ variableId: 'onboard_rec_time', name: 'onboard_rec_time' },
		{ variableId: 'srt_time', name: 'srt_time' },
		{ variableId: 'rtsp_time', name: 'rtsp_time' },
		{ variableId: 'hls_time', name: 'hls_time' },
		{ variableId: 'rtmp_time_custom1', name: 'rtmp_time_custom1' },
		{ variableId: 'rtmp_time_custom2', name: 'rtmp_time_custom2' },
		{ variableId: 'rtmp_time_youtube', name: 'rtmp_time_youtube' },
		{ variableId: 'rtmp_time_insta', name: 'rtmp_time_insta' },
		{ variableId: 'rtmp_time_facebook', name: 'rtmp_time_facebook' },
		{ variableId: 'rtmp_time_tiktok', name: 'rtmp_time_tiktok' },

		{ variableId: 'home_distance', name: 'home_distance' },
		{ variableId: 'altitude', name: 'altitude' },
		{ variableId: 'altitude_sonar', name: 'altitude_sonar' },
		{ variableId: 'drone_yaw', name: 'drone_yaw' },
		{ variableId: 'drone_pitch', name: 'drone_pitch' },
		{ variableId: 'drone_roll', name: 'drone_roll' },
		{ variableId: 'drone_hspeed', name: 'drone_hspeed' },
		{ variableId: 'drone_vspeed', name: 'drone_vspeed' },

		{ variableId: 'drone_flight_mode', name: 'drone_flight_mode' },
		{ variableId: 'drone_in_flight', name: 'drone_in_flight' },
		{ variableId: 'drone_in_landing', name: 'drone_in_landing' },
		{ variableId: 'drone_in_rth', name: 'drone_in_rth' },

		{ variableId: 'drone_rssi_video', name: 'drone_rssi_video' },
		{ variableId: 'drone_rssi_rc', name: 'drone_rssi_rc' },

		{ variableId: 'drone_flight_time_estimated', name: 'drone_flight_time_estimated' },

		{ variableId: 'drone_obstacle_cam_id', name: 'drone_obstacle_cam_id' },

		{ variableId: 'mission_name', name: 'mission_name' },
		{ variableId: 'mission_point', name: 'mission_point' },
		{ variableId: 'mission_point_total', name: 'mission_point_total' },
		{ variableId: 'mission_distance', name: 'mission_distance' },
		{ variableId: 'mission_distance_total', name: 'mission_distance_total' },
		{ variableId: 'mission_time', name: 'mission_time' },
		{ variableId: 'mission_time_total', name: 'mission_time_total' },


		{ variableId: 'link_rssi_rx', name: 'link_rssi_rx' },
		{ variableId: 'link_rssi_tx', name: 'link_rssi_tx' },
		{ variableId: 'link_auto_channel', name: 'link_auto_channel' },
		{ variableId: 'link_current_channel', name: 'link_current_channel' },
		{ variableId: 'link_current_channel_freq', name: 'link_current_channel_freq' },

		{ variableId: 'link_tx_ok', name: 'link_tx_ok' },
		{ variableId: 'link_gimbal_ok', name: 'link_gimbal_ok' },
		{ variableId: 'link_camera_ok', name: 'link_camera_ok' },

		{ variableId: 'gimbal_speed_pan', name: 'gimbal_speed_pan' },
		{ variableId: 'gimbal_speed_tilt', name: 'gimbal_speed_tilt' },
		{ variableId: 'gimbal_speed_roll', name: 'gimbal_speed_roll' },

		{ variableId: 'gimbal_smooth_pan', name: 'gimbal_speed_pan' },
		{ variableId: 'gimbal_smooth_tilt', name: 'gimbal_smooth_tilt' },
		{ variableId: 'gimbal_smooth_roll', name: 'gimbal_smooth_roll' },


		{ variableId: 'motor_focus_status', name: 'motor_focus_status' },
		{ variableId: 'motor_focus_percentage', name: 'motor_focus_percentage' },
		{ variableId: 'motor_iris_status', name: 'motor_iris_status' },
		{ variableId: 'motor_iris_percentage', name: 'motor_iris_percentage' },
		{ variableId: 'motor_zoom_status', name: 'motor_zoom_status' },
		{ variableId: 'motor_zoom_percentage', name: 'motor_zoom_percentage' },

	]


	/// Add vars for link channels frequencies and noises
	for (var i = 1; i < 32; i++) {
		let new_item = { variableId: 'link_channel_' + i + '_freq', name: 'link_channel_' + i + '_freq' }
		varList.push(new_item);

		let new_item2 = { variableId: 'link_channel_' + i + '_level', name: 'link_channel_' + i + '_level' }
		varList.push(new_item2);
	}


	self.setVariableDefinitions(varList);
}

module.exports.clear = function(self) {
	self.log('info', 'Clear all variables');

	for (var i in varList) {
		var item_name = varList[i]['variableId'];
		var new_item = {}
		new_item[item_name] = '';
		self.setVariableValues(new_item);
		//self.log('info', 'Clear variable ' + item_name);
	}
}
