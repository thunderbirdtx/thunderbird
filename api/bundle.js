const { getBaseUrl } = require("../config");
const axios = require("axios");

async function sendBundle({ signedTxs }) {
    const res = await axios.post(`${getBaseUrl()}/api/bundle`, {
        signedTxs,
    });
    return res.data;
}

module.exports = sendBundle;
