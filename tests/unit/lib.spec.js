// Lib
import TawkMessenger from '../../src/lib';
// Utilities
import { loadScript } from '../../src/utils/widget';

jest.useFakeTimers();

describe('TawkMessenger: Class', () => {
	afterEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe('TawkMessenger', () => {
		it('Should fail to init TawkMessenger without propertyId and widgetId', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger, {});

			expect(tawkMessenger).toEqual(
				expect.not.objectContaining({
					root : TawkMessenger,
					propertyId : undefined,
					widgetId : undefined,
					settings : undefined
				})
			);
		});

		it('should init TawkMessenger with property and widgetId', () => {
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
					settings : undefined
				})
			);
		});

		it('should load TawkMessenger script and init', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger,
				{ 
					propertyId : 'fakePropertyId',
					widgetId : 'default'
				}
			);
			jest.spyOn(tawkMessenger, 'init');

			tawkMessenger.load();
			expect(loadScript).toHaveBeenCalledWith('fakePropertyId', 'default');
		});
	});
});