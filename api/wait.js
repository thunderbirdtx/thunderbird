const { getBaseUrl } = require("../config");
const axios = require("axios");

async function scheduleWait({ signedTx, maxGasGwei }) {
    const res = await axios.post(`${getBaseUrl()}/api/wait`, {
        signedTx,
        maxGasGwei,
    });
    return res.data;
}

module.exports = scheduleWait;
