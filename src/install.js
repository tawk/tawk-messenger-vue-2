// Lib
import TawkMessenger from './lib';

// Utilities
import { isValidString } from './utils/helper';

function install(Vue, options = {}) {
	const { propertyId, widgetId } = options;

	if (!isValidString(propertyId)) {
		console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'propertyId\' property in the plugin.');
		return;
	}

	if (!isValidString(widgetId)) {
		console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'widgetId\' property in the plugin.');
		return;
	}

	Vue.mixin({
		mounted() {
			if (!Vue.prototype.$tawkMessenger) {
				Vue.prototype.$tawkMessenger = new TawkMessenger(this.$root, options);
			}
		}
	});
}


export {
	install
};