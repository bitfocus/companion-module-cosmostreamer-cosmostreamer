const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base');
const UpgradeScripts = require('./upgrades');
const UpdateActions = require('./actions');
const UpdateFeedbacks = require('./feedbacks');
const UpdateVariableDefinitions = require('./variables');
const Presets = require('./presets');
const Network = require('./network');

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.config = config

		this.log('debug', 'Main Init')

		this.updateStatus(InstanceStatus.Ok)

		this.updateVariableDefinitions()
		this.updateActions()
		this.updateFeedbacks()

		Presets.initPresets(this);

		Network.init(this);
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
		Network.close(this);
	}

	async configUpdated(config) {
		this.config = config

		this.log('debug', 'config updated: host ' + config.host + ' port: ' + config.port + ' autodiscovery: ' + config.autodiscovery);

		Network.close(this);
		Network.init(this);
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Target IP',
				width: 8
				/*regex: Regex.IP,*/
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port',
				width: 5,
				regex: Regex.PORT,
				default: 6262
			},
			{
				type: 'checkbox',
				id: 'autodiscovery',
				label: 'Use auto discovery',
				default: true,
			}
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}

}

runEntrypoint(ModuleInstance, UpgradeScripts)
