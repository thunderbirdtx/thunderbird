let chalk;
try {
    chalk = require("chalk");
} catch {
    chalk = {
        blue: (s) => s,
        yellow: (s) => s,
        red: (s) => s,
        gray: (s) => s,
    };
}

function timestamp() {
    return new Date().toISOString();
}

function log(level, colorFn, ...args) {
    const prefix = `[${level.toUpperCase()} ${timestamp()}]`;
    console.log(colorFn(prefix), ...args);
}

module.exports = {
    info: (...args) => log("info", chalk.blue, ...args),
    warn: (...args) => log("warn", chalk.yellow, ...args),
    error: (...args) => log("error", chalk.red, ...args),
    debug: (...args) => {
        if (process.env.THUNDERBIRD_DEBUG === "true") {
            log("debug", chalk.gray, ...args);
        }
    },
};
