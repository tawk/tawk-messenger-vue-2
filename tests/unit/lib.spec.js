// Library
import TawkMessenger from '../../src/lib';

// Utilities
import { loadScript } from '../../src/utils/widget';

jest.useFakeTimers();

describe('Tawk-messenger Library', () => {
	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe('Set the properties value', () => {
		it('Should set empty properties', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger, {});

			expect(tawkMessenger).toEqual(
				expect.not.objectContaining({
					root : TawkMessenger,
					propertyId : undefined,
					widgetId : undefined,
					customStyle : undefined
				})
			);
		});

		it('Should set the required properties', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger,
				{ 
					propertyId : 'fakePropertyId',
					widgetId : 'default'
				}
			);

			expect(tawkMessenger).toEqual(
				expect.objectContaining({
					root : TawkMessenger,
					propertyId : 'fakePropertyId',
					widgetId : 'default',
					customStyle : undefined
				})
			);
		});
	});

	describe('Embed widget', () => {
		it('Should request TawkMessenger script', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger,
				{ 
					propertyId : 'fakePropertyId',
					widgetId : 'default',
					embedId : 'fake-id'
				}
			);
			jest.spyOn(tawkMessenger, 'init');

			tawkMessenger.load();
			expect(loadScript).toHaveBeenCalledWith({
				propertyId : 'fakePropertyId',
				widgetId : 'default',
				embedId : 'fake-id'
			});
		});
	});
});