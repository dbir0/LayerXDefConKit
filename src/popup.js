chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
  chrome.runtime.sendMessage(
    { type: "getCookiesForTab", tabId: currentTab.id },
    (cookies = []) => {
      const display = document.getElementById("cookieDisplay");

      if (!cookies || cookies.length === 0) {
        display.textContent = "No cookies found.";
        return;
      }

      display.textContent = cookies
        .map((cookie) => `• ${cookie.name} = ${cookie.value}`)
        .join("\n\n");
    }
  );
});
