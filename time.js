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

const validTo = 1695946600000;

const expireDate1 = new Date(validTo).toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/New_York",
});


const expireDate2 = new Date(validTo).toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});
