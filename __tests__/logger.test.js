const logger = require('../utils/logger');

describe('Logger', () => {
    const originalConsole = { ...console };
    const spy = jest.fn();

    beforeEach(() => {
        console.log = spy;
        console.warn = spy;
        console.error = spy;
    });

    afterEach(() => {
        spy.mockClear();
        console.log = originalConsole.log;
        console.warn = originalConsole.warn;
        console.error = originalConsole.error;
    });

    it('logs info messages', () => {
        logger.info("This is an info message");
        expect(spy).toHaveBeenCalled();
    });

    it('logs warning messages', () => {
        logger.warn("This is a warning message");
        expect(spy).toHaveBeenCalled();
    });

    it('logs error messages', () => {
        logger.error("This is an error message");
        expect(spy).toHaveBeenCalled();
    });

    it('does not log debug messages if THUNDERBIRD_DEBUG is not set', () => {
        process.env.THUNDERBIRD_DEBUG = "false";
        logger.debug("This is a debug message");
        expect(spy).not.toHaveBeenCalled();
    });

    it('logs debug messages if THUNDERBIRD_DEBUG is true', () => {
        process.env.THUNDERBIRD_DEBUG = "true";
        logger.debug("This is a debug message");
        expect(spy).toHaveBeenCalled();
    });
});
