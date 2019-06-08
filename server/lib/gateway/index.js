const GladysGatewayClient = require('@gladysassistant/gladys-gateway-js');
const WebCrypto = require('node-webcrypto-ossl');
const getConfig = require('../../utils/getConfig');
const logger = require('../../utils/logger');

const serverUrl = getConfig().gladysGatewayServerUrl;
const cryptoLib = new WebCrypto();

const { backup } = require('./gateway.backup');
const { handleNewMessage } = require('./gateway.handleNewMessage');
const { login } = require('./gateway.login');
const { loginTwoFactor } = require('./gateway.loginTwoFactor');
const { init } = require('./gateway.init');
const { getBackups } = require('./gateway.getBackups');
const { getLatestGladysVersion } = require('./gateway.getLatestGladysVersion');
const { downloadBackup } = require('./gateway.downloadBackup');
const { restoreBackup } = require('./gateway.restoreBackup');

const Gateway = function Gateway(variable, event, system, sequelize, config) {
  this.variable = variable;
  this.event = event;
  this.system = system;
  this.sequelize = sequelize;
  this.config = config;
  this.GladysGatewayClient = GladysGatewayClient;
  this.gladysGatewayClient = new GladysGatewayClient({ cryptoLib, serverUrl, logger });
};

Gateway.prototype.backup = backup;
Gateway.prototype.handleNewMessage = handleNewMessage;
Gateway.prototype.login = login;
Gateway.prototype.loginTwoFactor = loginTwoFactor;
Gateway.prototype.init = init;
Gateway.prototype.getBackups = getBackups;
Gateway.prototype.getLatestGladysVersion = getLatestGladysVersion;
Gateway.prototype.downloadBackup = downloadBackup;
Gateway.prototype.restoreBackup = restoreBackup;

module.exports = Gateway;
