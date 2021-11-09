// Utilities
import { loadScript } from '../utils/file';

class TawkMessenger {
	constructor(root, options) {
		this.root = root;
		this.propertyId = options.propertyId;
		this.widgetId = options.widgetId;
		this.settings = options.settings;

		this.load();
	}

	load() {
		if (!window || !document) {
			return;
		}
		
		/**
		 * Set placeholder
		 */
		window.Tawk_API = window.Tawk_API || {};

		/**
		 * Inject the Tawk script
		 */
		loadScript(this.propertyId, this.widgetId);

		this.init();
	}

	init() {
		if (this.settings && typeof this.settings === 'object') {
			if (this.settings.customStyle && typeof this.settings.customStyle === 'object') {
				window.Tawk_API.customStyle = this.settings.customStyle;
			}
		}

		/**
		 * Map the APIs
		 */
		this.mapActions();
		this.mapGetters();
		this.mapListeners();
		this.mapSetters();
	}

	/**
	 * API for calling an action on the widget
	 */
	mapActions() {
		this.root.maximize = () => window.Tawk_API.maximize();
		this.root.minimize = () => window.Tawk_API.minimize();
		this.root.toggle = () => window.Tawk_API.toggle();
		this.root.popup = () => window.Tawk_API.popup();
		this.root.showWidget = () => window.Tawk_API.showWidget();
		this.root.hideWidget = () => window.Tawk_API.hideWidget();
		this.root.toggleVisibility = () => window.Tawk_API.toggleVisibility();
		this.root.endChat = () => window.Tawk_API.endChat();
	}

	/**
	 * API for returning a data
	 */	
	mapGetters() {
		this.root.getWindowType = () => window.Tawk_API.getWindowType();
		this.root.getStatus = () => window.Tawk_API.getStatus();
		this.root.isChatMaximized = () => window.Tawk_API.isChatMaximized();
		this.root.isChatMinimized = () => window.Tawk_API.isChatMinimized();
		this.root.isChatHidden = () => window.Tawk_API.isChatHidden();
		this.root.isChatOngoing = () => window.Tawk_API.isChatOngoing();
		this.root.isVisitorEngaged = () => window.Tawk_API.isVisitorEngaged();
		this.root.onLoaded = () => window.Tawk_API.onLoaded;
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	mapListeners() {
		window.Tawk_API.onLoad = () => this.root.$emit('onLoad');
		window.Tawk_API.onStatusChange = (status) => this.root.$emit('onStatusChange', status);
		window.Tawk_API.onBeforeLoad = () => this.root.$emit('onBeforeLoad');
		window.Tawk_API.onChatMaximized = () => this.root.$emit('onChatMaximized');
		window.Tawk_API.onChatMinimized = () => this.root.$emit('onChatMinimized');
		window.Tawk_API.onChatHidden = () => this.root.$emit('onChatHidden');
		window.Tawk_API.onChatStarted = () => this.root.$emit('onChatStarted');
		window.Tawk_API.onChatEnded = () => this.root.$emit('onChatEnded');
		window.Tawk_API.onPrechatSubmit = (data) => this.root.$emit('onPrechatSubmit', data);
		window.Tawk_API.onOfflineSubmit = (data) => this.root.$emit('onOfflineSubmit', data);
		window.Tawk_API.onChatMessageVisitor = (message) => this.root.$emit('onChatMessageVisitor', message);
		window.Tawk_API.onChatMessageAgent = (message) => this.root.$emit('onChatMessageAgent', message);
		window.Tawk_API.onChatMessageSystem = (message) => this.root.$emit('onChatMessageSystem', message);
		window.Tawk_API.onAgentJoinChat = (data) => this.root.$emit('onAgentJoinChat', data);
		window.Tawk_API.onAgentLeaveChat = (data) => this.root.$emit('onAgentLeaveChat', data);
		window.Tawk_API.onChatSatisfaction = (satisfaction) => this.root.$emit('onChatSatisfaction', satisfaction);
		window.Tawk_API.onVisitorNameChanged = (visitorName) => this.root.$emit('onVisitorNameChanged', visitorName);
		window.Tawk_API.onFileUpload = (link) => this.root.$emit('onFileUpload', link);
		window.Tawk_API.onTagsUpdated = (data) => this.root.$emit('onTagsUpdated', data);
	}

	/**
	 * API for setting a data on the widget
	 */
	mapSetters() {
		this.root.visitor = (data) => window.Tawk_API.visitor = data;
		this.root.setAttributes = (attribute, callback) => window.Tawk_API.setAttributes(attribute, callback);
		this.root.addEvent = (event, metadata, callback) => window.Tawk_API.addEvent(event, metadata, callback);
		this.root.addTags = (tags, callback) => window.Tawk_API.addTags(tags, callback);
		this.root.removeTags = (tags, callback) => window.Tawk_API.removeTags(tags, callback);
	}
}


export default TawkMessenger;