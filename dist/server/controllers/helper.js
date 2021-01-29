"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validationResBody = void 0;

var execute = function execute(value, condition, conditionValue) {
  switch (condition) {
    case 'eq':
      return value === conditionValue;

    case 'neq':
      return value !== conditionValue;

    case 'gt':
      return value > conditionValue;

    case 'gte':
      return value >= conditionValue;

    case 'contains':
      return value.includes(conditionValue);

    default:
      return false;
  }
};

var validationResBody = function validationResBody(message, status, error, field, fieldValue, condition, conditionValue, statusCode, res) {
  return res.status(statusCode).send({
    message: message,
    status: status,
    data: {
      validation: {
        error: error,
        field: field,
        field_value: fieldValue,
        condition: condition,
        condition_value: conditionValue
      }
    }
  });
};

exports.validationResBody = validationResBody;
var _default = execute;
exports["default"] = _default;