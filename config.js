//for now until we hve the api hosted
let BASE_URL = "http://localhost:3001";

function setBaseUrl(url) {
    BASE_URL = url;
}

function getBaseUrl() {
    return BASE_URL;
}

module.exports = { setBaseUrl, getBaseUrl };
