# Stellantis OAuth code for Home Assistant

Browser extension for the Home Assistant integration [Stellantis Vehicles](https://github.com/andreadegiovine/homeassistant-stellantis-vehicles). After you log in on the official Peugeot, Citroën, DS, Opel or Vauxhall login page, it shows the OAuth code with a copy button. No more devtools.

## Usage
1. Install the extension.
2. In Home Assistant, add **Stellantis Vehicles** (or reauthenticate), and choose **manual mode**.
3. Open the login link from that step and log in as usual.
4. A page with your code opens. Click **Copy code** and paste it into the manual-mode field.

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

1. Kies in Home Assistant bij **Stellantis Vehicles** de **manual mode**.
2. Open de login-link uit die stap en log in.
3. Klik op **Code kopiëren** en plak de code in het veld.

Je wachtwoord typ je alleen op de officiële pagina. De extensie slaat niets op en verstuurt niets.
