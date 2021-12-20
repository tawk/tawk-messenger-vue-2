// Dependencies
import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';

// Library
import TawkMessengerVue from '../../src';

describe('Tawk-messenger plugin', () => {
	let mountApp;
	const localVue = createLocalVue();

	/**
	 * Set the widget
	 */
	localVue.use(TawkMessengerVue, {
		propertyId : 'property_id',
		widgetId : 'widget_id'
	});

	/**
	 * Create dummy component
	 */
	const EmptyComponent = Vue.component('app', {
		template : '<div></div>'
	});

	beforeEach(() => {
		mountApp = () => mount(EmptyComponent, { localVue });
	});

	describe('Initialize', () => {
		it('Should set the Tawk_API global variable.', () => {
			mountApp();

			expect(typeof window.Tawk_API === 'object').toBe(true);
		});

		it('Should set Instance property $tawkMessenger', () => {
			const wrapper = mountApp();

			expect(typeof wrapper.vm.$tawkMessenger === 'object').toBe(true);
		});
	});

	describe('API', () => {
		it('Should set the action functions.', () => {
			const wrapper = mountApp();

			expect(typeof wrapper.vm.$tawkMessenger.maximize === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.minimize === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.toggle === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.popup === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.showWidget === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.hideWidget === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.toggleVisibility === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.endChat === 'function').toBe(true);
		});

		it('Should set the getters functions.', () => {
			const wrapper = mountApp();

			expect(typeof wrapper.vm.$tawkMessenger.getWindowType === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.getStatus === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.isChatMaximized === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.isChatMinimized === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.isChatHidden === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.isChatOngoing === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.isVisitorEngaged === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.onLoaded === 'function').toBe(true);
		});

		it('Should set the event listeners.', () => {
			mountApp();

			expect(window.addEventListener).toHaveBeenCalledWith('tawkLoad', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkStatusChange', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkBeforeLoad', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMaximized', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMinimized', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatHidden', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatStarted', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatEnded', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkPrechatSubmit', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkOfflineSubmit', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageVisitor', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageAgent', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageSystem', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentJoinChat', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentLeaveChat', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkChatSatisfaction', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkVisitorNameChanged', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkFileUpload', expect.any(Function));
			expect(window.addEventListener).toHaveBeenCalledWith('tawkTagsUpdated', expect.any(Function));
		});

		it('Should set the setter functions', () => {
			const wrapper = mountApp();

			expect(typeof wrapper.vm.$tawkMessenger.visitor === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.setAttributes === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.addEvent === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.addTags === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.removeTags === 'function').toBe(true);
		});
	});
});