const { getBaseUrl } = require("../config");
const axios = require("axios");

async function getWaitStatus(jobId, options = {}) {
    const {
        poll = false,
        interval = 5000,
        timeout = 60000,
    } = options;

    const endpoint = `${getBaseUrl()}/api/wait/${jobId}`;

    if (!poll) {
        const res = await axios.get(endpoint);
        return res.data;
    }

    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        const poller = setInterval(async () => {
            try {
                const res = await axios.get(endpoint);
                const status = res.data?.status;

                if (status === "confirmed" || status === "failed") {
                    clearInterval(poller);
                    return resolve(res.data);
                }

                if (Date.now() - startTime > timeout) {
                    clearInterval(poller);
                    return reject(new Error("Polling timed out"));
                }
            } catch (err) {
                clearInterval(poller);
                return reject(err);
            }
        }, interval);
    });
}

module.exports = getWaitStatus;
