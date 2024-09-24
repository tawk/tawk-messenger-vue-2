// Utilities
import { loadScript } from '../utils/widget';
import { isValidString } from '../utils/helper';


class TawkMessenger {
	constructor(root, options) {
		if (!isValidString(options.propertyId)) {
			return;
		}

		if (!isValidString(options.widgetId)) {
			return;
		}
		
		this.root = root;
		this.propertyId = options.propertyId;
		this.widgetId = options.widgetId;
		this.embedId = options.embedId;
		this.customStyle = options.customStyle;
		this.basePath = options.basePath;

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
		window.Tawk_LoadStart = new Date();

		/**
		 * Inject the Tawk script
		 */
		loadScript({
			propertyId : this.propertyId,
			widgetId : this.widgetId,
			embedId : this.embedId,
			basePath : this.basePath
		});

		this.init();
	}

	init() {
		if (this.customStyle && typeof this.customStyle === 'object') {
			window.Tawk_API.customStyle = this.customStyle;
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
		this.root.tawkMaximize = () => window.Tawk_API.maximize();
		this.root.tawkMinimize = () => window.Tawk_API.minimize();
		this.root.tawkToggle = () => window.Tawk_API.toggle();
		this.root.tawkPopup = () => window.Tawk_API.popup();
		this.root.tawkShowWidget = () => window.Tawk_API.showWidget();
		this.root.tawkHideWidget = () => window.Tawk_API.hideWidget();
		this.root.tawkToggleVisibility = () => window.Tawk_API.toggleVisibility();
		this.root.tawkEndChat = () => window.Tawk_API.endChat();
	}

	/**
	 * API for returning a data
	 */	
	mapGetters() {
		this.root.tawkGetWindowType = () => window.Tawk_API.getWindowType();
		this.root.tawkGetStatus = () => window.Tawk_API.getStatus();
		this.root.tawkIsChatMaximized = () => window.Tawk_API.isChatMaximized();
		this.root.tawkIsChatMinimized = () => window.Tawk_API.isChatMinimized();
		this.root.tawkIsChatHidden = () => window.Tawk_API.isChatHidden();
		this.root.tawkIsChatOngoing = () => window.Tawk_API.isChatOngoing();
		this.root.tawkIsVisitorEngaged = () => window.Tawk_API.isVisitorEngaged();
		this.root.tawkOnLoaded = () => window.Tawk_API.onLoaded;
		this.root.tawkOnBeforeLoaded = () => window.Tawk_API.onBeforeLoaded;
		this.root.tawkWidgetPosition = () => window.Tawk_API.widgetPosition();
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	mapListeners() {
		window.addEventListener('tawkLoad', () => {
			this.root.$emit('tawkLoad');
		});

		window.addEventListener('tawkStatusChange', (status) => {
			this.root.$emit('tawkStatusChange', status.detail);
		});

		window.addEventListener('tawkBeforeLoad', () => {
			this.root.$emit('tawkBeforeLoad');
		});

		window.addEventListener('tawkChatMaximized', () => {
			this.root.$emit('tawkChatMaximized');
		});

		window.addEventListener('tawkChatMinimized', () => {
			this.root.$emit('tawkChatMinimized');
		});

		window.addEventListener('tawkChatHidden', () => {
			this.root.$emit('tawkChatHidden');
		});

		window.addEventListener('tawkChatStarted', () => {
			this.root.$emit('tawkChatStarted');
		});

		window.addEventListener('tawkChatEnded', () => {
			this.root.$emit('tawkChatEnded');
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			this.root.$emit('tawkPrechatSubmit', data.detail);
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			this.root.$emit('tawkOfflineSubmit', data.detail);
		});
		
		window.addEventListener('tawkChatMessageVisitor', (message) => {
			this.root.$emit('tawkChatMessageVisitor', message.detail);
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			this.root.$emit('tawkChatMessageAgent', message.detail);
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			this.root.$emit('tawkChatMessageSystem', message.detail);
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			this.root.$emit('tawkAgentJoinChat', data.detail);
		});
		
		window.addEventListener('tawkAgentLeaveChat', (data) => {
			this.root.$emit('tawkAgentLeaveChat', data.detail);
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			this.root.$emit('tawkChatSatisfaction', satisfaction.detail);
		});
		
		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			this.root.$emit('tawkVisitorNameChanged', visitorName.detail);
		});

		window.addEventListener('tawkFileUpload', (link) => {
			this.root.$emit('tawkFileUpload', link.detail);
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			this.root.$emit('tawkTagsUpdated', data.detail);
		});

		window.addEventListener('tawkUnreadCountChanged', (data) => {
			this.root.$emit('tawkUnreadCountChanged', data.detail);
		});
	}

	/**
	 * API for setting a data on the widget
	 */
	mapSetters() {
		this.root.tawkVisitor = (data) => window.Tawk_API.visitor = data;
		this.root.tawkSetAttributes = (attribute, callback) => window.Tawk_API.setAttributes(attribute, callback);
		this.root.tawkAddEvent = (event, metadata, callback) => window.Tawk_API.addEvent(event, metadata, callback);
		this.root.tawkAddTags = (tags, callback) => window.Tawk_API.addTags(tags, callback);
		this.root.tawkRemoveTags = (tags, callback) => window.Tawk_API.removeTags(tags, callback);
	}
}


export default TawkMessenger;