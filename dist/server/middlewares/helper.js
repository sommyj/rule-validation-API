Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.dataTypeResBody = void 0;

const requiredResBody = function requiredResBody(value, res) {
  return res.status(400).send({
    message: ''.concat(value, ' is required.'),
    status: 'error',
    data: null,
  });
};

const dataTypeResBody = function dataTypeResBody(value, type, res) {
  return res.status(400).send({
    message: ''.concat(value, ' should be ').concat(type, '.'),
    status: 'error',
    data: null,
  });
};

exports.dataTypeResBody = dataTypeResBody;
const _default = requiredResBody;
exports.default = _default;
