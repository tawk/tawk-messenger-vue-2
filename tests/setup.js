
import * as loadScriptFn from '@/utils/widget';

jest.spyOn(loadScriptFn, 'loadScript').mockImplementation((propertyId, done) => setTimeout(done, 25));
jest.spyOn(console, 'error').mockReturnValue(true);