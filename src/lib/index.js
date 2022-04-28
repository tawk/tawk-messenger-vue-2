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
		this.root.onBeforeLoaded = () => window.Tawk_API.onBeforeLoaded;
		this.root.widgetPosition = () => window.Tawk_API.widgetPosition();
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	mapListeners() {
		this.root.onLoad = (event) => {
			window.addEventListener('tawkLoad', () => {
				event();
			});
		};
		
		this.root.onStatusChange = (event) => {
			window.addEventListener('tawkStatusChange', (status) => {
				event(status.detail);
			});
		};

		this.root.onBeforeLoad = (event) => {
			window.addEventListener('tawkBeforeLoad', () => {
				event();
			});
		};

		this.root.onChatMaximized = (event) => {
			window.addEventListener('tawkChatMaximized', () => {
				event();
			});
		};

		this.root.onChatMinimized = (event) => {
			window.addEventListener('tawkChatMinimized', () => {
				event();
			});
		};

		this.root.onChatHidden = (event) => {
			window.addEventListener('tawkChatHidden', () => {
				event('chatHidden');
			});
		};
		
		this.root.onChatStarted = (event) => {
			window.addEventListener('tawkChatStarted', () => {
				event();
			});
		};

		this.root.onChatEnded = (event) => {
			window.addEventListener('tawkChatEnded', () => {
				event();
			});
		};

		this.root.onPrechatSubmit = (event) => {
			window.addEventListener('tawkPrechatSubmit', (data) => {
				event('prechatSubmit', data.detail);
			});
		};

		this.root.onOfflineSubmit = (event) => {
			window.addEventListener('tawkOfflineSubmit', (data) => {
				event(data.detail);
			});
		};

		this.root.onChatMessageVisitor = (event) => {
			window.addEventListener('tawkChatMessageVisitor', (message) => {
				event(message.detail);
			});
		};

		this.root.onChatMessageAgent = (event) => {
			window.addEventListener('tawkChatMessageAgent', (message) => {
				event(message.detail);
			});
		};

		this.root.onChatMessageSystem = (event) => {
			window.addEventListener('tawkChatMessageSystem', (message) => {
				event(message.detail);
			});
		};

		this.root.onAgentJoinChat = (event) => {
			window.addEventListener('tawkAgentJoinChat', (data) => {
				event(data.detail);
			});
		};

		this.root.onAgentLeaveChat = (event) => {
			window.addEventListener('tawkAgentLeaveChat', (data) => {
				event(data.detail);
			});
		};

		this.root.onChatSatisfaction = (event) => {
			window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
				event(satisfaction.detail);
			});
		};

		this.root.onVisitorNameChanged = (event) => {
			window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
				event(visitorName.detail);
			});
		};

		this.root.onFileUpload = (event) => {
			window.addEventListener('tawkFileUpload', (link) => {
				event(link.detail);
			});
		};

		this.root.onTagsUpdated = (event) => {
			window.addEventListener('tawkTagsUpdated', (data) => {
				event(data.detail);
			});
		};

		this.root.onUnreadCountChanged = (event) => {
			window.addEventListener('tawkUnreadCountChanged', (data) => {
				event(data.detail);
			});
		};
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