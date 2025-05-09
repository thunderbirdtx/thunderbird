const { setBaseUrl } = require("./config");

const track = require("./api/track");
const scheduleWait = require("./api/wait");
const sendBundle = require("./api/bundle");
const simulateTx = require("./api/simulate");
const getWaitStatus = require("./api/status");
const logger = require("./utils/logger");

module.exports = {
    init: ({ apiUrl }) => setBaseUrl(apiUrl),
    track,
    scheduleWait,
    sendBundle,
    simulateTx,
    getWaitStatus,
    logger,
};
