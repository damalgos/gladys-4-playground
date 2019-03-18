const { getBridges } = require('./light.getBridges');

/**
 * @description Add ability to control a Philips Hue light
 * @param {Object} gladys - Gladys instance.
 * @param {Object} hueClient - Philips Hue Client.
 * @example
 * const exampleLightHandler = new ExampleLightHandler(gladys, client);
 */
const PhilipsHueLightHandler = function PhilipsHueLightHandler(gladys, hueClient) {
  this.gladys = gladys;
  this.hueClient = hueClient;
};

PhilipsHueLightHandler.prototype.getBridges = getBridges;

module.exports = PhilipsHueLightHandler;