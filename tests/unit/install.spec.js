// Dependencies
import Vue from 'vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

// Library
import TawkMessengerVue from '../../dist/tawk-messenger-vue';

describe('Install Tawk-messenger-vue as plugin', () => {
	let mountApp;
	const localVue = createLocalVue();

	/**
	 * Set the widget
	 */
	localVue.use(TawkMessengerVue, {
		propertyId : null,
		widgetId : null
	});

	/**
	 * Create dummy component
	 */
	const EmptyComponent = Vue.component('app', {
		template : '<div></div>'
	});

	beforeEach(() => {
		mountApp = () => shallowMount(EmptyComponent, { localVue });
	});

	describe('Should throw an error in missing required properties', () => {
		it('when properptyId isn\'t defined', () => {
			const wrapper = mountApp({
				propertyId : null,
				widgetId : 'default'
			});

			expect(wrapper.vm.$tawkMessenger).toEqual(undefined);
			expect(console.error).toHaveBeenCalled();
		});

		it('when widgetIt isn\'t defined', () => {
			const wrapper = mountApp({
				propertyId : 'property_id',
				widgetId : null
			});

			expect(wrapper.vm.$tawkMessenger).toEqual(undefined);
			expect(console.error).toHaveBeenCalled();
		});
	});
});