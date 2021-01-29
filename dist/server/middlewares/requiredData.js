const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));

const _helper = _interopRequireWildcard(require('./helper'));

const dataValidation = function dataValidation(req, res, next) {
  const _req$body = req.body;
  const { rule } = _req$body;
  const { data } = _req$body;

  if ((0, _typeof2.default)(req.body) !== 'object' && req.body === null || req.body.constructor === Array) {
    return res.status(400).send({
      message: 'Invalid JSON payload passed.',
      status: 'error',
      data: null,
    });
  }

  if (!rule) {
    return (0, _helper.default)('rule', res);
  }

  if (!data) {
    return (0, _helper.default)('data', res);
  }

  if ((0, _typeof2.default)(rule) !== 'object' || rule === null) {
    return res.status(400).send({
      message: 'rule should be an object.',
      status: 'error',
      data: null,
    });
  }

  if (!rule.field) {
    return (0, _helper.default)('rule.field', res);
  }

  if (!rule.condition) {
    return (0, _helper.default)('rule.condition', res);
  }

  if (!rule.condition_value) {
    return (0, _helper.default)('rule.condition_value', res);
  }

  const validCondition = ['eq', 'neq', 'gt', 'gte', 'contains'];

  if (!validCondition.includes(rule.condition)) {
    return (0, _helper.dataTypeResBody)('rule.condition', 'eq, neq, gt, gte or contains', res);
  }

  if ((0, _typeof2.default)(data) !== 'object' || rule === null) {
    if (data.constructor !== Array) {
      if (typeof data !== 'string') {
        return (0, _helper.dataTypeResBody)('data', 'an object, array or String', res);
      }
    }
  }

  return next();
};

const _default = dataValidation;
exports.default = _default;
