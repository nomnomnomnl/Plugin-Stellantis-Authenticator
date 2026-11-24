// Redirect schemes of the Stellantis mobile apps (client/psa/configs.json upstream):
// Peugeot, Citroën, DS, Opel, Vauxhall.
const REDIRECT = /^(mymap|mymacsdk|mymdssdk|mymopsdk|mymvxsdk):\/\/oauth2redirect\/[^?#]*\?(.*)$/;
// Kept percent-encoded on purpose: the integration puts the code into a query
// string as pasted (utils.extract_oauth_code upstream).
const CODE = /^[A-Za-z0-9._~%-]{8,4096}$/;

/** The OAuth code from a Stellantis app redirect URL, or null for anything else. */
export function extractCode(url) {
  const m = REDIRECT.exec(url || "");
  if (!m) return null;
  for (const part of m[2].split(/[&#]/)) {
    if (part.startsWith("code=")) {
      const code = part.slice(5);
      return CODE.test(code) ? code : null;
    }
  }
  return null;
}
