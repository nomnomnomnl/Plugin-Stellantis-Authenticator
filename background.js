import { extractCode } from "./parse.js";

// Same hosts as host_permissions: the official Stellantis login pages.
const filter = {
  urls: [
    "https://idpcvs.peugeot.com/*",
    "https://idpcvs.citroen.com/*",
    "https://idpcvs.driveds.com/*",
    "https://idpcvs.opel.com/*",
    "https://idpcvs.vauxhall.co.uk/*",
  ],
};

const handled = new Set(); // requestIds; both listeners can fire for one redirect

function show(details, url) {
  const code = extractCode(url);
  if (!code || details.tabId < 0 || handled.has(details.requestId)) return;
  handled.add(details.requestId);
  chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("code.html#" + code) });
}

chrome.webRequest.onBeforeRedirect.addListener((d) => show(d, d.redirectUrl), filter);

// Fallback when the browser drops the redirect to an unknown scheme before onBeforeRedirect.
chrome.webRequest.onHeadersReceived.addListener(
  (d) => {
    const location = d.responseHeaders?.find((h) => h.name.toLowerCase() === "location");
    if (location) show(d, location.value);
  },
  filter,
  ["responseHeaders"],
);
