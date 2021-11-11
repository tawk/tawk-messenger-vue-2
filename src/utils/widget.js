/* eslint-disable no-unused-vars */

function loadScript(propertyId, widgetId) {
	var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.talk.lv/${propertyId}/${widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
}

export {
	loadScript
};