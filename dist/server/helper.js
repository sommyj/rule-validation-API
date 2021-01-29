Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const invalidPayLoadResBody = function invalidPayLoadResBody(res) {
  return res.status(400).send({
    message: 'Invalid JSON payload passed.',
    status: 'error',
    data: null,
  });
};

const _default = invalidPayLoadResBody;
exports.default = _default;
