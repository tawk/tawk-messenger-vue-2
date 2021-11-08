let installed = false;

const init = (Vue, options) => {
	if (!options.propertyId || options.propertyId.length === 0) {
		throw new Error('tawk-messenger-vue API "option.propertyId" is missing');
	}

	if (!options.widgetId || options.widgetId.length === 0) {
		throw new Error('tawk-messenger-vue API "option.widgetId" is missing');
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
	 * Expose the API injected to call it
	 * globally
	 */
	Object.defineProperty(root, 'tM', {
		get : function get() {
			return window.Tawk_API;
		}
	});

	Vue.prototype.$tawkMessenger = root;
};

const injectAPI = (root) => {
	window.Tawk_API = window.Tawk_API || {};

	/**
	 * Functions for callbacks that will be listened
	 */
	window.Tawk_API.onLoad = () => root.$emit('onLoad');
	window.Tawk_API.onStatusChange = root.$emit('onStatusChange');

	/**
	 * Functions that will return a data
	 */
	root.getStatus = () => window.Tawk_API.getStatus();
	root.toggle = () => window.Tawk_API.toggle();
	root.getWindowType = () => window.Tawk_API.getWindowType();
};

export { init };

export default init;
