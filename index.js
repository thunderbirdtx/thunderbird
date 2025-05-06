const { setBaseUrl } = require("./config");

const track = require("./api/track");
const scheduleWait = require("./api/wait");
const sendBundle = require("./api/bundle");
const simulateTx = require("./api/simulate");
const getWaitStatus = require("./api/status");

module.exports = {
    init: ({ apiUrl }) => setBaseUrl(apiUrl),
    track,
    scheduleWait,
    sendBundle,
    simulateTx,
    getWaitStatus,
};
