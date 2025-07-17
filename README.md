# LayerXDefConKit – Chrome Extension Boilerplate

A lean Chrome Extension boilerplate built for DEF CON demos and security research.
Built with Manifest V3, powered by Webpack, this template is designed for rapid prototyping of both benign and malicious Chrome extension behavior.

## ⚠️ Disclaimer

This project is intended strictly for educational and ethical research purposes.
It must not be used to develop or distribute malicious software.
Always respect user privacy and platform policies.

## Pre-requisite

- [NodeJs](https://nodejs.org/) `v17.4.0`

### 🛠️ Installing Node.js and npm

1. **Go to https://nodejs.org**
2. **Download the LTS version**
3. **Run the installer** and follow the setup instructions

### ✅ Verify Installation

After installation, open a terminal or command prompt and run:

```bash
node -v
npm -v
```

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

| Branch Name                                           | Description                                                                                                       |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `main`                                                | Starting point. Exercise: activate cookies stealing                                                               |
| `step-1-fetch-injection`                              | Exercise: Inject fetch override                                                                                   |
| `step-2-log-response-body`                            | Exercise: Log the response body of intercepted fetch requests                                                     |
| `step-3-inject-with-minimal-permission`               | Exercise: Use only the following permissions in your `manifest.json` cookies, tabs and storage                    |
| `step-4-force-chat-gpt-to-answer-in-lyrics`           | Exercise: Force ChatGPT to answer in lyrics                                                                       |
| `step-5-exfiltrate-the-data`                          | Exercise: Transfer the captured information to the remote server.                                                 |
| `step-6-obfuscation-to-hide-injected-extension-logic` | Exercise: Add Webpack config to export obfuscated extension bundles.                                              |
| `step-7-the-complete-solution`                        | Contains the final implementation of the extension, incorporating everything from all previous exercises solutoin |
