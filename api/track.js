const { getBaseUrl } = require("../config");
const axios = require("axios");

async function track(txHash) {
    const res = await axios.get(`${getBaseUrl()}/api/track/${txHash}`);
    return res.data;
}

module.exports = track;
