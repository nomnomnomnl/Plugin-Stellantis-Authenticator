const t = (key) => chrome.i18n.getMessage(key);
const $ = (id) => document.getElementById(id);

const code = location.hash.slice(1);
// Keep the code out of the history entry.
history.replaceState(null, "", location.pathname);

const valid = /^[A-Za-z0-9._~%-]{8,4096}$/.test(code);
$("title").textContent = t("extName");
$("intro").textContent = t(valid ? "pageIntro" : "pageNoCode");

if (valid) {
  $("code").textContent = code;
  $("code").hidden = false;
  $("hint").textContent = t("pageHint");
  const button = $("copy");
  button.textContent = t("copy");
  button.hidden = false;
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(code);
    button.textContent = t("copied");
  });
}
