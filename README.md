# LayerXDef – Chrome Extension Boilerplate

Chrome Extension Template (Manifest v3) Webpack Hot reload

## Pre-requisite

- [NodeJs](https://nodejs.org/) `v17.4.0`

## Project setup

- Install dependencies

```
npm install
```

- Build for production

```
npm run build
```

- Start working on locally

```
npm run start
```

- Start the server (runs on port 5555)

```
npm run server
```

## Load extension in browser locally

- Turn on developer mode in (`chrome://extensions`)
  ![Turn on developer mode](images/devmode.png)

- Then click on `Load unpacked`
- Select `dist` folder inside this repo folder(It will get generated after running either `build` or `start` command)

- If you have run `start` command, you can see something like this in browser console
  ![Locally working](images/loaded.png)


## 🧭 Workshop Branches

The workshop is structured as a series of Git branches. Start at the first step and move forward — each branch contains the solution to the previous task.

| Branch Name | Description |
|-------------|-------------|
| `main` | Starting point. Exercise: activate cookies stealing |
| `step-1-fetch-injection` | Exercise: Inject fetch override |
| `step-2-log-response-body` | Exercise: Log the response body of intercepted fetch requests |
| `step-3-inject-with-minimal-permission` | Exercise: Use only the following permissions in your `manifest.json` cookies, tabs and storage  |
| `step-4-force-chat-gpt-to-answer-in-lyrics` | Exercise: Force ChatGPT to answer in lyrics |
| `step-5-scripting-without-permissions` | Exercise: Inject code without using scripting permission |
| `step-6-exfiltrate-the-data` | Exercise: Transfer the captured information to the remote server. |
| `step-7-obfuscation-to-hide-injected-extension-logic` | Exercise: Add Webpack obfuscation to hide injected extension code. |