let installed = false;

const load = ({ propertyId, widgetId}, options) => {
	if (installed) {
		return;
	}

	/**
	 * Inject the JS API
	 */
	window.Tawk_API = window.Tawk_API || {};

	window.Tawk_API.onLoad = options.onLoad;
	window.Tawk_API.onStatusChange = options.onStatusChange;
	window.Tawk_API.onBeforeLoad = options.onBeforeLoad;
	window.Tawk_API.onChatMaximized = options.onChatMaximized;
	window.Tawk_API.onChatMinimized = options.onChatMinimized;
	window.Tawk_API.onChatHidden = options.onChatHidden;
	window.Tawk_API.onChatStarted = options.onChatStarted;
	window.Tawk_API.onChatEnded = options.onChatEnded;
	window.Tawk_API.onPrechatSubmit = options.onPrechatSubmit;
	window.Tawk_API.onOfflineSubmit = options.onOfflineSubmit;
	window.Tawk_API.onChatmessageAgent = options.onChatmessageAgent;
	window.Tawk_API.onChatMessageSystem = options.onChatMessageSystem;
	window.Tawk_API.onAgentJoinChat = options.onAgentJoinChat;
	window.Tawk_API.onAgentLeaveChat = options.onAgentLeaveChat;
	window.Tawk_API.onChatSatisfaction = options.onChatSatisfaction;
	window.Tawk_API.onVisitorNameChanged = options.onVisitorNameChanged;
	window.Tawk_API.onFileUpload = options.onFileUpload;
	window.Tawk_API.onTagsUpdated = options.onTagsUpdated;
	window.Tawk_API.visitor = options.visitor;
	window.Tawk_API.maximize = options.maximize;
	window.Tawk_API.minimize = options.minimize;
	window.Tawk_API.toggle = options.toggle;
	window.Tawk_API.popup = options.popup;
	window.Tawk_API.getWindowType = options.getWindowType;
	window.Tawk_API.showWidget = options.showWidget;
	window.Tawk_API.hideWidget = options.hideWidget;
	window.Tawk_API.toggleVisibility = options.toggleVisibility;
	window.Tawk_API.getStatus = options.getStatus;
	window.Tawk_API.isChatMaximized = options.isChatMaximized;
	window.Tawk_API.isChatMinimized = options.isChatMinimized;
	window.Tawk_API.isChatHidden = options.isChatHidden;
	window.Tawk_API.isChatOngoing = options.isChatOngoing;
	window.Tawk_API.isVisitorEngaged = options.isVisitorEngaged;
	window.Tawk_API.endChat = options.endChat;
	window.Tawk_API.setAttributes = options.setAttributes;
	window.Tawk_API.addEvent = options.addEvent;
	window.Tawk_API.addTags = options.addTags;
	window.Tawk_API.removeTags = options.removeTags;
	window.Tawk_API.customStyle = options.customStyle;


	/**
	 * Inject the tawk-messenger script
	 */
	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.talk.lv/${propertyId}/${widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);

	installed = true;
};

const install = (Vue, options = {}) => {
	if (!options.propertyId || options.propertyId.length === 0) {
		throw new Error('tawk-messenger-vue API "option.propertyId" is missing');
	}

	if (!options.widgetId || options.widgetId.length === 0) {
		throw new Error('tawk-messenger-vue API "option.widgetId" is missing');
	}

	Vue.mixin({
		mounted() {
			load({
				propertyId : options.propertyId,
				widgetId : options.widgetId,
			},
			options);
		}
	});
};

export { install };

export default install;
