"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _user = _interopRequireDefault(require("./server/routes/user.routes"));

// Set up the express app
var app = (0, _express["default"])(); // Log requests to the console

app.use((0, _morgan["default"])('dev'));
var corsOptions = {
  origin: '*'
};
app.use((0, _cors["default"])(corsOptions)); // parse requests of content-type - application/json

app.use(_bodyParser["default"].json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // routes

(0, _user["default"])(app); // // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('/', (req, res) => res.status(200).send({
//   message: 'Welcome to Rule validation" application',
// }));

var _default = app;
exports["default"] = _default;