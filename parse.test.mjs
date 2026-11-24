import { test } from "node:test";
import assert from "node:assert/strict";
import { extractCode } from "./parse.js";

const CODE = "aB3-dE_f.g~H%2Bij";

test("each brand scheme yields the raw code", () => {
  for (const s of ["mymap", "mymacsdk", "mymdssdk", "mymopsdk", "mymvxsdk"]) {
    assert.equal(extractCode(`${s}://oauth2redirect/nl?code=${CODE}&scope=openid%20profile`), CODE);
  }
});

test("code is found after other params", () => {
  assert.equal(extractCode(`mymap://oauth2redirect/fr?scope=openid&code=${CODE}&iss=x`), CODE);
});

test("anything else is rejected", () => {
  for (const url of [
    `https://idpcvs.peugeot.com/oauth2redirect/nl?code=${CODE}`, // wrong scheme
    `evil://oauth2redirect/nl?code=${CODE}`,                      // unknown scheme
    `mymap://other/nl?code=${CODE}`,                              // wrong path
    `mymap://oauth2redirect/nl?scope=openid`,                     // no code
    `mymap://oauth2redirect/nl?error=access_denied`,
    `mymap://oauth2redirect/nl?code=<script>alert(1)</script>`,   // bad chars
    `mymap://oauth2redirect/nl?code=short`,                       // too short
    `mymap://oauth2redirect/nl?xcode=${CODE}`,
    "",
    undefined,
  ]) {
    assert.equal(extractCode(url), null, String(url));
  }
});
