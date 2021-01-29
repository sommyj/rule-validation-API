"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var invalidPayLoadResBody = function invalidPayLoadResBody(res) {
  return res.status(400).send({
    message: 'Invalid JSON payload passed.',
    status: 'error',
    data: null
  });
};

var _default = invalidPayLoadResBody;
exports["default"] = _default;