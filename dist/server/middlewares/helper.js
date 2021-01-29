"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dataTypeResBody = void 0;

var requiredResBody = function requiredResBody(value, res) {
  return res.status(400).send({
    message: "".concat(value, " is required."),
    status: 'error',
    data: null
  });
};

var dataTypeResBody = function dataTypeResBody(value, type, res) {
  return res.status(400).send({
    message: "".concat(value, " should be ").concat(type, "."),
    status: 'error',
    data: null
  });
};

exports.dataTypeResBody = dataTypeResBody;
var _default = requiredResBody;
exports["default"] = _default;