// Utilities
import { loadScript } from '../utils/widget';

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
		window.addEventListener('tawkLoad', () => {
			this.root.$emit('onLoad');
		});

		window.addEventListener('tawkStatusChange', (status) => {
			this.root.$emit('onStatusChange', status.detail);
		});

		window.addEventListener('tawkBeforeLoad', () => {
			this.root.$emit('onBeforeLoad');
		});

		window.addEventListener('tawkChatMaximized', () => {
			this.root.$emit('onChatMaximized');
		});

		window.addEventListener('tawkChatMinimized', () => {
			this.root.$emit('onChatMinimized');
		});

		window.addEventListener('tawkChatHidden', () => {
			this.root.$emit('onChatHidden');
		});

		window.addEventListener('tawkChatStarted', () => {
			this.root.$emit('onChatStarted');
		});

		window.addEventListener('tawkChatEnded', () => {
			this.root.$emit('onChatEnded');
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			this.root.$emit('onPrechatSubmit', data.detail);
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			this.root.$emit('onOfflineSubmit', data.detail);
		});
		
		window.addEventListener('tawkChatMessageVisitor', (message) => {
			this.root.$emit('onChatMessageVisitor', message.detail);
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			this.root.$emit('onChatMessageAgent', message.detail);
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			this.root.$emit('onChatMessageSystem', message.detail);
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			this.root.$emit('onAgentJoinChat', data.detail);
		});
		
		window.addEventListener('tawkAgentLeaveChat', (data) => {
			this.root.$emit('onAgentLeaveChat', data.detail);
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			this.root.$emit('onChatSatisfaction', satisfaction.detail);
		});
		
		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			this.root.$emit('onVisitorNameChanged', visitorName.detail);
		});

		window.addEventListener('tawkFileUpload', (link) => {
			this.root.$emit('onFileUpload', link.detail);
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			this.root.$emit('onTagsUpdated', data.detail);
		});
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