const { getBaseUrl } = require("../config");
const axios = require("axios");

async function getWaitStatus(jobId) {
    const res = await axios.get(`${getBaseUrl()}/api/wait/${jobId}`);
    return res.data;
}

module.exports = getWaitStatus;
