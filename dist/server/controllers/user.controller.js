"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validateRule = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _helper = _interopRequireDefault(require("../helper"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _helper2 = _interopRequireWildcard(require("./helper"));

var retrieveUser = function retrieveUser(req, res) {
  var user = _user["default"];
  return res.status(200).send({
    message: 'My Rule-Validation API',
    status: 'success',
    data: user
  });
};

var validateRule = function validateRule(req, res) {
  try {
    var _req$body = req.body,
        rule = _req$body.rule,
        data = _req$body.data;

    if ((rule.field.match(/\./g) || []).length > 1) {
      return (0, _helper["default"])(res);
    } // For array data


    if (data.constructor === Array || typeof data === 'string') {
      if (!data[rule.field]) {
        return res.status(400).send({
          message: "field ".concat(rule.field, " is missing from data."),
          status: 'error',
          data: null
        });
      }

      var result = (0, _helper2["default"])(data[rule.field], rule.condition, rule.condition_value);

      if (result) {
        return (0, _helper2.validationResBody)("field ".concat(rule.field, " successfully validated."), 'success', false, rule.field, data[rule.field], rule.condition, rule.condition_value, 200, res);
      }

      return (0, _helper2.validationResBody)("field ".concat(rule.field, " failed validation."), 'error', true, rule.field, data[rule.field], rule.condition, rule.condition_value, 400, res);
    }

    if ((0, _typeof2["default"])(data) === 'object') {
      // eslint-disable-next-line no-restricted-syntax
      for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
        var iterator = _Object$keys[_i];

        if (rule.field.includes('.')) {
          var arr = rule.field.split('.');
          var field = arr[0];
          var nestedField = arr[arr.length - 1];

          if (iterator === field) {
            // eslint-disable-next-line no-restricted-syntax
            for (var _i2 = 0, _Object$keys2 = Object.keys(data[iterator]); _i2 < _Object$keys2.length; _i2++) {
              var iterator2 = _Object$keys2[_i2];

              if (iterator2 === nestedField) {
                var _result = (0, _helper2["default"])(data[iterator][iterator2], rule.condition, rule.condition_value);

                if (_result) {
                  return (0, _helper2.validationResBody)("field ".concat(rule.field, " successfully validated."), 'success', false, rule.field, data[iterator][iterator2], rule.condition, rule.condition_value, 200, res);
                }

                return (0, _helper2.validationResBody)("field ".concat(rule.field, " failed validation."), 'error', true, rule.field, data[iterator][iterator2], rule.condition, rule.condition_value, 400, res);
              }
            }
          }
        } else if (iterator === rule.field) {
          var _result2 = (0, _helper2["default"])(data[iterator], rule.condition, rule.condition_value);

          if (_result2) {
            return (0, _helper2.validationResBody)("field ".concat(rule.field, " successfully validated."), 'success', false, rule.field, data[iterator], rule.condition, rule.condition_value, 200, res);
          }

          return (0, _helper2.validationResBody)("field ".concat(rule.field, " failed validation."), 'error', true, rule.field, data[iterator], rule.condition, rule.condition_value, 400, res);
        }
      }

      return res.status(400).send({
        message: "field ".concat(rule.field, " is missing from data."),
        status: 'error',
        data: null
      });
    }

    return (0, _helper["default"])(res);
  } catch (error) {
    console.error(error);
    return (0, _helper["default"])(res);
  }
};

exports.validateRule = validateRule;
var _default = retrieveUser;
exports["default"] = _default;