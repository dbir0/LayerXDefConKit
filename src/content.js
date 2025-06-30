console.log("content.js is running...");
window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type === "fetchData") {
    console.log("Content script received fetch data:", event.data);
    chrome.runtime.sendMessage(event.data);
  }
});
