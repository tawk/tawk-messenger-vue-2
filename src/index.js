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
	window.Tawk_API.onLoad = () => root.$emit('onLoad');
	window.Tawk_API.onStatusChange = (status) => root.$emit('onStatusChange', status);
	window.Tawk_API.onBeforeLoad = () => root.$emit('onBeforeLoad');
	window.Tawk_API.onChatMaximized = () => root.$emit('onChatMaximized');
	window.Tawk_API.onChatMinimized = () => root.$emit('onChatMinimized');
	window.Tawk_API.onChatHidden = () => root.$emit('onChatHidden');
	window.Tawk_API.onChatStarted = () => root.$emit('onChatStarted');
	window.Tawk_API.onChatEnded = () => root.$emit('onChatEnded');
	window.Tawk_API.onPrechatSubmit = (data) => root.$emit('onPrechatSubmit', data);
	window.Tawk_API.onOfflineSubmit = (data) => root.$emit('onOfflineSubmit', data);
	window.Tawk_API.onChatMessageVisitor = (message) => root.$emit('onChatMessageVisitor', message);
	window.Tawk_API.onChatMessageAgent = (message) => root.$emit('onChatMessageAgent', message);
	window.Tawk_API.onChatMessageSystem = (message) => root.$emit('onChatMessageSystem', message);
	window.Tawk_API.onAgentJoinChat = (data) => root.$emit('onAgentJoinChat', data);
	window.Tawk_API.onAgentLeaveChat = (data) => root.$emit('onAgentLeaveChat', data);
	window.Tawk_API.onChatSatisfaction = (satisfaction) => root.$emit('onChatSatisfaction', satisfaction);
	window.Tawk_API.onVisitorNameChanged = (visitorName) => root.$emit('onVisitorNameChanged', visitorName);
	window.Tawk_API.onFileUpload = (link) => root.$emit('onFileUpload', link);
	window.Tawk_API.onTagsUpdated = (data) => root.$emit('onTagsUpdated', data);


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
