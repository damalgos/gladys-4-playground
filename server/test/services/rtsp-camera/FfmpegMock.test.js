const { fake } = require('sinon');
const EventEmitter = require('events');

const FfmpegMock = (path) => {
  let func = new EventEmitter();
  func = Object.assign(func, {
    format: fake.returns(func),
    outputOptions: fake.returns(func),
    output: (stream) => {
      stream.write('image');
      return func;
    },
    run: () => {
      func.emit('end');
      return func;
    },
  });
  return func;
};
module.exports = FfmpegMock;
