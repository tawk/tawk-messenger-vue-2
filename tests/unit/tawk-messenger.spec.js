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

			expect(typeof wrapper.vm.$tawkMessenger.tawkMaximize === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkMinimize === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkToggle === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkPopup === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkShowWidget === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkHideWidget === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkToggleVisibility === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkEndChat === 'function').toBe(true);
		});

		it('Should set the getters functions.', () => {
			const wrapper = mountApp();

			expect(typeof wrapper.vm.$tawkMessenger.tawkGetWindowType === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkGetStatus === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkIsChatMaximized === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkIsChatMinimized === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkIsChatHidden === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkIsChatOngoing === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkIsVisitorEngaged === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkOnLoaded === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkOnBeforeLoaded === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkWidgetPosition === 'function').toBe(true);
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
			expect(window.addEventListener).toHaveBeenCalledWith('tawkUnreadCountChanged', expect.any(Function));
		});

		it('Should set the setter functions', () => {
			const wrapper = mountApp();

			expect(typeof wrapper.vm.$tawkMessenger.tawkVisitor === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkSetAttributes === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkAddEvent === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkAddTags === 'function').toBe(true);
			expect(typeof wrapper.vm.$tawkMessenger.tawkRemoveTags === 'function').toBe(true);
		});
	});
});