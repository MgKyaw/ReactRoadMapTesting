/**
 *
 * @param {string} token
 * @returns {Date}
 */

function getTokenExpiryDate(token) {
  if (!token) return null;

  const tokenParts = token.split(".");
  const payload = tokenParts[1];
  const decodedPayload = Buffer.from(payload, "base64").toString();
  const payloadObject = JSON.parse(decodedPayload);
  const expiryDate = new Date(payloadObject.exp * 1000);

  return expiryDate;
}

/**
 *
 * @param {string} token
 * @returns {boolean}
 */

function isTokenExpired(token) {
  const expiryDate = getTokenExpiryDate(token);
  const currentDate = new Date();

  return currentDate > expiryDate;
}

module.exports = { isTokenExpired };