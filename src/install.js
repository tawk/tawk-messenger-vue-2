// Lib
import TawkMessenger from './lib';
// Utilities
import { isValidString } from './utils/helper';


let installed = false;

function install(Vue, options = {}) {
	const { propertyId, widgetId } = options;

	if (!isValidString(String, propertyId)) {
		console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'propertyId\' property in the plugin.');
		return;
	}

	if (!isValidString(String, widgetId)) {
		console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'widgetId\' property in the plugin.');
		return;
	}

	Vue.mixin({
		mounted() {
			if (installed) {
				return;
			}

			const root = new Vue();

			new TawkMessenger(root, options);

			Vue.prototype.$tawkMessenger = root;

			installed = true;
		}
	});
}


export {
	install
};