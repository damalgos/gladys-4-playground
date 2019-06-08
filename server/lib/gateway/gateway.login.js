const WebCrypto = require('node-webcrypto-ossl');
const getConfig = require('../../utils/getConfig');
const logger = require('../../utils/logger');

const serverUrl = getConfig().gladysGatewayServerUrl;
const cryptoLib = new WebCrypto();

/**
 * @description Login to Gladys Gateway.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @example
 * login('tony.stark@test.fr', 'warmachine123');
 */
async function login(email, password) {
  // if we're already connected to the Gladys Gateway, we disconnect.
  if (this.gladysGatewayClient) {
    this.gladysGatewayClient.disconnect();
  }
  // create a new instance of the client
  this.gladysGatewayClient = new this.GladysGatewayClient({ cryptoLib, serverUrl, logger });
  // We login with email/password to get two factor token
  return this.gladysGatewayClient.login(email, password);
}

module.exports = {
  login,
};
