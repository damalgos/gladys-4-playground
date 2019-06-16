const { expect } = require('chai');
const { fake, assert } = require('sinon');
const FfmpegMock = require('./FfmpegMock.test');
const RtspCameraManager = require('../../../services/rtsp-camera/lib');

const gladys = {
  config: {
    tempFolder: './.tmp',
  },
  device: {
    camera: {
      setImage: fake.resolves(null),
    },
  },
};

const device = {
  id: 'a6fb4cb8-ccc2-4234-a752-b25d1eb5ab6b',
  selector: 'my-camera',
  params: [
    {
      name: 'CAMERA_URL',
      value: 'test',
    },
  ],
};

describe('RtspCameraManager commands', () => {
  const rtspCameraManager = new RtspCameraManager(gladys, FfmpegMock, 'de051f90-f34a-4fd5-be2e-e502339ec9bc');
  it('should getImage', async () => {
    const image = await rtspCameraManager.getImage(device);
    expect(image).to.equal('image/png;base64,aW1hZ2U=');
  });
  it('should poll', async () => {
    await rtspCameraManager.poll(device);
    assert.calledWith(gladys.device.camera.setImage, 'my-camera', 'image/png;base64,aW1hZ2U=');
  });
});
