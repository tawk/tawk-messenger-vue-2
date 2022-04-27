// Dependencies
import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';

// Library
import TawkMessengerVue from '../../src';

describe('Tawk-messenger plugin', () => {
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

	const wrapper = () => mount(EmptyComponent, { localVue });
	const $tawkMessenger = wrapper().vm.$tawkMessenger;

	describe('Initialize', () => {
		it('Should set the Tawk_API global variable.', () => {
			expect(typeof window.Tawk_API === 'object').toBe(true);
		});

		it('Should set Instance property $tawkMessenger', () => {
			expect(typeof $tawkMessenger === 'object').toBe(true);
		});
	});

	describe('API', () => {
		it('Should set the action functions.', () => {
			expect(typeof $tawkMessenger.maximize === 'function').toBe(true);
			expect(typeof $tawkMessenger.minimize === 'function').toBe(true);
			expect(typeof $tawkMessenger.toggle === 'function').toBe(true);
			expect(typeof $tawkMessenger.popup === 'function').toBe(true);
			expect(typeof $tawkMessenger.showWidget === 'function').toBe(true);
			expect(typeof $tawkMessenger.hideWidget === 'function').toBe(true);
			expect(typeof $tawkMessenger.toggleVisibility === 'function').toBe(true);
			expect(typeof $tawkMessenger.endChat === 'function').toBe(true);
		});

		it('Should set the getters functions.', () => {
			expect(typeof $tawkMessenger.getWindowType === 'function').toBe(true);
			expect(typeof $tawkMessenger.getStatus === 'function').toBe(true);
			expect(typeof $tawkMessenger.isChatMaximized === 'function').toBe(true);
			expect(typeof $tawkMessenger.isChatMinimized === 'function').toBe(true);
			expect(typeof $tawkMessenger.isChatHidden === 'function').toBe(true);
			expect(typeof $tawkMessenger.isChatOngoing === 'function').toBe(true);
			expect(typeof $tawkMessenger.isVisitorEngaged === 'function').toBe(true);
			expect(typeof $tawkMessenger.onLoaded === 'function').toBe(true);
			expect(typeof $tawkMessenger.onBeforeLoaded === 'function').toBe(true);
			expect(typeof $tawkMessenger.widgetPosition === 'function').toBe(true);
		});

		describe('Should set the event listeners.', () => {
			it('should add tawkLoad event listener', () => {
				expect(typeof $tawkMessenger.onLoad === 'function').toBe(true);

				$tawkMessenger.onLoad(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkLoad', expect.any(Function));
			});

			it('Should add tawkStatusChange event listener', () => {
				expect(typeof $tawkMessenger.onStatusChange === 'function').toBe(true);

				$tawkMessenger.onStatusChange(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkStatusChange', expect.any(Function));
			});

			it('Should add tawkBeforeLoad event listener', () => {
				expect(typeof $tawkMessenger.onBeforeLoad === 'function').toBe(true);

				$tawkMessenger.onBeforeLoad(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkBeforeLoad', expect.any(Function));
			});

			it('Should add tawkChatMaximized event listener', () => {
				expect(typeof $tawkMessenger.onChatMaximized === 'function').toBe(true);

				$tawkMessenger.onChatMaximized(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMaximized', expect.any(Function));
			});

			it('Should add tawkChatMinimized event listener', () => {
				expect(typeof $tawkMessenger.onChatMinimized === 'function').toBe(true);

				$tawkMessenger.onChatMinimized(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMinimized', expect.any(Function));
			});
			
			it('Should add tawkChatHidden event listener', () => {
				expect(typeof $tawkMessenger.onChatHidden === 'function').toBe(true);

				$tawkMessenger.onChatHidden(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatHidden', expect.any(Function));
			});

			it('Should add tawkChatStarted event listener', () => {
				expect(typeof $tawkMessenger.onChatStarted === 'function').toBe(true);

				$tawkMessenger.onChatStarted(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatStarted', expect.any(Function));
			});
			
			it('Should add tawkChatEnded event listener', () => {
				expect(typeof $tawkMessenger.onChatEnded === 'function').toBe(true);

				$tawkMessenger.onChatEnded(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatEnded', expect.any(Function));
			});

			it('Should add tawkPrechatSubmit event listener', () => {
				expect(typeof $tawkMessenger.onPrechatSubmit === 'function').toBe(true);

				$tawkMessenger.onPrechatSubmit(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkPrechatSubmit', expect.any(Function));
			});

			it('Should add tawkOfflineSubmit event listener', () => {
				expect(typeof $tawkMessenger.onOfflineSubmit === 'function').toBe(true);

				$tawkMessenger.onOfflineSubmit(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkOfflineSubmit', expect.any(Function));
			});

			it('Should add tawkChatMessageVisitor event listener', () => {
				expect(typeof $tawkMessenger.onChatMessageVisitor === 'function').toBe(true);

				$tawkMessenger.onChatMessageVisitor(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageVisitor', expect.any(Function));
			});

			it('Should add tawkChatMessageAgent event listener', () => {
				expect(typeof $tawkMessenger.onChatMessageAgent === 'function').toBe(true);

				$tawkMessenger.onChatMessageAgent(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageAgent', expect.any(Function));
			});
			
			it('Should add tawkChatMessageSystem event listener', () => {
				expect(typeof $tawkMessenger.onChatMessageSystem === 'function').toBe(true);

				$tawkMessenger.onChatMessageSystem(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageSystem', expect.any(Function));
			});
			
			it('Should add tawkAgentJoinChat event listener', () => {
				expect(typeof $tawkMessenger.onAgentJoinChat === 'function').toBe(true);

				$tawkMessenger.onAgentJoinChat(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentJoinChat', expect.any(Function));
			});

			it('Should add tawkAgentLeaveChat event listener', () => {
				expect(typeof $tawkMessenger.onAgentJoinChat === 'function').toBe(true);

				$tawkMessenger.onAgentLeaveChat(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentLeaveChat', expect.any(Function));
			});
			
			it('Should add tawkChatSatisfaction event listener', () => {
				expect(typeof $tawkMessenger.onChatSatisfaction === 'function').toBe(true);

				$tawkMessenger.onChatSatisfaction(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatSatisfaction', expect.any(Function));
			});
			
			it('Should add tawkVisitorNameChanged event listener', () => {
				expect(typeof $tawkMessenger.onVisitorNameChanged === 'function').toBe(true);

				$tawkMessenger.onVisitorNameChanged(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkVisitorNameChanged', expect.any(Function));
			});

			it('Should add tawkFileUpload event listener', () => {
				expect(typeof $tawkMessenger.onFileUpload === 'function').toBe(true);

				$tawkMessenger.onFileUpload(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkFileUpload', expect.any(Function));
			});
			
			it('Should add tawkTagsUpdated event listener', () => {
				expect(typeof $tawkMessenger.onTagsUpdated === 'function').toBe(true);

				$tawkMessenger.onTagsUpdated(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkTagsUpdated', expect.any(Function));
			});
			
			it('Should add tawkUnreadCountChanged event listener', () => {
				expect(typeof $tawkMessenger.onUnreadCountChanged === 'function').toBe(true);

				$tawkMessenger.onUnreadCountChanged(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkUnreadCountChanged', expect.any(Function));
			});
		});

		it('Should set the setter functions', () => {
			expect(typeof $tawkMessenger.visitor === 'function').toBe(true);
			expect(typeof $tawkMessenger.setAttributes === 'function').toBe(true);
			expect(typeof $tawkMessenger.addEvent === 'function').toBe(true);
			expect(typeof $tawkMessenger.addTags === 'function').toBe(true);
			expect(typeof $tawkMessenger.removeTags === 'function').toBe(true);
		});
	});
});