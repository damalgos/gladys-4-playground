const { setImage } = require('./camera.setImage');
const { getImage } = require('./camera.getImage');
const { get } = require('./camera.get');

const Camera = function Camera(stateManager, deviceManager) {
  this.stateManager = stateManager;
  this.deviceManager = deviceManager;
};

Camera.prototype.setImage = setImage;
Camera.prototype.getImage = getImage;
Camera.prototype.get = get;

module.exports = Camera;
