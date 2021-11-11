// Plugin
import VueTawkMessenger from './plugin';


const install = VueTawkMessenger.install;
VueTawkMessenger.install = (Vue, options) => {
	install.call(VueTawkMessenger, Vue, {
		...options
	});
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueTawkMessenger);
}


export default VueTawkMessenger;