 keys.forEach((key) => {
    // Convert each key to PEM
    const key_id = key.kid;
    const modulus = key.n;
    const exponent = key.e;
    const key_type = key.kty;
    const jwk = { kty: key_type, n: modulus, e: exponent };
    const temp_pem = jwkToPem(jwk);
    pems[key_id] = temp_pem;
  });
const expireDate = new Date(validTo).toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/New_York",
});
