exports.getVariables  = function() {

	var variables = [];
		
	variables.push({ name: 'cs_state', label: 'cs_state' });

	variables.push({ name: 'camera_rec_time', label: 'camera_rec_time' });

	variables.push({ name: 'onboard_rec_time', label: 'onboard_rec_time' });
	variables.push({ name: 'rtmp_time', label: 'rtmp_time' });
	variables.push({ name: 'rtsp_time', label: 'rtsp_time' });
	variables.push({ name: 'srt_time', label: 'srt_time' });

	variables.push({ name: 'am_state', label: 'am_state' });
	variables.push({ name: 'am_position', label: 'am_current_position' });
	variables.push({ name: 'am_total', label: 'am_total_positions' });
	variables.push({ name: 'am_nearest', label: 'am_nearest_position' });
	variables.push({ name: 'orientation_lock', label: 'orientation_lock' });
	variables.push({ name: 'gimbal_pan', label: 'gimbal_pan' });
	variables.push({ name: 'gimbal_tilt', label: 'gimbal_tilt' });
	variables.push({ name: 'gimbal_roll', label: 'gimbal_roll' });
	variables.push({ name: 'digital_zoom', label: 'digital_zoom' });
	variables.push({ name: 'camera_image_mode', label: 'camera_image_mode' });
	variables.push({ name: 'camera_shutter', label: 'camera_shutter' });
	variables.push({ name: 'camera_iso', label: 'camera_iso' });
	variables.push({ name: 'camera_ev', label: 'camera_ev' });
	variables.push({ name: 'camera_wb', label: 'camera_wb' });
	variables.push({ name: 'camera_color', label: 'camera_color' });

	variables.push({ name: 'wiral_status', label: 'wiral_status' });
	variables.push({ name: 'wiral_distance', label: 'wiral_distance' });
	variables.push({ name: 'wiral_max_distance', label: 'wiral_max_distance' });
	variables.push({ name: 'wiral_speed', label: 'wiral_speed' });
	variables.push({ name: 'wiral_tictac', label: 'wiral_tictac' });
	variables.push({ name: 'wiral_tictac_counter', label: 'wiral_tictac_counter' });
	variables.push({ name: 'wiral_tictac_tick_time', label: 'wiral_tictac_tick_time' });
	variables.push({ name: 'wiral_tictac_prev_tick_time', label: 'wiral_tictac_prev_tick_time' });
	variables.push({ name: 'wiral_battery_level', label: 'wiral_battery_level' });
	variables.push({ name: 'wiral_last_set_speed', label: 'wiral_last_set_speed' });

	this.setVariable('cs_state', '');

	this.setVariable('camera_rec_time', '');

	this.setVariable('onboard_rec_time', '');
	this.setVariable('rtmp_time', '');
	this.setVariable('rtsp_time', '');
	this.setVariable('srt_time', '');

	this.setVariable('am_state', '');
	this.setVariable('am_position', 0);
	this.setVariable('am_total', 0);
	this.setVariable('am_nearest', 0);
	this.setVariable('orientation_lock', 0);
	this.setVariable('gimbal_pan', 0);
	this.setVariable('gimbal_tilt', 0);
	this.setVariable('gimbal_roll', 0);
	this.setVariable('digital_zoom', '');
	this.setVariable('camera_image_mode', '');

	this.setVariable('camera_shutter', '');
	this.setVariable('camera_iso', '');
	this.setVariable('camera_ev', '');
	this.setVariable('camera_wb', '');
	this.setVariable('camera_color', '');

	this.setVariable('wiral_status', 'not connected');
	this.setVariable('wiral_distance', '');
	this.setVariable('wiral_max_distance', '');
	this.setVariable('wiral_speed', '');
	this.setVariable('wiral_tictac', '');
	this.setVariable('wiral_tictac_counter', '');
	this.setVariable('wiral_tictac_tick_time', '');
	this.setVariable('wiral_tictac_prev_tick_time', '');
	this.setVariable('wiral_battery_level', '');
	this.setVariable('wiral_last_set_speed', '');

	return variables;
}