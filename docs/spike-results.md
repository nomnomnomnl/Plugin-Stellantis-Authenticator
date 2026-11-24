# Spike-resultaten

De maintainer logt zelf in met een eigen account (NL). Laad de extensie uitgepakt en volg de login-link uit de manual-stap in Home Assistant.

| # | Vraag | Chrome | Firefox | Notities |
|---|---|---|---|---|
| S1 | Is de laatste stap een HTTP 302 met `Location: mymap://…`? | ✅ | ✅ | Afgeleid: webRequest vangt de redirect op (2026-11-24) |
| S3 | Vangt `onBeforeRedirect` of `onHeadersReceived` de redirect op met alleen host_permissions? | ✅ | ✅ | Niet vastgesteld welke van de twee listeners afging |
| S4 | Opent `code.html` met de code in hetzelfde tabblad (geen dialoog "externe app openen")? | ✅ | ✅ | Na "Continue" opent de codepagina direct |
| S7 | Laadt hetzelfde manifest in Firefox, en verschijnen de host-permissies bij installatie? | – | ✅ | Werkt met hetzelfde manifest |
| E2E | Geplakte code levert een werkende entry op; reauth werkt ook | ✅ | ✅ | Setup werkt in beide browsers; reauth getest in één browser (zelfde route) (2026-11-24) |

**Go/no-go:** go voor Chrome en Firefox, setup en reauth (2026-11-24). Nog geen store-release (besluit maintainer).
