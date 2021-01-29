"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _app = _interopRequireDefault(require("../app"));

// This will be our application entry. We'll setup our server here.
// The express app we just created
var debug = (0, _debug["default"])('http');
var port = parseInt(process.env.PORT, 10) || 8080;

_app["default"].set('port', port);

var server = _http["default"].createServer(_app["default"]);

server.listen(port, function () {
  debug("server running on port ".concat(port));
});