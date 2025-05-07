# 🦅 Thunderbird Gas SDK

Save Ethereum gas. Schedule smarter transactions. Send bundles via Flashbots.  
This SDK connects your app or bot to the Thunderbird Gas Optimization API.

---

##  Installation

```bash
npm install thunderbird
```

---

##  Quick Start

```js
const thunderbird = require("thunderbird");
//this method will go away, right now this is for local testing only
thunderbird.init({ apiUrl: "http://localhost:3001" }); // will change when we launch API

(async () => {
  const result = await thunderbird.track("0xYourTxHash");
  console.log(result);
})();
```

---

##  Features

-  **Track transactions** for gas usage + history
-  **Wait** for gas to drop below a threshold before submitting
-  **Bundle signed txs** and send through Flashbots
-  **Simulate** transaction outcomes
-  **Check status** of scheduled jobs

---

##  Available Methods

### `init({ apiUrl })`
Set the base API URL. Defaults to `http://localhost:3001`.

---

### `track(txHash)`
Get gas usage info for a specific transaction.

```js
const result = await thunderbird.track("0xabc...");
```

---

### `scheduleWait({ signedTx, maxGasGwei })`
Schedule a transaction to submit once gas drops below your threshold.

```js
await thunderbird.scheduleWait({
  signedTx: "0x...",
  maxGasGwei: 25,
});
```

---

### `getWaitStatus(jobId, options?)`

Check the status of a scheduled `wait` job. Optionally poll until the job is complete.

#### Basic usage (single request):

```js
const status = await thunderbird.getWaitStatus(jobId);
console.log(status);
```

#### With polling:

```js
const status = await thunderbird.getWaitStatus(jobId, {
  poll: true,
  interval: 3000,  // check every 3 seconds
  timeout: 60000,  // give up after 60 seconds
});
console.log("Final status:", status);
```

- Returns an object with current job status and metadata.
- Statuses include: `pending`, `confirmed`, or `failed`.

### `sendBundle({ signedTxs })`
Send a bundle of transactions through Flashbots.

```js
await thunderbird.sendBundle({
  signedTxs: ["0x...", "0x..."],
});
```

---

### `simulateTx({ signedTx })`
Simulate a signed transaction to preview behavior and gas usage.

```js
await thunderbird.simulateTx({
  signedTx: "0x...",
});
```

---

##  Local Development

If you’re running the API locally:

```js
thunderbird.init({ apiUrl: "http://localhost:3001" });
```

---

## Testing

This SDK uses [Jest](https://jestjs.io/) — JavaScript testing framework for unit testing.

To run tests locally:
```npm install
npm test
```

Tests are located in the __tests__/ directory and use [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter) to mock API requests.

Example test output:

``` PASS  __tests__/track.test.js
  ✓ should return tx data from the API (10 ms)
  ✓ should throw if the API fails (3 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

---

##  API Access

The SDK is open source under the MIT license.  
The Thunderbird API is private infrastructure operated by the team.

---

##  Get Involved

We’re building open SDKs and APIs for wallets, bots, and dapps.  
Follow us on Twitter [@Thunderbirdtx](https://twitter.com/Thunderbirdtx) and reach out with feedback or ideas!

---

##  License

MIT — feel free to fork and build with it.
