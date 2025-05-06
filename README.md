# 🦅 Thunderbird Gas SDK

Save Ethereum gas. Schedule smarter transactions. Send bundles via Flashbots.  
This SDK connects your app or bot to the Thunderbird Gas Optimization API.

---

##  Installation

```bash
npm install thunderbird-gas
```

---

##  Quick Start

```js
const thunderbird = require("thunderbird");
//this method will go away, right now this is for local testing only
thunderbird.init({ apiUrl: "http://localhost:3001" }); // or your deployed API

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

### `getWaitStatus(jobId)`
Check the status of a scheduled `wait` job.

```js
const status = await thunderbird.getWaitStatus(jobId);
```

---

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
