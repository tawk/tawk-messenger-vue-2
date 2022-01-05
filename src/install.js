// Lib
import TawkMessenger from './lib';

function install(Vue, options = {}) {
	const { propertyId, widgetId } = options;

	if (typeof propertyId !== 'string') {
		console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'propertyId\' property in the plugin.');
		return;
	}

	if (typeof widgetId !== 'string') {
		console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'widgetId\' property in the plugin.');
		return;
	}

	Vue.mixin({
		mounted() {
			const root = new Vue();

			new TawkMessenger(root, options);

			Vue.prototype.$tawkMessenger = root;
		}
	});
}


export {
	install
};