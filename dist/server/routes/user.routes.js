"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireWildcard(require("../controllers/user.controller"));

var _requiredData = _interopRequireDefault(require("../middlewares/requiredData"));

var userRoutes = function userRoutes(app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });
  app.get('/', _user["default"]);
  app.post('/validate-rule', _requiredData["default"], _user.validateRule);
};

var _default = userRoutes;
exports["default"] = _default;