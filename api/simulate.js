const { getBaseUrl } = require("../config");
const axios = require("axios");

async function simulateTx({ signedTx }) {
    const res = await axios.post(`${getBaseUrl()}/api/simulate`, {
        signedTx,
    });
    return res.data;
}

module.exports = simulateTx;
