const { combineRgb } = require('@companion-module/base');

let presets = []

module.exports.initPresets  = function(self) {

    self.log('debug', 'Presets init');

    const ColorWhite = combineRgb(255, 255, 255);
    const ColorBlack = combineRgb(0, 0, 0);
    const ColorRed = combineRgb(125, 5, 5);
    const ColorGreen = combineRgb(0, 127, 0);

    const ColorGroup1 = combineRgb(29, 22, 54);
    const ColorGroup2 = combineRgb(55, 47, 27);
    const ColorGroup3 = combineRgb(13, 28, 38);
    const ColorGroup4 = combineRgb(33, 41, 62);
    const ColorGroup5 = combineRgb(44, 45, 45);
    const ColorGroup6 = combineRgb(15, 20, 26);
    const ColorGroup7 = combineRgb(35, 8, 17);
    const ColorGroup8 = combineRgb(50, 27, 14);
    const ColorGroup9 = combineRgb(52, 18, 52);
    const ColorGroup10 = combineRgb(25, 77, 110);
    const ColorGroup11 = combineRgb(91, 31, 2);
    const ColorGroup12 = combineRgb(24, 11, 52);
    const ColorGroup12_2 = combineRgb(0, 0, 0);
    const ColorGroup13 = combineRgb(31, 60, 77);
    const ColorGroup14 = combineRgb(37, 55, 54);
    const ColorGroup15 = combineRgb(102, 5, 150);
    const ColorGroup16 = combineRgb(41, 15, 54);
    const ColorGroup17 = combineRgb(4, 37, 13);
    const ColorGroup18 = combineRgb(59, 44, 22);
    const ColorGroup19 = combineRgb(122, 79, 61);
    const ColorGroup20 = combineRgb(12, 32, 91);
    const ColorGroup21 = combineRgb(52, 16, 48);
    const ColorGroup22 = combineRgb(35, 12, 32);
    const ColorGroup23 = combineRgb(88, 5, 77);
    const ColorGroup24 = combineRgb(227, 58, 3);
    const ColorGroup25 = combineRgb(76, 76, 76);
    const ColorGroup26 = combineRgb(34, 34, 34);
    const ColorGroup27 = combineRgb(67, 35, 84);
    const ColorGroup28 = combineRgb(11, 42, 36);
    const ColorGroup29 = combineRgb(31, 62, 56);
    const ColorGroup30 = combineRgb(51, 82, 76);
    const ColorGroup31 = combineRgb(51, 82, 76);

    presets['cs_state'] = {
        type: 'button', category: 'Common', name: 'Cosmostreamer connection state',
        style: {
            text: '$(generic-module:cs_state)', color: ColorWhite, bgcolor: ColorBlack, size: '12', alignment: 'center:bottom',
			"png64":"iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAIAAACcZYjaAAAACXBIWXMAAAsTAAALEwEAmpwYAAANC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMi0wN1QxNjo1NzozMCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMjRUMTI6NTI6NTUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMjRUMTI6NTI6NTUrMDM6MDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNDQyNDA0YS0xZDk0LTc4NDktYTI1Ny0yNDlhY2Y5YTMzZDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmU2MGYxMzYtZjAyYy0zZjQwLTg1YzQtOTJjMTNkNzM4YTM2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NDk4N0QyQkZCRTJBRTkxMTkyMDk4RDFCQzUyMTYwMzciIGlsbHVzdHJhdG9yOlN0YXJ0dXBQcm9maWxlPSJQcmludCIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IkY4QUNDNEExMkQxRkZFQkM0MjA4MTkzMzA4RUEyM0ZFIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6SW1hZ2VXaWR0aD0iNTczIiB0aWZmOkltYWdlTGVuZ3RoPSI1NzIiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkV4aWZWZXJzaW9uPSIwMjIxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNzIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI1OCI+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+UHJpbnQ8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNGVkYjA0MC1iY2IyLWM3NGYtOGQzOC0wNDg2Yzk3NDBhNTAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZDMzNmYzOS01ZTY2LWYzNDEtOTA1YS1mODUxMzU3NjkwZTkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo0OTg3RDJCRkJFMkFFOTExOTIwOThEMUJDNTIxNjAzNyIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDIzMDJjMS1mYTNhLWNiNDAtYTAyNS05NjA2YjNmNjZjM2QiIHN0RXZ0OndoZW49IjIwMjEtMTItMTFUMTU6MDE6MjcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTRlZGIwNDAtYmNiMi1jNzRmLThkMzgtMDQ4NmM5NzQwYTUwIiBzdEV2dDp3aGVuPSIyMDIyLTA0LTI0VDEyOjQ2OjAyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUwMzk1NjQzLTc3NmItOTE0Zi04NDc4LTYwN2Yx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",
        },
        steps: [],
        feedbacks: [],
    }


    presets['preset_camera_model'] = {
        type: 'button', category: 'Common camera control', name: 'Camera model',
        style: { text: 'Model\n$(generic-module:camera_model)', color: ColorWhite, bgcolor: ColorBlack, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }


    presets['preset_drone_values'] = {
        type: 'button', category: 'Drone controls', name: 'Distance and altitude',
        style: { text: 'Distance\n$(generic-module:home_distance)\nAltitude\n$(generic-module:altitude)', color: ColorWhite, bgcolor: ColorGroup9, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_values2'] = {
        type: 'button', category: 'Drone controls', name: 'Altitude Sonar',
        style: { text: 'Altitude Sonar\n$(generic-module:altitude_sonar)', color: ColorWhite, bgcolor: ColorGroup9, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_angles'] = {
        type: 'button', category: 'Drone controls', name: 'Drone angles',
        style: { text: 'Drone\nYaw:$(generic-module:drone_yaw)\nPitch:$(generic-module:drone_pitch)\nRoll:$(generic-module:drone_roll)', color: ColorWhite, bgcolor: ColorGroup9, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_speeds'] = {
        type: 'button', category: 'Drone controls', name: 'Drone speeds',
        style: { text: 'Drone\nHor Speed:\n$(generic-module:drone_hspeed)\nVert Speed:\n$(generic-module:drone_vspeed)', color: ColorWhite, bgcolor: ColorGroup9, size: 'auto', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_battery_level'] = {
        type: 'button', category: 'Drone controls', name: 'Drone battery level',
        style: { text: 'Drone Battery\n$(generic-module:camera_battery_level)%', color: ColorWhite, bgcolor: ColorGroup2, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_goggles_battery_level'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Goggles battery level',
        style: { text: 'Goggles Battery\n$(generic-module:goggles_battery_level)%', color: ColorWhite, bgcolor: ColorGroup2, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_rc_battery_level'] = {
        type: 'button', category: 'Drone controls', name: 'RC battery level',
        style: { text: 'RC Battery\n$(generic-module:rc_battery_level)%', color: ColorWhite, bgcolor: ColorGroup2, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_rssi_video'] = {
        type: 'button', category: 'Drone controls', name: 'Drone RSSI Video',
        style: { text: 'Drone Signal\n$(generic-module:drone_rssi_video)%', color: ColorWhite, bgcolor: ColorBlack, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_rssi_video_rc'] = {
        type: 'button', category: 'Drone controls', name: 'Drone RSSI Video/RC',
        style: { text: 'Video Signal\n$(generic-module:drone_rssi_video)%\nRC Signal\n$(generic-module:drone_rssi_rc)%', color: ColorWhite, bgcolor: ColorBlack, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_drone_estimated_flight_time'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Estimated Flight Time',
        style: { text: 'Flight Time Left\n$(generic-module:drone_flight_time_estimated)', color: ColorWhite, bgcolor: ColorGroup8, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }


    presets['preset_drone_flight_mode'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Flight Mode',
        style: { text: 'Flight Mode\n\n$(generic-module:drone_flight_mode)', color: ColorWhite, bgcolor: ColorGroup1, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }


    presets['preset_drone_takeoff'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Take-Off',
        style: { text: 'Drone Take-Off', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "takeoff", }, }, ],
                up: [],
            }, ],
        feedbacks: [ { feedbackId: 'drone_in_flight', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_drone_landing'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Landing',
        style: { text: 'Drone Landing', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "landing", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_in_landing', style: { bgcolor: ColorRed, color: ColorWhite, }, },
        ],
    }
    presets['preset_drone_rth'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Return To Home',
        style: { text: 'Drone Return To Home', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "rth", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_in_rth', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_drone_cancel_landing'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Cancel Landing',
        style: { text: 'Drone Cancel Landing', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "cancel_landing", }, }, ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_cancel_rth'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Cancel RTH',
        style: { text: 'Drone Cancel RTH', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "cancel_rth", }, }, ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_control_enable'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Control Enable',
        style: { text: 'Drone Control Enabled', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "control_enable", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_control_app_enabled', style: { bgcolor: ColorGreen, color: ColorWhite, }, }, ],
    }
    presets['preset_drone_control_disable'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Control Disable',
        style: { text: 'Drone Control Disabled', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "control_disable", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_control_app_disabled', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_drone_control_toggle'] = {
        type: 'button', category: 'Drone controls', name: 'Drone Control Toggle',
        style: { text: 'Drone Control', color: ColorWhite, bgcolor: ColorGroup3, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "control_toggle", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_control_app_enabled', style: { bgcolor: ColorGreen, color: ColorWhite, }, }, ],
    }

    presets['preset_drone_move_fwd'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Move Forward',
        style: { text: 'Drone Move Forward', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "move_fwd", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "move_fwd_back_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_move_back'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Move Back',
        style: { text: 'Drone Move Back', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "move_back", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "move_fwd_back_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_move_left'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Move Left',
        style: { text: 'Drone Move Left', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "move_left", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "move_left_right_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_move_right'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Move Right',
        style: { text: 'Drone Move Right', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "move_right", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "move_left_right_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_move_up'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Move Up',
        style: { text: 'Drone Move Up', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "move_up", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "move_up_down_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_move_down'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Move Down',
        style: { text: 'Drone Move Down', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "move_down", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "move_up_down_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_rotate_left'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Rotate Left',
        style: { text: 'Drone Rotate Left', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "rotate_left", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "rotate_left_right_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_drone_rotate_right'] = {
        type: 'button',
        category: 'Drone controls',
        name: 'Drone Rotate Right',
        style: { text: 'Drone Rotate Right', color: ColorWhite, bgcolor: ColorGroup4, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_control', options: { value: "rotate_right", }, }, ],
                up: [ { actionId: 'action_drone_control', options: { value: "rotate_left_right_stop", }, }, ],
            },
        ],
        feedbacks: [],
    }

    presets['preset_drone_wp_start'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start',
        style: { text: 'Mission Start\n$(generic-module:mission_name)', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoints', options: { value: "start", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_wp_inactive', style: { bgcolor: ColorRed, color: ColorWhite, }, },
        ],
    }
    presets['preset_drone_wp_start_name_1'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start Name',
        style: { text: 'Mission Start\nFlight 1', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoint_start_name', options: { value: "Flight 1", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [
            /*{
                feedbackId: 'drone_wp_inactive',
                style: {
                    bgcolor: ColorRed,
                    color: ColorWhite,
                },
            },*/
        ],
    }
    presets['preset_drone_wp_start_name_2'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start Name',
        style: { text: 'Mission Start\nFlight 2', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoint_start_name', options: { value: "Flight 2", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [
            /*{
                feedbackId: 'drone_wp_inactive',
                style: {
                    bgcolor: ColorRed,
                    color: ColorWhite,
                },
            },*/
        ],
    }
    presets['preset_drone_wp_start_name_3'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start Name',
        style: { text: 'Mission Start\nFlight 3', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoint_start_name', options: { value: "Flight 3", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [
            /*{
                feedbackId: 'drone_wp_inactive',
                style: {
                    bgcolor: ColorRed,
                    color: ColorWhite,
                },
            },*/
        ],
    }


    presets['preset_drone_wp_fast_start_name_1'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start Name',
        style: { text: 'Mission Fast Start\nFlight 1', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoint_start_fast_name', options: { value: "Flight 1", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ ],
    }

    presets['preset_drone_wp_fast_start_name_2'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start Name',
        style: { text: 'Mission Fast Start\nFlight 2', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoint_start_fast_name', options: { value: "Flight 2", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ ],
    }
    presets['preset_drone_wp_fast_start_name_3'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Start Name',
        style: { text: 'Mission Fast Start\nFlight 3', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoint_start_fast_name', options: { value: "Flight 3", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ ],
    }



    presets['preset_drone_wp_stop'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Stop',
        style: { text: 'Mission Stop', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoints', options: { value: "stop", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_wp_active', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_drone_wp_pause'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Pause',
        style: { text: 'Mission Pause', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoints', options: { value: "pause", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_wp_not_paused', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_drone_wp_resume'] = {
        type: 'button',category: 'Drone controls', name: 'Mission Resume',
        style: { text: 'Mission Resume', color: ColorWhite, bgcolor: ColorGroup5, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_waypoints', options: { value: "resume", }, }, ],
                up: [  ],
            },
        ],
        feedbacks: [ { feedbackId: 'drone_wp_paused', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_drone_wp_points'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Points',
        style: { text: 'Mission Point\n$(generic-module:mission_point)', color: ColorWhite, bgcolor: ColorGroup6, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ ],
                up: [  ],
            },
        ],
        feedbacks: [ ],
    }
    presets['preset_drone_wp_distance'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Distance',
        style: { text: 'Mission Distance\n$(generic-module:mission_distance)m/$(generic-module:mission_distance_total)m', color: ColorWhite, bgcolor: ColorGroup6, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ ],
                up: [  ],
            },
        ],
        feedbacks: [ ],
    }
    presets['preset_drone_wp_time'] = {
        type: 'button', category: 'Drone controls', name: 'Mission Time',
        style: { text: 'Mission Time\n$(generic-module:mission_time)\n$(generic-module:mission_time_total)', color: ColorWhite, bgcolor: ColorGroup6, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ ],
                up: [  ],
            },
        ],
        feedbacks: [ ],
    }


    presets['preset_drone_zeropoint_update'] = {
        type: 'button', category: 'Drone controls', name: 'Zero Point Update',
        style: { text: 'Zero Point Update', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_drone_zeropoint_update', options: { value: 'set_current', }, }, ],
                up: [],
            },
        ],
        feedbacks: [ ],
    }

    presets['preset_gimbal_angles'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal angles',
        style: { text: 'Pan:$(generic-module:camera_pan)\nTilt:$(generic-module:camera_tilt)\nRoll:$(generic-module:camera_roll)\n', color: ColorWhite, bgcolor: ColorBlack, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }
    presets['preset_gimbal_angles_relative'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal relative angles',
        style: { text: 'Pan:$(generic-module:camera_pan_rel)\nTilt:$(generic-module:camera_tilt_rel)\nRoll:$(generic-module:camera_roll_rel)\n', color: ColorWhite, bgcolor: ColorBlack, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }



    presets['preset_camera_battery_level'] = {
        type: 'button', category: 'Common camera control', name: 'Camera battery level',
        style: { text: 'Camera battery\n$(generic-module:camera_battery_level)%', color: ColorWhite, bgcolor: ColorGroup2, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }


    presets['preset_camera_sd_free'] = {
        type: 'button', category: 'Common camera control', name: 'SD free',
        style: { text: 'SD free\n$(generic-module:camera_sd_free) Gb', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }


    presets['preset_camera_mode_video'] = {
        type: 'button', category: 'Common camera control', name: 'Camera mode: video',
        style: { text: 'Video', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_mode', options: { value: "video", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_mode_video', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }

    presets['preset_camera_mode_photo'] = {
        type: 'button', category: 'Common camera control', name: 'Camera mode: photo',
        style: { text: 'Photo', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_mode', options: { value: "photo", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_mode_photo', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }

    presets['preset_lense_mode_single'] = {
        type: 'button', category: 'Common camera control', name: 'Lense mode: single',
        style: { text: 'Lense Mode Single', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_lense_mode', options: { value: "single", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'lense_mode_single', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_lense_mode_360'] = {
        type: 'button', category: 'Common camera control', name: 'Lense mode: 360',
        style: { text: 'Lense Mode 360', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_lense_mode', options: { value: "360", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'lense_mode_360', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }


    presets['preset_camera_shot'] = {
        type: 'button', category: 'Common camera control', name: 'Camera make a shot',
        style: { text: 'Shot', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_shot', options: { value: "", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ ],
    }

    presets['preset_camera_rec_toggle'] = {
        type: 'button', category: 'Common camera control', name: 'Camera rec start/stop',
        style: { text: 'REC\n$(generic-module:rec_label)', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_rec', options: { value: "toggle", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_rec_active', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_camera_rec_start'] = {
        type: 'button', category: 'Common camera control', name: 'Camera rec start',
        style: { text: 'Rec start    ', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_rec', options: { value: "start", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_rec_active', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_camera_rec_stop'] = {
        type: 'button', category: 'Common camera control', name: 'Camera rec stop',
        style: { text: 'Rec stop', color: ColorWhite, bgcolor: ColorGroup14, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_rec', options: { value: "stop", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_rec_active', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }

    presets['preset_image_mode_next'] = {
        type: 'button', category: 'Common camera control', name: 'Image mode next',
        style: { text: 'Image mode next\n$(generic-module:camera_image_mode)', color: ColorWhite, bgcolor: ColorGroup15, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_image_mode', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_image_mode_prev'] = {
        type: 'button', category: 'Common camera control', name: 'Image mode prev',
        style: { text: 'Image mode prev\n$(generic-module:camera_image_mode)', color: ColorWhite, bgcolor: ColorGroup15, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_image_mode', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_image_mode_auto'] = {
        type: 'button', category: 'Common camera control', name: 'Image mode: auto',
        style: { text: 'Image mode\nAuto', color: ColorWhite, bgcolor: ColorGroup15, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_image_mode', options: { value: "auto", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'image_mode_auto', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }

    presets['preset_image_mode_manual'] = {
        type: 'button', category: 'Common camera control', name: 'Image mode: manual',
        style: { text: 'Image mode\nManual', color: ColorWhite, bgcolor: ColorGroup15, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_image_mode', options: { value: "manual", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'image_mode_manual', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }

    presets['preset_image_mode_shutter'] = {
        type: 'button', category: 'Common camera control', name: 'Image mode: shutter',
        style: { text: 'Image mode\nShutter', color: ColorWhite, bgcolor: ColorGroup15, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_image_mode', options: { value: "shutter", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'image_mode_shutter', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }


    presets['preset_ev_0'] = {
        type: 'button', category: 'Common camera control', name: 'EV: 0',
        style: { text: 'EV 0', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_ev', options: { value: "0", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_ev_next'] = {
        type: 'button', category: 'Common camera control', name: 'EV: next',
        style: { text: 'EV\nNext\n$(generic-module:camera_ev)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_ev', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_ev_prev'] = {
        type: 'button', category: 'Common camera control', name: 'EV: prev',
        style: { text: 'EV\nPrev\n$(generic-module:camera_ev)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_ev', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_ev_rotary'] = {
        type: 'button', category: 'Common camera control', name: 'Set EV Rotary',
        style: { text: 'Set EV\n$(generic-module:camera_ev_set_rotary)\n($(generic-module:camera_ev))', color: ColorWhite, bgcolor: ColorGroup16, rotary:true, size: '14', alignment: 'center:center', },
        steps: [
            {
                rotate_left: [ { actionId: 'action_ev', options: { value: "rotary_next", }, }, ],
                rotate_right: [ { actionId: 'action_ev', options: { value: "rotary_next", }, }, ],
                down: [ { actionId: 'action_ev', options: { value: "rotary_set", }, }, ],
                up: [],
            },
        ],
    }


    presets['preset_iso_auto'] = {
        type: 'button', category: 'Common camera control', name: 'ISO: auto',
        style: { text: 'ISO auto', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_iso', options: { value: "auto", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_iso_next'] = {
        type: 'button', category: 'Common camera control', name: 'ISO: next',
        style: { text: 'ISO\nNext\n$(generic-module:camera_iso_set)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_iso', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_iso_prev'] = {
        type: 'button', category: 'Common camera control', name: 'ISO: prev',
        style: { text: 'ISO\nPrev\n$(generic-module:camera_iso_set)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_iso', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_iso_rotary'] = {
        type: 'button', category: 'Common camera control', name: 'Set ISO Rotary',
        style: { text: 'Set ISO\n$(generic-module:camera_iso_set_rotary)\n($(generic-module:camera_iso_set))', color: ColorWhite, bgcolor: ColorGroup16, rotary:true, size: '14', alignment: 'center:center', },
        steps: [
            {
                rotate_left: [ { actionId: 'action_iso', options: { value: "rotary_next", }, }, ],
                rotate_right: [ { actionId: 'action_iso', options: { value: "rotary_next", }, }, ],
                down: [ { actionId: 'action_iso', options: { value: "rotary_set", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_aperture_next'] = {
        type: 'button', category: 'Common camera control', name: 'Aperture: next',
        style: { text: 'Aperture\nNext\n$(generic-module:camera_aperture)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_aperture', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_aperture_prev'] = {
        type: 'button', category: 'Common camera control', name: 'Aperture: prev',
        style: { text: 'Aperture\nPrev\n$(generic-module:camera_aperture)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_aperture', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_shutter_default'] = {
        type: 'button', category: 'Common camera control', name: 'Shutter: 1/60',
        style: { text: 'Shutter 1/60', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_shutter', options: { value: "1/60", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_shutter_next'] = {
        type: 'button', category: 'Common camera control', name: 'Shutter: next',
        style: { text: 'Shutter\nNext\n$(generic-module:camera_shutter_set)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_shutter', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_shutter_prev'] = {
        type: 'button', category: 'Common camera control', name: 'Shutter: prev',
        style: { text: 'Shutter\nPrev\n$(generic-module:camera_shutter_set)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_shutter', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_shutter_rotary'] = {
        type: 'button', category: 'Common camera control', name: 'Set Shutter Rotary',
        style: { text: 'Set Shutter\n$(generic-module:camera_shutter_set_rotary)\n($(generic-module:camera_shutter_set))', color: ColorWhite, bgcolor: ColorGroup16, rotary:true, size: '14', alignment: 'center:center', },
        steps: [
            {
                rotate_left: [ { actionId: 'action_shutter', options: { value: "rotary_next", }, }, ],
                rotate_right: [ { actionId: 'action_shutter', options: { value: "rotary_next", }, }, ],
                down: [ { actionId: 'action_shutter', options: { value: "rotary_set", }, }, ],
                up: [],
            },
        ],
    }


    presets['preset_wb_default'] = {
        type: 'button', category: 'Common camera control', name: 'WB: auto',
        style: { text: 'WB auto \n$(generic-module:camera_wb_temp)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_wb', options: { value: "auto", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_wb_rotary'] = {
        type: 'button', category: 'Common camera control', name: 'Set WB Rotary',
        style: { text: 'Set WB\n$(generic-module:camera_wb_set_rotary)\n($(generic-module:camera_wb_temp))', color: ColorWhite, bgcolor: ColorGroup16, rotary:true, size: '14', alignment: 'center:center', },
        steps: [
            {
                rotate_left: [ { actionId: 'action_wb', options: { value: "rotary_next", }, }, ],
                rotate_right: [ { actionId: 'action_wb', options: { value: "rotary_next", }, }, ],
                down: [ { actionId: 'action_wb', options: { value: "rotary_set", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_focus_mf'] = {
        type: 'button', category: 'Common camera control', name: 'Focus: MF',
        style: { text: 'Focus\nMF', color: ColorWhite, bgcolor: ColorGroup17, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_focus', options: { value: "mf", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'focus_type_mf', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_focus_afc'] = {
        type: 'button', category: 'Common camera control', name: 'Focus: AFC',
        style: { text: 'Focus\nAFC', color: ColorWhite, bgcolor: ColorGroup17, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_focus', options: { value: "afc", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'focus_type_afc', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_focus_afs'] = {
        type: 'button', category: 'Common camera control', name: 'Focus: AFS',
        style: { text: 'Focus\nAFS', color: ColorWhite, bgcolor: ColorGroup17, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_focus', options: { value: "afs", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'focus_type_afs', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }



    presets['preset_dzoom_in'] = {
        type: 'button', category: 'Common camera control', name: 'Digital Zoom In',
        style: { text: 'Digital Zoom In\n$(generic-module:camera_dzoom)', color: ColorWhite, bgcolor: ColorGroup18, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_dzoom', options: { value: "in", }, }, ],
                up: [ { actionId: 'action_dzoom', options: { value: "stop", }, }, ],
            },
        ],
    }
    presets['preset_dzoom_out'] = {
        type: 'button', category: 'Common camera control', name: 'Digital Zoom Out',
        style: { text: 'Digital Zoom Out\n$(generic-module:camera_dzoom)', color: ColorWhite, bgcolor: ColorGroup18, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_dzoom', options: { value: "out", }, }, ],
                up: [ { actionId: 'action_dzoom', options: { value: "stop", }, }, ],
            },
        ],
    }
    presets['preset_dzoom_1x'] = {
        type: 'button', category: 'Common camera control', name: 'Digital Zoom 1x',
        style: { text: 'Digital Zoom 1x', color: ColorWhite, bgcolor: ColorGroup18, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_dzoom', options: { value: "1x", }, }, ], }, ],
    }


    presets['preset_360_angle_increase'] = {
        type: 'button', category: 'Common camera control', name: 'Sphere Angle Increase',
        style: { text: 'Sphere Angle Increase\n($(generic-module:360angle))', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_view_angle', options: { value: "inc", }, }, ],
                up: [ { actionId: 'action_camera_view_angle', options: { value: "stop", }, }, ],
            },
        ],
    }
    presets['preset_360_angle_decrease'] = {
        type: 'button', category: 'Common camera control', name: 'Sphere Angle Decrease',
        style: { text: 'Sphere Angle Decrease\n($(generic-module:360angle))', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_view_angle', options: { value: "dec", }, }, ],
                up: [ { actionId: 'action_camera_view_angle', options: { value: "stop", }, }, ],
            },
        ],
    }


    presets['preset_360_angle_104'] = {
        type: 'button', category: 'Common camera control', name: 'Sphere Angle 104',
        style: { text: 'Sphere angle 104\n($(generic-module:360angle))', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_view_angle', options: { value: "104", }, }, ],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_angle360_104', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_360_angle_134'] = {
        type: 'button', category: 'Common camera control', name: 'Sphere Angle 134',
        style: { text: 'Sphere angle 134\n($(generic-module:360angle))', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_view_angle', options: { value: "134", }, }, ],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_angle360_134', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_360_angle_272'] = {
        type: 'button', category: 'Common camera control', name: 'Sphere Angle 272',
        style: { text: 'Sphere angle 272\n($(generic-module:360angle))', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_camera_view_angle', options: { value: "272", }, }, ],
            },
        ],
        feedbacks: [ { feedbackId: 'camera_angle360_272', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }



    presets['preset_gimbal_lock_toggle'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal Lock Toggle',
        style: { text: 'Gimbal Lock Toggle', color: ColorWhite, bgcolor: ColorGroup27, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_orientation_lock', options: { value: "toggle", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'feedback_gimbal_orientation_lock', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_gimbal_lock'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal Lock',
        style: { text: 'Gimbal Lock', color: ColorWhite, bgcolor: ColorGroup27, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_orientation_lock', options: { value: "lock", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'feedback_gimbal_orientation_lock', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_gimbal_unlock'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal Unlock',
        style: { text: 'Gimbal Unlock', color: ColorWhite, bgcolor: ColorGroup27, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_orientation_lock', options: { value: "unlock", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'feedback_gimbal_orientation_unlock', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }


    presets['preset_gimbal1'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal center',
        style: { text: 'Gimbal Center', color: ColorWhite, bgcolor: ColorGroup11, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal', options: { value: "center", }, }, ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal2'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal selfie',
        style: { text: 'Gimbal selfie', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal', options: { value: "selfie", }, }, ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal3'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal stab',
        style: { text: 'Gimbal stab', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal', options: { value: "stable", }, }, ],
                up: [],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal4'] = {
        type: 'button', category: 'Gimbal controls', name: 'Gimbal FPV',
        style: { text: 'Gimbal FPV', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal', options: { value: "fpv", }, }, ],
                up: [],
            },
        ],
        feedbacks: [],
    }


    presets['preset_gimbal5'] = {
        type: 'button', category: 'Gimbal controls', name: 'Pan left',
        style: { text: 'Pan left\n$(generic-module:camera_pan_rel)', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_preset_speed', options: { value: "speed3", }, }, { actionId: 'action_gimbal', options: { value: "left", }, }, ],
                up: [ { actionId: 'action_gimbal', options: { value: "left-stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal6'] = {
        type: 'button', category: 'Gimbal controls', name: 'Pan right',
        style: { text: 'Pan right\n$(generic-module:camera_pan_rel)', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_preset_speed', options: { value: "speed3", }, }, { actionId: 'action_gimbal', options: { value: "right", }, }, ],
                up: [ { actionId: 'action_gimbal', options: { value: "right-stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal7'] = {
        type: 'button', category: 'Gimbal controls', name: 'Tilt up',
        style: { text: 'Tilt up\n$(generic-module:camera_tilt_rel)', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_preset_speed', options: { value: "speed3", }, }, { actionId: 'action_gimbal', options: { value: "up", }, }, ],
                up: [ { actionId: 'action_gimbal', options: { value: "up-stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal8'] = {
        type: 'button', category: 'Gimbal controls', name: 'Tilt down',
        style: { text: 'Tilt down\n$(generic-module:camera_tilt_rel)',color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_preset_speed', options: { value: "speed3", }, }, { actionId: 'action_gimbal', options: { value: "down", }, },],
                up: [ { actionId: 'action_gimbal', options: { value: "down-stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal9'] = {
        type: 'button', category: 'Gimbal controls', name: 'Roll CW',
        style: { text: 'Roll CW\n$(generic-module:camera_roll_rel)', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_preset_speed', options: { value: "speed3", }, }, { actionId: 'action_gimbal', options: { value: "roll-cw", }, }, ],
                up: [ { actionId: 'action_gimbal', options: { value: "roll-cw-stop", }, }, ],
            },
        ],
        feedbacks: [],
    }
    presets['preset_gimbal10'] = {
        type: 'button', category: 'Gimbal controls', name: 'Roll CCW',
        style: { text: 'Roll CCW\n$(generic-module:camera_roll_rel)', color: ColorWhite, bgcolor: ColorGroup10, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_preset_speed', options: { value: "speed3", }, }, { actionId: 'action_gimbal', options: { value: "roll-ccw", }, }, ],
                up: [ { actionId: 'action_gimbal', options: { value: "roll-ccw-stop", }, },],
            },
        ],
        feedbacks: [],
    }



    presets['preset_onboard_rec'] = {
        type: 'button', category: 'Streaming', name: 'Onboard Recording',
        style: { text: 'Onboard Recording\n$(generic-module:onboard_rec_time)', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_onboard_rec', options: { value: "toggle", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'onboard_rec', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }

    presets['preset_video_pause'] = {
        type: 'button', category: 'Streaming', name: 'Video Pause',
        style: { text: 'Video Pause', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_video_pause', options: { value: "toggle", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'video_paused', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }

    presets['preset_stream_udp'] = {
        type: 'button', category: 'Streaming', name: 'Raw UDP',
        style: { text: 'Raw UDP', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "udp", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_udp', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_rtp'] = {
        type: 'button', category: 'Streaming', name: 'RTP',
        style: { text: 'RTP', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtp", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_rtp', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_mpegts'] = {
        type: 'button', category: 'Streaming', name: 'MPEG-TS',
        style: { text: 'MPEG-TS', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "mpegts", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_mpegts', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_hls'] = {
        type: 'button', category: 'Streaming', name: 'HLS',
        style: { text: 'HLS\n$(generic-module:hls_time)', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "hls", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_hls', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_srt'] = {
        type: 'button', category: 'Streaming', name: 'SRT',
        style: { text: 'SRT', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "srt", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_srt', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_rtsp'] = {
        type: 'button', category: 'Streaming', name: 'RTSP',
        style: { text: 'RTSP', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtsp", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_rtsp', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_rtsp_client'] = {
        type: 'button', category: 'Streaming', name: 'RTSP Client',
        style: { text: 'RTSP Client', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtsp-client", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_rtsp_client', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_ndi'] = {
        type: 'button', category: 'Streaming', name: 'NDI',
        style: { text: 'NDI', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "ndi", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_ndi', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_ndihx'] = {
        type: 'button', category: 'Streaming', name: 'NDI HX',
        style: { text: 'NDI HX', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "ndihx", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_ndihx', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_v4l2'] = {
        type: 'button', category: 'Streaming', name: 'V4L2',
        style: { text: 'V4L2', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "v4l2", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_v4l2', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }
    presets['preset_stream_dvb4'] = {
        type: 'button', category: 'Streaming', name: 'DVB-T',
        style: { text: 'DVB-T', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "dvbt", }, }, ], up: [], }, ],
        feedbacks: [ { feedbackId: 'stream_state_dvbt', style: { bgcolor: ColorRed, color: ColorWhite, }, },],
    }


    presets['preset_stream_rtmp_custom1'] = {
        type: 'button', category: 'Streaming', name: 'RTMP Custom1',
        style: { text: 'RTMP Custom1\n$(generic-module:rtmp_time_custom1)', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center',},
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtmp_custom1", }, } ], up: [], },],
        feedbacks: [ { feedbackId: 'stream_state_rtmp_custom1', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_stream_rtmp_custom2'] = {
        type: 'button', category: 'Streaming', name: 'RTMP Custom2',
        style: { text: 'RTMP Custom2\n$(generic-module:rtmp_time_custom2)', color: ColorWhite, bgcolor: ColorGroup12, size: '13', alignment: 'center:center',},
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtmp_custom2", }, } ], up: [], },],
        feedbacks: [ { feedbackId: 'stream_state_rtmp_custom2', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_stream_rtmp_youtube'] = {
        type: 'button', category: 'Streaming', name: 'RTMP Youtube',
        style: { text: '$(generic-module:rtmp_time_youtube)', color: ColorWhite, bgcolor: ColorGroup12_2, size: '13', alignment: 'center:bottom','png64':'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4N2ZjLCAyMDI1LzAzLzA2LTIwOjUwOjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjYuNiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDUtMTJUMDc6MDQ6MTMrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA1LTEyVDA3OjA3OjQ2KzA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTA1LTEyVDA3OjA3OjQ2KzA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZDY3YjZjNy03NDQyLTQxZTktYjJlOS02MmNmYTY4YzA4NTMiIHhtcE1NOkRvY3VtZW50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'},
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtmp_youtube", }, } ], up: [], },],
        feedbacks: [ { feedbackId: 'stream_state_rtmp_youtube', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_stream_rtmp_insta'] = {
        type: 'button', category: 'Streaming', name: 'RTMP Instagram',
        style: { text: '$(generic-module:rtmp_time_insta)', color: ColorWhite, bgcolor: ColorGroup12_2, size: '13', alignment: 'center:bottom','png64':'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'},
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtmp_insta", }, } ], up: [], },],
        feedbacks: [ { feedbackId: 'stream_state_rtmp_insta', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_stream_rtmp_facebook'] = {
        type: 'button', category: 'Streaming', name: 'RTMP Facebook',
        style: { text: '$(generic-module:rtmp_time_facebook)', color: ColorWhite, bgcolor: ColorGroup12_2, size: '13', alignment: 'center:bottom','png64':'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3h5VGjerLSYETa5QW5Btex2tK6RdZomVp0e/kQVZU/9tLzc01VwREIt7jtKiYcbG5havOXxwZwH6oYfub21ubuFDrbWkh4phkYDilbhLFY3vTQkWBa26H7+9TwazssUNXcwZzdY7aOJQ5GQhnQNM026zCGqrVXLx0qW5XGxugA7u211OKt+s4my1/tL2cl2kxpOpMqqz3cxISYaX0cm2j6nxNCDL7Emmvz17ttNpc+7s+Z3lQV/6yhODXncXRkhbdBMp1Clznq5uenidsu1pc3GmpdxkmzmC80xxjBhIij/UTUnFWd1diRbuQ0W73drZWuztb737+c3BYOL9jO5D/WA10dO0Na7WiWatuu5VbX9OsXngqd2wBiapCAJYQNBEQ2ZilcCVK+vcddcdF+eZ79wAveOB13y+W2Znq1D3L2bIKrU4RSKNbJMdNG0uR6aANc8/17qSdvJbIoOWfjO2d8SAYFOrlViOjEdje/C+O742z+/MDVC/33367ttXvnR5bUQmriGAjYukWCs6BauORyIzAbQZehVoNxox5iRgZm5LiatxKVJV7xAGwzEri50X9+/d9bl55js3QBtbY97/7td9fN9ydvr85S1y55r03ATGbWl4ekzb0zPXw1XnX37IzD0zlphSOS/5/jwTgjcuXLjM297y2t8djicn5pnv/PuDDFplcfwXPvyDH1rsuhdPra6l3fXToFz/XwbUZu8jCWg2VoIExVna8K01n5liMG391CenJUMd65IkCao4DclqY1wSiRr15fUB5793kY/8zDt/76G3veGvbrvlwFzz/W/9r4b3gXareOxXfvbt73v0i09//NvPrb4fEXrdFmVRoOajFhPASVQeq6qizFsggg8ekgaEwrgaIgLlLMkVmQnaqQVocYdHq93G5S3yooge5lzcQoMQTJlMJgyGQ/xkzP49SyduOdj77Yc/+K5P3nL4AMPReOcBgihN7N/Vf+qe2/c+/MbXrfzIU0+feejUqa1DG5fXncvMgg/iMixowJlIu1OyubZO8BNptUrM0PF4LGXuZN/eBanGW/zxX3yGN73hThGXybPHThg20b3Ly0zGJmsbV+h3S1vfGLJ66qzoaGQbOqLyEwqXkTtn40klIuIWl9rZoZtXLr3utQe+fs+RW7/w2X/66un1jQHD0ZhJNdf2oPn/Her/2/j+qeb/R8erAN1gvArQDcarAN1gvArQDcarAN1gvArQDcZ/ASBy8oQRFqb/AAAAAElFTkSuQmCC'},
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtmp_facebook", }, } ], up: [], },],
        feedbacks: [ { feedbackId: 'stream_state_rtmp_facebook', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }
    presets['preset_stream_rtmp_tiktok'] = {
        type: 'button', category: 'Streaming', name: 'RTMP TikTok',
        style: { text: '$(generic-module:rtmp_time_tiktok)', color: ColorWhite, bgcolor: ColorGroup12_2, size: '13', alignment: 'center:bottom','png64':'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'},
        steps: [ { down: [ { actionId: 'action_streaming', options: { value: "rtmp_tiktok", }, } ], up: [], },],
        feedbacks: [ { feedbackId: 'stream_state_rtmp_tiktok', style: { bgcolor: ColorRed, color: ColorWhite, }, }, ],
    }






    /// Add link presets

    presets['preset_sdr_iso_next'] = {
        type: 'button', category: 'DJI SDR controls', name: 'ISO: next',
        style: { text: 'ISO\nNext\n$(generic-module:camera_iso)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_iso', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_sdr_iso_prev'] = {
        type: 'button', category: 'DJI SDR controls', name: 'ISO: next',
        style: { text: 'ISO\nPrev\n$(generic-module:camera_iso)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_iso', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_sdr_aperture_next'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Aperture: next',
        style: { text: 'Aperture\nNext\n$(generic-module:camera_aperture)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_aperture', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_sdr_aperture_prev'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Aperture: next',
        style: { text: 'Aperture\nPrev\n$(generic-module:camera_aperture)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_aperture', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }

    presets['preset_sdr_shutter_next'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Shutter: next',
        style: { text: 'Shutter\nNext\n$(generic-module:camera_shutter)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_shutter', options: { value: "next", }, }, ],
                up: [],
            },
        ],
    }
    presets['preset_sdr_shutter_prev'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Shutter: next',
        style: { text: 'Shutter\nPrev\n$(generic-module:camera_shutter)', color: ColorWhite, bgcolor: ColorGroup16, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_shutter', options: { value: "prev", }, }, ],
                up: [],
            },
        ],
    }


    presets['preset_menu_navigation_menu'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Menu',
        style: { text: 'Menu', color: ColorWhite, bgcolor: ColorGroup13, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_menu_navigation', options: { value: "menu-press", }, }, ],
                up: [ { actionId: 'action_menu_navigation', options: { value: "menu-release", }, },],
            },
        ],
    }
    presets['preset_menu_navigation_ok'] = {
        type: 'button', category: 'DJI SDR controls', name: 'OK',
        style: { text: 'OK', color: ColorWhite, bgcolor: ColorGroup13, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_menu_navigation', options: { value: "ok-press", }, }, ],
                up: [ { actionId: 'action_menu_navigation', options: { value: "ok-release", }, }, ],
            },
        ],
    }
    presets['preset_menu_navigation_up'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Up',
        style: { text: 'Up', color: ColorWhite, bgcolor: ColorGroup13, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_menu_navigation', options: { value: "up-press", }, }, ],
                up: [ { actionId: 'action_menu_navigation', options: { value: "up-release", }, }, ],
            },
        ],
    }
    presets['preset_menu_navigation_down'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Down',
        style: {text: 'Down', color: ColorWhite, bgcolor: ColorGroup13, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_menu_navigation', options: { value: "down-press", }, }, ],
                up: [ { actionId: 'action_menu_navigation', options: { value: "down-release", }, }, ],
            },
        ],
    }
    presets['preset_menu_navigation_left'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Left',
        style: { text: 'Left', color: ColorWhite, bgcolor: ColorGroup13, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_menu_navigation', options: { value: "left-press", }, }, ],
                up: [ { actionId: 'action_menu_navigation', options: { value: "left-release", }, }, ],
            },
        ],
    }
    presets['preset_menu_navigation_right'] = {
        type: 'button', category: 'DJI SDR controls', name: 'Right',
        style: { text: 'Right', color: ColorWhite, bgcolor: ColorGroup13, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_menu_navigation', options: { value: "right-press", }, }, ],
                up: [ { actionId: 'action_menu_navigation', options: { value: "right-release", }, }, ],
            },
        ],
    }



    presets['preset_link_rssi'] = {
        type: 'button', category: 'DJI SDR controls',  name: 'Link RSSI',
        style: { text: 'RSSI: $(generic-module:link_rssi_rx)%\nCH $(generic-module:link_current_channel)', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ /*{ actionId: 'action_link_channel', options: { value: "auto", }, },*/ ], }, ],
        /*feedbacks: [ { feedbackId: 'link_rssi_color', style: { bgcolor: ColorGreen, color: ColorWhite, }, }, ],*/
    }
    presets['preset_link_auto_ch'] = {
        type: 'button', category: 'DJI SDR controls',  name: 'Link set channel',
        style: { text: 'Channel\nAuto ($(generic-module:link_current_channel)) $(generic-module:link_current_channel_freq)MHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel', options: { value: "auto", }, }, ], }, ],
        feedbacks: [ { feedbackId: 'link_channel_auto', style: { bgcolor: ColorGreen, color: ColorWhite, }, }, ],
    }
    for (i = 1; i < 32; i++) {
        presets['preset_link_ch_' + i] = {
            type: 'button', category: 'DJI SDR controls',  name: 'Link set channel',
            style: { text: 'CH ' + i + '\n$(generic-module:link_channel_' + i + '_freq)MHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
            steps: [ { down: [ { actionId: 'action_link_channel', options: { value: i , }, }, ], }, ],
            feedbacks: [ { feedbackId: 'link_channel_' + i, style: { bgcolor: ColorGreen, color: ColorWhite, }, }, ],
        }
        presets['preset_link_ch_' + i + '_noise'] = {
            type: 'button', category: 'DJI SDR controls',  name: 'Link channel noise',
            style: { text: 'CH ' + i + '\n $(generic-module:link_channel_' + i + '_level)%', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
            steps: [ { down: [ { actionId: 'action_link_channel', options: { value: i , }, }, ], }, ],
            feedbacks: [ { feedbackId: 'link_channel_' + i, style: { bgcolor: ColorGreen, color: ColorWhite, }, }, ],
        }
    }

    presets['preset_link_bind'] = {
        type: 'button', category: 'Drone controls',  name: 'Binding start',
        style: { text: 'Binding start', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_bind', options: { value: "auto", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_bind_cancel'] = {
        type: 'button', category: 'Drone controls',  name: 'Binding cancel',
        style: { text: 'Binding cancel', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_cancel_bind', options: { value: "auto", }, }, ], }, ],
        feedbacks: [ ],
    }

    presets['preset_link_freq_band_dualband'] = {
        type: 'button', category: 'Drone controls',  name: 'Band Dualband',
        style: { text: 'Band\nDualband', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_freq_band', options: { value: "dualband", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_freq_band_24'] = {
        type: 'button', category: 'Drone controls',  name: 'Band 2.4 GHz',
        style: { text: 'Band\n2.4 GHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_freq_band', options: { value: "2.4", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_freq_band_58'] = {
        type: 'button', category: 'Drone controls',  name: 'Band 5.8 GHz',
        style: { text: 'Band\n5.8 GHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_freq_band', options: { value: "5.8", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_channel_mode_auto'] = {
        type: 'button', category: 'Drone controls',  name: 'Channel Auto',
        style: { text: 'Channel Auto', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel_mode', options: { value: "auto", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_channel_mode_manual'] = {
        type: 'button', category: 'Drone controls',  name: 'Channel Manual',
        style: { text: 'Channel Manual', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel_mode', options: { value: "manual", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_channel_bandwidth_10'] = {
        type: 'button', category: 'Drone controls',  name: 'Channel Bandwidth 10 MHz',
        style: { text: 'Channel Bandwidth 10 MHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel_bandwidth', options: { value: "10", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_channel_bandwidth_20'] = {
        type: 'button', category: 'Drone controls',  name: 'Channel Bandwidth 20 MHz',
        style: { text: 'Channel Bandwidth 20 MHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel_bandwidth', options: { value: "20", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_channel_bandwidth_40'] = {
        type: 'button', category: 'Drone controls',  name: 'Channel Bandwidth 40 MHz',
        style: { text: 'Channel Bandwidth 40 MHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel_bandwidth', options: { value: "40", }, }, ], }, ],
        feedbacks: [ ],
    }
    presets['preset_link_channel_bandwidth_60'] = {
        type: 'button', category: 'Drone controls',  name: 'Channel Bandwidth 60 MHz',
        style: { text: 'Channel Bandwidth 60 MHz', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'center:center', },
        steps: [ { down: [ { actionId: 'action_link_channel_bandwidth', options: { value: "60", }, }, ], }, ],
        feedbacks: [ ],
    }



    presets['preset_link_components'] = {
        type: 'button', category: 'DJI SDR controls',  name: 'Link Components Status',
        style: { text: 'TX: $(generic-module:link_tx_ok)\nGmb: $(generic-module:link_gimbal_ok)\nCam: $(generic-module:link_camera_ok)', color: ColorWhite, bgcolor: ColorBlack, size: '14', alignment: 'left:center', },
        steps: [ { down: [ /*{ actionId: 'action_link_channel', options: { value: "auto", }, },*/ ], }, ],
        feedbacks: [ ],
    }


    presets['preset_obstacle_cam_next'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Next',
        style: { text: 'Obstacle\nCamera\nNext', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "next", }, },], up: [],},],
        feedbacks: [ ],
    },
    presets['preset_obstacle_cam_prev'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Prev',
        style: { text: 'Obstacle\nCamera\nPrev', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "prev", }, },], up: [],},],
        feedbacks: [ ],
    },
    presets['preset_obstacle_cam_auto'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Auto',
        style: { text: 'Obstacle\nCamera\nAuto', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "255", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_255', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_off'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera OFF',
        style: { text: 'Obstacle\nCamera\nOFF', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "0", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_0', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_1'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Forward',
        style: { text: 'Obstacle\nCamera\nForward', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "1", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_1', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_2'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Back',
        style: { text: 'Obstacle\nCamera\nBack', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "2", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_2', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_3'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Left',
        style: { text: 'Obstacle\nCamera\nLeft', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "3", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_3', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_4'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Right',
        style: { text: 'Obstacle\nCamera\nRight', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "4", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_4', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_5'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Bottom',
        style: { text: 'Obstacle\nCamera\nBottom', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "5", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_5', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_obstacle_cam_6'] = {
        type: 'button', category: 'Drone controls', name: 'Obstacle Camera Top',
        style: { text: 'Obstacle\nCamera\nTop', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_obstacle_camera', options: { value: "6", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_obstacle_camera_6', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }

    presets['preset_display_smooth_toggle'] = {
        type: 'button', category: 'Common', name: 'Display smooth Toggle',
        style: { text: 'Display\nSmooth\nToggle', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_display_smooth', options: { value: "toggle", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_display_smooth_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_display_smooth_on'] = {
        type: 'button', category: 'Common', name: 'Display smooth ON',
        style: { text: 'Display\nSmooth\nOn', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_display_smooth', options: { value: "on", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_display_smooth_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_display_smooth_off'] = {
        type: 'button', category: 'Common', name: 'Display smooth Off',
        style: { text: 'Display\nSmooth\nOff', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_display_smooth', options: { value: "off", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_display_smooth_disabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }

    presets['preset_display_clear_latency'] = {
        type: 'button', category: 'Common', name: 'Display Clear Latency',
        style: { text: 'Display\nClear\nLatency', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_display_clear_latency', options: { value: "", }, },], up: [],},],
        feedbacks: [ ],
    }

    presets['preset_video_intro_toggle'] = {
        type: 'button', category: 'Common', name: 'Video Intro Toggle',
        style: { text: 'Video\nIntro\nToggle', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_video_intro', options: { value: "toggle", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_video_intro_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_video_intro_on'] = {
        type: 'button', category: 'Common', name: 'Video Intro On',
        style: { text: 'Video\nIntro\nOn', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_video_intro', options: { value: "on", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_video_intro_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_video_intro_off'] = {
        type: 'button', category: 'Common', name: 'Video Intro Off',
        style: { text: 'Video\nIntro\nOff', color: ColorWhite, bgcolor: ColorGroup7, size: '13', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_video_intro', options: { value: "off", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_video_intro_disabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }


    presets['preset_bgaudio_toggle'] = {
        type: 'button', category: 'Common', name: 'Background Audio Toggle',
        style: { text: 'Background\nAudio\nToggle', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_bgaudio', options: { value: "toggle", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_bgaudio_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_bgaudio_on'] = {
        type: 'button', category: 'Common', name: 'Background Audio On',
        style: { text: 'Background\nAudio\nOn', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_bgaudio', options: { value: "on", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_bgaudio_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_bgaudio_off'] = {
        type: 'button', category: 'Common', name: 'Background Audio Off',
        style: { text: 'Background\nAudio\nOff', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_bgaudio', options: { value: "off", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_bgaudio_disabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }


    presets['preset_app2_toggle'] = {
        type: 'button', category: 'Common', name: 'Secondary Camera Toggle On/Off',
        style: { text: 'Secondary\nCamera\nToggle', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_secondary_camera', options: { value: "toggle", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_secondary_camera_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_app2_on'] = {
        type: 'button', category: 'Common', name: 'Secondary Camera On',
        style: { text: 'Secondary\nCamera\nOn', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_secondary_camera', options: { value: "on", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_secondary_camera_enabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }
    presets['preset_app2_off'] = {
        type: 'button', category: 'Common', name: 'Secondary Camera Off',
        style: { text: 'Secondary\nCamera\nOff', color: ColorWhite, bgcolor: ColorGroup7, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_secondary_camera', options: { value: "off", }, },], up: [],},],
        feedbacks: [ { feedbackId: 'feedback_secondary_camera_disabled', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }


    presets['preset_ronin_calibration'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Calibration',
        style: { text: 'Gimbal\nCalibration', color: ColorWhite, bgcolor: ColorGroup27, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_gimbal_calibratiom', options: { value: "calibration", }, },], up: [  ],},],
        feedbacks: [ ],
    }


    presets['preset_ronin_power_sleep'] = {
        type: 'button', category: 'DJI Ronin', name: 'Power mode',
        style: { text: 'Ronin\nSleep', color: ColorWhite, bgcolor: ColorGroup24, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_gimbal_power_set', options: { value: "sleep", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_power_wakeup'] = {
        type: 'button', category: 'DJI Ronin', name: 'Power mode',
        style: { text: 'Ronin\nWake-Up', color: ColorWhite, bgcolor: ColorGroup24, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_gimbal_power_set', options: { value: "wakeup", }, },], up: [  ],},],
        feedbacks: [ ],
    }


    presets['preset_ronin_battery_level'] = {
        type: 'button', category: 'DJI Ronin', name: 'DJI Ronin battery level',
        style: { text: 'Ronin battery\n$(generic-module:camera_battery_level)%', color: ColorWhite, bgcolor: ColorGroup2, size: '14', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }

    presets['preset_ronin_gimbal_lock'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Lock Toggle',
        style: { text: 'Gimbal Lock Toggle', color: ColorWhite, bgcolor: ColorGroup27, size: '14', alignment: 'center:center', },
        steps: [
            {
                down: [ { actionId: 'action_gimbal_orientation_lock', options: { value: "toggle", }, }, ],
                up: [],
            },
        ],
        feedbacks: [ { feedbackId: 'feedback_gimbal_orientation_lock', style: { bgcolor: ColorRed, color: ColorWhite,}, },],
    }


    presets['preset_ronin_speeds'] = {
        type: 'button', category: 'DJI Ronin', name: 'DJI Ronin gimbal speeds',
        style: { text: 'Ronin speeds\n$(generic-module:gimbal_speed_pan)%\n$(generic-module:gimbal_speed_tilt)%\n$(generic-module:gimbal_speed_roll)%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }
    presets['preset_ronin_smooth'] = {
        type: 'button', category: 'DJI Ronin', name: 'DJI Ronin gimbal smooth',
        style: { text: 'Ronin smooth\n$(generic-module:gimbal_smooth_pan)\n$(generic-module:gimbal_smooth_tilt)\n$(generic-module:gimbal_smooth_roll)', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [],
    }


    presets['preset_ronin_gimbal_maxspeed_10'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 10%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "10", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "10", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "10", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_20'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 20%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "20", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "20", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "20", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_30'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 30%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "30", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "30", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "30", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_40'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 40%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "40", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "40", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "40", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_50'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 50%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "50", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "50", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "50", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_60'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 60%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "60", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "60", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "60", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_70'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 70%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "70", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "70", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "70", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_80'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 80%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "80", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "80", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "80", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_90'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 90%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "90", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "90", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "90", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_maxspeed_100'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Max Speed 50%',
        style: { text: 'Gimbal\nMax Speed 100%', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_maxspeed_pan', options: { value: "100", }, },
            { actionId: 'action_gimbal_maxspeed_tilt', options: { value: "100", }, },
            { actionId: 'action_gimbal_maxspeed_roll', options: { value: "100", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }



    presets['preset_ronin_gimbal_smooth_1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Smooth 15',
        style: { text: 'Gimbal\nSmooth\n1', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_smooth_pan', options: { value: "1", }, },
            { actionId: 'action_gimbal_smooth_tilt', options: { value: "1", }, },
            { actionId: 'action_gimbal_smooth_roll', options: { value: "1", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_smooth_7'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Smooth 15',
        style: { text: 'Gimbal\nSmooth\n7', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_smooth_pan', options: { value: "7", }, },
            { actionId: 'action_gimbal_smooth_tilt', options: { value: "7", }, },
            { actionId: 'action_gimbal_smooth_roll', options: { value: "7", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_smooth_15'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Smooth 15',
        style: { text: 'Gimbal\nSmooth\n15', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_smooth_pan', options: { value: "15", }, },
            { actionId: 'action_gimbal_smooth_tilt', options: { value: "15", }, },
            { actionId: 'action_gimbal_smooth_roll', options: { value: "15", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_smooth_22'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Smooth 15',
        style: { text: 'Gimbal\nSmooth\n22', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_smooth_pan', options: { value: "22", }, },
            { actionId: 'action_gimbal_smooth_tilt', options: { value: "22", }, },
            { actionId: 'action_gimbal_smooth_roll', options: { value: "22", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_smooth_30'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Set Smooth 15',
        style: { text: 'Gimbal\nSmooth\n30', color: ColorWhite, bgcolor: ColorGroup31, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_gimbal_smooth_pan', options: { value: "30", }, },
            { actionId: 'action_gimbal_smooth_tilt', options: { value: "30", }, },
            { actionId: 'action_gimbal_smooth_roll', options: { value: "30", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }




    presets['preset_ronin_gimbal_preset1_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 1\nSave', color: ColorWhite, bgcolor: ColorGroup26, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_motors_preset_save', options: { value: "preset1", }, },
            { actionId: 'action_ronin_gimbal_preset_save', options: { value: "preset1", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset2_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 2\nSave', color: ColorWhite, bgcolor: ColorGroup26, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_motors_preset_save', options: { value: "preset2", }, },
            { actionId: 'action_ronin_gimbal_preset_save', options: { value: "preset2", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset3_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 3\nSave', color: ColorWhite, bgcolor: ColorGroup26, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_motors_preset_save', options: { value: "preset3", }, },
            { actionId: 'action_ronin_gimbal_preset_save', options: { value: "preset3", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset4_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 4\nSave', color: ColorWhite, bgcolor: ColorGroup26, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_motors_preset_save', options: { value: "preset4", }, },
            { actionId: 'action_ronin_gimbal_preset_save', options: { value: "preset4", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset5_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 5\nSave', color: ColorWhite, bgcolor: ColorGroup26, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_motors_preset_save', options: { value: "preset5", }, },
            { actionId: 'action_ronin_gimbal_preset_save', options: { value: "preset5", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }



    presets['preset_ronin_gimbal_preset1_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 1\nSet', color: ColorWhite, bgcolor: ColorGroup25, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_gimbal_preset_speed', options: { value: "speed7", }, },
            { actionId: 'action_ronin_gimbal_preset_set', options: { value: "preset1", }, },
            { actionId: 'action_ronin_motors_preset_set', options: { value: "preset1", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset2_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 2\nSet', color: ColorWhite, bgcolor: ColorGroup25, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_gimbal_preset_speed', options: { value: "speed7", }, },
            { actionId: 'action_ronin_gimbal_preset_set', options: { value: "preset2", }, },
            { actionId: 'action_ronin_motors_preset_set', options: { value: "preset2", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset3_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 3\nSet', color: ColorWhite, bgcolor: ColorGroup25, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_gimbal_preset_speed', options: { value: "speed7", }, },
            { actionId: 'action_ronin_gimbal_preset_set', options: { value: "preset3", }, },
            { actionId: 'action_ronin_motors_preset_set', options: { value: "preset3", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset4_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 4\nSet', color: ColorWhite, bgcolor: ColorGroup25, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_gimbal_preset_speed', options: { value: "speed7", }, },
            { actionId: 'action_ronin_gimbal_preset_set', options: { value: "preset4", }, },
            { actionId: 'action_ronin_motors_preset_set', options: { value: "preset4", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_gimbal_preset5_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Gimbal Preset Set',
        style: { text: 'Gimbal\nPreset 5\nSet', color: ColorWhite, bgcolor: ColorGroup25, size: '12', alignment: 'center:center', },
        steps: [{ down: [
            { actionId: 'action_ronin_gimbal_preset_speed', options: { value: "speed7", }, },
            { actionId: 'action_ronin_gimbal_preset_set', options: { value: "preset5", }, },
            { actionId: 'action_ronin_motors_preset_set', options: { value: "preset5", }, },
        ], up: [  ],},],
        feedbacks: [ ],
    }


    presets['preset_ronin_motor_focus_status'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Status',
        style: { text: 'Focus Motor\n$(generic-module:motor_focus_status)', color: ColorWhite, bgcolor: ColorGroup10, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [ { feedbackId: 'feedback_motor_focus_ready', style: { bgcolor: ColorGreen, color: ColorWhite,}, },],
    }
    presets['preset_ronin_motor_iris_status'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Status',
        style: { text: 'IRIS Motor\n$(generic-module:motor_iris_status)', color: ColorWhite, bgcolor: ColorGroup10, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [ { feedbackId: 'feedback_motor_iris_ready', style: { bgcolor: ColorGreen, color: ColorWhite,}, },],
    }
    presets['preset_ronin_motor_zoom_status'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Status',
        style: { text: 'Zoom Motor\n$(generic-module:motor_zoom_status)', color: ColorWhite, bgcolor: ColorGroup10, size: '12', alignment: 'center:center', },
        steps: [],
        feedbacks: [ { feedbackId: 'feedback_motor_zoom_ready', style: { bgcolor: ColorGreen, color: ColorWhite,}, },],
    }



    presets['preset_ronin_motor_focus_calibration_auto'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Auto Calibration',
        style: { text: 'Focus\nAuto Calibration', color: ColorWhite, bgcolor: ColorGroup28, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "calibrate-auto", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_calibration_manual_start'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Manual Calibration Start',
        style: { text: 'Focus\nCalibration Start', color: ColorWhite, bgcolor: ColorGroup28, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "calibrate-manual-start", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_calibration_manual_stop'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Manual Calibration Stop',
        style: { text: 'Focus\nCalibration Stop', color: ColorWhite, bgcolor: ColorGroup28, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "calibrate-manual-stop", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_calibration_manual_min'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Manual Set Min Point',
        style: { text: 'Focus\nSet Min', color: ColorWhite, bgcolor: ColorGroup28, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "calibrate-manual-min", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_calibration_manual_max'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Manual Set Max Point',
        style: { text: 'Focus\nSet Max', color: ColorWhite, bgcolor: ColorGroup28, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "calibrate-manual-max", }, },], },],
        feedbacks: [ ],
    }



    presets['preset_ronin_motor_iris_calibration_auto'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Auto Calibration',
        style: { text: 'IRIS\nAuto Calibration', color: ColorWhite, bgcolor: ColorGroup29, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "calibrate-auto", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_calibration_manual_start'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Manual Calibration Start',
        style: { text: 'IRIS\nCalibration Start', color: ColorWhite, bgcolor: ColorGroup29, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "calibrate-manual-start", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_calibration_manual_stop'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Manual Calibration Stop',
        style: { text: 'IRIS\nCalibration Stop', color: ColorWhite, bgcolor: ColorGroup29, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "calibrate-manual-stop", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_calibration_manual_min'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Manual Set Min Point',
        style: { text: 'IRIS\nSet Min', color: ColorWhite, bgcolor: ColorGroup29, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "calibrate-manual-min", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_calibration_manual_max'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Manual Set Max Point',
        style: { text: 'IRIS\nSet Max', color: ColorWhite, bgcolor: ColorGroup29, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "calibrate-manual-max", }, },], },],
        feedbacks: [ ],
    }




    presets['preset_ronin_motor_zoom_calibration_auto'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Auto Calibration',
        style: { text: 'Zoom\nAuto Calibration', color: ColorWhite, bgcolor: ColorGroup30, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "calibrate-auto", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_calibration_manual_start'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Manual Calibration Start',
        style: { text: 'Zoom\nCalibration Start', color: ColorWhite, bgcolor: ColorGroup30, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "calibrate-manual-start", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_calibration_manual_stop'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Manual Calibration Stop',
        style: { text: 'Zoom\nCalibration Stop', color: ColorWhite, bgcolor: ColorGroup30, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "calibrate-manual-stop", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_calibration_manual_min'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Manual Set Min Point',
        style: { text: 'Zoom\nSet Min', color: ColorWhite, bgcolor: ColorGroup30, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "calibrate-manual-min", }, },], },],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_calibration_manual_max'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Manual Set Max Point',
        style: { text: 'Zoom\nSet Max', color: ColorWhite, bgcolor: ColorGroup30, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "calibrate-manual-max", }, },], },],
        feedbacks: [ ],
    }



    presets['preset_ronin_motor_focus_move_back_speed1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Back Speed 1',
        style: { text: 'Focus Back Speed 1\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "back1", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_fwd_speed1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Fwd Speed 1',
        style: { text: 'Focus Fwd Speed 1\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "fwd1", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_back_speed2'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Back Speed 2',
        style: { text: 'Focus Back Speed 2\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "back2", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_fwd_speed2'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Fwd Speed 2',
        style: { text: 'Focus Fwd Speed 2\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "fwd2", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_back_speed3'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Back Speed 3',
        style: { text: 'Focus Back Speed 3\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "back3", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_fwd_speed3'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Fwd Speed 3',
        style: { text: 'Focus Fwd Speed 3\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "fwd3", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_back_speed4'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Back Speed 4',
        style: { text: 'Focus Back Speed 4\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "back4", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_fwd_speed4'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Fwd Speed 4',
        style: { text: 'Focus Fwd Speed 4\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "fwd4", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_back_speed5'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Back Speed 5',
        style: { text: 'Focus Back Speed 5\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "back5", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_focus_move_fwd_speed5'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Focus Move Fwd Speed 5',
        style: { text: 'Focus Fwd Speed 5\n$(generic-module:motor_focus_percentage)', color: ColorWhite, bgcolor: ColorGroup21, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_focus', options: { value: "fwd5", }, },], up: [ { actionId: 'action_ronin_focus', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }



    presets['preset_ronin_motor_iris_move_back_speed1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Back Speed 1',
        style: { text: 'IRIS Back Speed 1\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "back1", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_fwd_speed1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Fwd Speed 1',
        style: { text: 'IRIS Fwd Speed 1\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "fwd1", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_back_speed2'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Back Speed 2',
        style: { text: 'IRIS Back Speed 2\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "back2", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_fwd_speed2'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Fwd Speed 2',
        style: { text: 'IRIS Fwd Speed 2\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "fwd2", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_back_speed3'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Back Speed 3',
        style: { text: 'IRIS Back Speed 3\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "back3", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_fwd_speed3'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Fwd Speed 3',
        style: { text: 'IRIS Fwd Speed 3\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "fwd3", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_back_speed4'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Back Speed 4',
        style: { text: 'IRIS Back Speed 4\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "back4", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_fwd_speed4'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Fwd Speed 4',
        style: { text: 'IRIS Fwd Speed 4\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "fwd4", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_back_speed5'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Back Speed 5',
        style: { text: 'IRIS Back Speed 5\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "back5", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_iris_move_fwd_speed5'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor IRIS Move Fwd Speed 5',
        style: { text: 'IRIS Fwd Speed 5\n$(generic-module:motor_iris_percentage)', color: ColorWhite, bgcolor: ColorGroup22, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_iris', options: { value: "fwd5", }, },], up: [ { actionId: 'action_ronin_iris', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }


    presets['preset_ronin_motor_zoom_move_back_speed1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Back Speed 1',
        style: { text: 'Zoom Back Speed 1\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "back1", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_fwd_speed1'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Fwd Speed 1',
        style: { text: 'Zoom Fwd Speed 1\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "fwd1", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_back_speed2'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Back Speed 2',
        style: { text: 'Zoom Back Speed 2\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "back2", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_fwd_speed2'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Fwd Speed 2',
        style: { text: 'Zoom Fwd Speed 2\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "fwd2", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_back_speed3'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Back Speed 3',
        style: { text: 'Zoom Back Speed 3\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "back3", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_fwd_speed3'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Fwd Speed 3',
        style: { text: 'Zoom Fwd Speed 3\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "fwd3", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_back_speed4'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Back Speed 4',
        style: { text: 'Zoom Back Speed 4\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "back4", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_fwd_speed4'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Fwd Speed 4',
        style: { text: 'Zoom Fwd Speed 4\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "fwd4", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_back_speed5'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Back Speed 5',
        style: { text: 'Zoom Back Speed 5\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "back5", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motor_zoom_move_fwd_speed5'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motor Zoom Move Fwd Speed 5',
        style: { text: 'Zoom Fwd Speed 5\n$(generic-module:motor_zoom_percentage)', color: ColorWhite, bgcolor: ColorGroup23, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_zoom', options: { value: "fwd5", }, },], up: [ { actionId: 'action_ronin_zoom', options: { value: "stop", }, }, ],},],
        feedbacks: [ ],
    }


    presets['preset_ronin_motors_preset1_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Save',
        style: { text: 'Motors\nPreset 1\nSave', color: ColorWhite, bgcolor: ColorGroup19, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_save', options: { value: "preset1", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset2_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Save',
        style: { text: 'Motors\nPreset 2\nSave', color: ColorWhite, bgcolor: ColorGroup19, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_save', options: { value: "preset2", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset3_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Save',
        style: { text: 'Motors\nPreset 3\nSave', color: ColorWhite, bgcolor: ColorGroup19, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_save', options: { value: "preset3", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset4_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Save',
        style: { text: 'Motors\nPreset 4\nSave', color: ColorWhite, bgcolor: ColorGroup19, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_save', options: { value: "preset4", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset5_save'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Save',
        style: { text: 'Motors\nPreset 5\nSave', color: ColorWhite, bgcolor: ColorGroup19, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_save', options: { value: "preset5", }, },], up: [  ],},],
        feedbacks: [ ],
    }


    presets['preset_ronin_motors_preset1_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Set',
        style: { text: 'Motors\nPreset 1\nSet', color: ColorWhite, bgcolor: ColorGroup20, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_set', options: { value: "preset1", }, }, ], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset2_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Set',
        style: { text: 'Motors\nPreset 2\nSet', color: ColorWhite, bgcolor: ColorGroup20, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_set', options: { value: "preset2", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset3_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Set',
        style: { text: 'Motors\nPreset 3\nSet', color: ColorWhite, bgcolor: ColorGroup20, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_set', options: { value: "preset3", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset4_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Set',
        style: { text: 'Motors\nPreset 4\nSet', color: ColorWhite, bgcolor: ColorGroup20, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_set', options: { value: "preset4", }, },], up: [  ],},],
        feedbacks: [ ],
    }
    presets['preset_ronin_motors_preset5_set'] = {
        type: 'button', category: 'DJI Ronin', name: 'Motors Preset Set',
        style: { text: 'Motors\nPreset 5\nSet', color: ColorWhite, bgcolor: ColorGroup20, size: '12', alignment: 'center:center', },
        steps: [{ down: [ { actionId: 'action_ronin_motors_preset_set', options: { value: "preset5", }, },], up: [  ],},],
        feedbacks: [ ],
    }



    self.setPresetDefinitions(presets);
}
