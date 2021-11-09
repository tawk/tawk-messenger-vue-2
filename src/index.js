let installed = false;

const init = (Vue, options) => {
	if (!options.propertyId || options.propertyId.length === 0) {
		throw new Error('tawk-messenger-vue API "propertyId" is missing');
	}

	if (!options.widgetId || options.widgetId.length === 0) {
		throw new Error('tawk-messenger-vue API "widgetId" is missing');
	}

	install(Vue, options);
};

const install = (Vue, options) => {
	if (installed) {
		return;
	}

	const root = new Vue();

	/**
	 * Inject the scripts
	 */
	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.talk.lv/${options.propertyId}/${options.widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);


	// Mark it as installed
	installed = true;


	/**
	 * Set the APIs
	 */
	injectAPI(root);

	/**
	 * Add custom settings
	 */
	settings(options.settings);


	/**
	 * Expose the API injected to call it
	 * globally
	 */
	Vue.prototype.$tawkMessenger = root;
};

const settings = (settings) => {
	if (settings && typeof settings.customStyle === 'object') {
		window.Tawk_API.customStyle = settings.customStyle;
	}
};

const injectAPI = (root) => {
	window.Tawk_API = window.Tawk_API || {};

	/**
	 * Functions for callbacks that will be listened
	 */
	window.addEventListener('tawkLoad', () => {
		root.$emit('onLoad');
	});

	window.addEventListener('tawkStatusChange', (status) => {
		root.$emit('onStatusChange', status.detail);
	});

	window.addEventListener('tawkBeforeLoad', () => {
		root.$emit('onBeforeLoad');
	});

	window.addEventListener('tawkChatMaximized', () => {
		root.$emit('onChatMaximized');
	});

	window.addEventListener('tawkChatMinimized', () => {
		root.$emit('onChatMinimized');
	});

	window.addEventListener('tawkChatHidden', () => {
		root.$emit('onChatHidden');
	});

	window.addEventListener('tawkChatStarted', () => {
		root.$emit('onChatStarted');
	});

	window.addEventListener('tawkChatEnded', () => {
		root.$emit('onChatEnded');
	});

	window.addEventListener('tawkPrechatSubmit', (data) => {
		root.$emit('onPrechatSubmit', data.detail);
	});

	window.addEventListener('tawkOfflineSubmit', (data) => {
		root.$emit('onOfflineSubmit', data.detail);
	});
	
	window.addEventListener('tawkChatMessageVisitor', (message) => {
		root.$emit('onChatMessageVisitor', message.detail);
	});

	window.addEventListener('tawkChatMessageAgent', (message) => {
		root.$emit('onChatMessageAgent', message.detail);
	});

	window.addEventListener('tawkChatMessageSystem', (message) => {
		root.$emit('onChatMessageSystem', message.detail);
	});

	window.addEventListener('tawkAgentJoinChat', (data) => {
		root.$emit('onAgentJoinChat', data.detail);
	});
	
	window.addEventListener('tawkAgentLeaveChat', (data) => {
		root.$emit('onAgentLeaveChat', data.detail);
	});

	window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
		root.$emit('onChatSatisfaction', satisfaction.detail);
	});
	
	window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
		root.$emit('onVisitorNameChanged', visitorName.detail);
	});

	window.addEventListener('tawkFileUpload', (link) => {
		root.$emit('onFileUpload', link.detail);
	});

	window.addEventListener('tawkTagsUpdated', (data) => {
		root.$emit('onTagsUpdated', data.detail);
	});


	/**
	 * API for emitting a function
	 */
	root.maximize = () => window.Tawk_API.maximize();
	root.minimize = () => window.Tawk_API.minimize();
	root.toggle = () => window.Tawk_API.toggle();
	root.popup = () => window.Tawk_API.popup();
	root.getWindowType = () => window.Tawk_API.getWindowType();
	root.showWidget = () => window.Tawk_API.showWidget();
	root.hideWidget = () => window.Tawk_API.hideWidget();
	root.toggleVisibility = () => window.Tawk_API.toggleVisibility();
	root.getStatus = () => window.Tawk_API.getStatus();
	root.isChatMaximized = () => window.Tawk_API.isChatMaximized();
	root.isChatMinimized = () => window.Tawk_API.isChatMinimized();
	root.isChatHidden = () => window.Tawk_API.isChatHidden();
	root.isChatOngoing = () => window.Tawk_API.isChatOngoing();
	root.isVisitorEngaged = () => window.Tawk_API.isVisitorEngaged();
	root.endChat = () => window.Tawk_API.endChat();
	root.onLoaded = () => window.Tawk_API.onLoaded;


	/**
	 * API for setting a data
	 */
	root.visitor = (data) => window.Tawk_API.visitor = data;
	root.setAttributes = (attribute, callback) => window.Tawk_API.setAttributes(attribute, callback);
	root.addEvent = (event, metadata, callback) => window.Tawk_API.addEvent(event, metadata, callback);
	root.addTags = (tags, callback) => window.Tawk_API.addTags(tags, callback);
	root.removeTags = (tags, callback) => window.Tawk_API.removeTags(tags, callback);
};

export { init };

export default init;
