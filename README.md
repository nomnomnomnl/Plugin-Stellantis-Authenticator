# Stellantis OAuth code for Home Assistant

Browser extension for the Home Assistant integration [Stellantis Vehicles](https://github.com/andreadegiovine/homeassistant-stellantis-vehicles). After you log in on the official Peugeot, Citroën, DS, Opel or Vauxhall login page, it shows the OAuth code with a copy button. No more devtools.

## Install
The extension is not in a store. You load it from a folder.

**Get the files.** Download `stellantis-oauth-code-<version>.zip` from [Releases](https://github.com/nomnomnomnl/Plugin-Stellantis-Authenticator/releases/latest) and extract it to a folder you keep, for example `Documents\stellantis-oauth-code`. You can also clone this repo. Chromium browsers load the extension from that folder, so don't delete or move it later.

### Chrome, Edge, Brave, Chromium
1. Open the extensions page:
   | Browser | Address |
   |---|---|
   | Chrome / Chromium | `chrome://extensions` |
   | Edge | `edge://extensions` |
   | Brave | `brave://extensions` |
2. Turn on **Developer mode**. In Chrome, Brave and Chromium the switch is at the top right; in Edge it is in the left sidebar.
3. Click **Load unpacked** and select the folder that contains `manifest.json`.
4. The extension **Stellantis OAuth code for Home Assistant** appears in the list. It needs no pinning and has no toolbar button. It only acts when you log in.

To update: replace the files in the folder, then click the reload icon on the extension's card.

### Firefox (121 or newer)
1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and select `manifest.json` in the folder.
3. The extension appears under *Temporary Extensions*.

Firefox removes temporary add-ons when it closes. Load it again just before you log in. Firefox Developer Edition, Nightly and ESR can keep unsigned add-ons if you set `xpinstall.signatures.required` to `false` in `about:config`. Release Firefox does not allow this.

## Usage
1. In Home Assistant, add **Stellantis Vehicles** (or reauthenticate), and choose **manual mode**.
2. Open the login link from that step and log in as usual.
3. A page with your code opens. Click **Copy code** and paste it into the manual-mode field.

Use a computer. On a phone with the brand app installed, the app intercepts the login redirect.

## Privacy
- You type your password only on the official Stellantis page. The extension never sees it.
- It can only access the five `idpcvs.*` login domains, and it reads only the redirect address that holds the code.
- It does not store or log anything and sends nothing anywhere. See [PRIVACY.md](PRIVACY.md).

## Development
- `npm test` (or `node --test`): tests for the redirect parser.
- Chrome/Edge: `chrome://extensions` → Developer mode → *Load unpacked* → this folder.
- Firefox: `about:debugging` → *Load Temporary Add-on* → `manifest.json`.

---

## Nederlands
Na het inloggen op de officiële loginpagina van Peugeot, Citroën, DS, Opel of Vauxhall toont deze extensie de OAuth-code met een kopieerknop.

### Installeren
Download de zip via [Releases](https://github.com/nomnomnomnl/Plugin-Stellantis-Authenticator/releases/latest) en pak hem uit in een map die je bewaart, of clone deze repo.

- **Chrome, Edge, Brave, Chromium:** open `chrome://extensions` (Edge: `edge://extensions`, Brave: `brave://extensions`). Zet **Ontwikkelaarsmodus** aan (Edge: in de zijbalk links), klik **Uitgepakte extensie laden** en kies de map met `manifest.json`. Verplaats of verwijder die map daarna niet.
- **Firefox (121+):** open `about:debugging#/runtime/this-firefox`, klik **Tijdelijke add-on laden…** en kies `manifest.json`. Firefox verwijdert de add-on bij afsluiten, dus laad hem opnieuw vlak voor het inloggen.

### Gebruik
1. Kies in Home Assistant bij **Stellantis Vehicles** de **manual mode**.
2. Open de login-link uit die stap en log in.
3. Klik op **Code kopiëren** en plak de code in het veld.

Je wachtwoord typ je alleen op de officiële pagina. De extensie slaat niets op en verstuurt niets.
