"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _helper = _interopRequireDefault(require("../helper"));

var _helper2 = _interopRequireWildcard(require("./helper"));

var dataValidation = function dataValidation(req, res, next) {
  try {
    var _req$body = req.body,
        rule = _req$body.rule,
        data = _req$body.data;

    if ((0, _typeof2["default"])(req.body) !== 'object' && req.body === null || req.body.constructor === Array) {
      return (0, _helper["default"])(res);
    } // eslint-disable-next-line no-restricted-syntax


    for (var _i = 0, _Object$keys = Object.keys(req.body); _i < _Object$keys.length; _i++) {
      var bodyField = _Object$keys[_i];
      if (!(bodyField === 'rule' || bodyField === 'data')) return (0, _helper["default"])(res);
    }

    if (!rule && rule !== 0 && rule !== null && rule !== '') {
      return (0, _helper2["default"])('rule', res);
    }

    if (!data) {
      return (0, _helper2["default"])('data', res);
    }

    if ((0, _typeof2["default"])(rule) !== 'object' || rule === null || rule.constructor === Array) {
      return res.status(400).send({
        message: 'rule should be an object.',
        status: 'error',
        data: null
      });
    }

    if (!rule.field) {
      return (0, _helper2["default"])('rule.field', res);
    }

    if (!rule.condition) {
      return (0, _helper2["default"])('rule.condition', res);
    }

    if (!rule.condition_value) {
      return (0, _helper2["default"])('rule.condition_value', res);
    }

    var validCondition = ['eq', 'neq', 'gt', 'gte', 'contains'];

    if (!validCondition.includes(rule.condition)) {
      return (0, _helper2.dataTypeResBody)('rule.condition', 'eq, neq, gt, gte or contains', res);
    }

    if ((0, _typeof2["default"])(data) !== 'object' || rule === null) {
      if (data.constructor !== Array) {
        if (typeof data !== 'string') {
          return (0, _helper2.dataTypeResBody)('data', 'an object, array or String', res);
        }
      }
    }

    return next();
  } catch (error) {
    return (0, _helper["default"])(res);
  }
};

var _default = dataValidation;
exports["default"] = _default;