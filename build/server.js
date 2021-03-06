"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _roles = require("./controllers/roles.controller");

var _neighborhood = _interopRequireDefault(require("./routes/neighborhood.route"));

var _auth = _interopRequireDefault(require("./routes/auth.route"));

var _user = _interopRequireDefault(require("./routes/user.route"));

var _product = _interopRequireDefault(require("./routes/product.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

var _status = _interopRequireDefault(require("./routes/status.route"));

var _config = require("./config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Inizialization
var app = (0, _express["default"])();
(0, _roles.createRoles)(); // Middlewares

app.use((0, _morgan["default"])('dev')); // It shows in console the requests made from Insomnia

app.use((0, _express.json)()); // It understands json files

console.log(_config.envVariables); //Settings

app.set('port', _config.envVariables.port); //Routes

app.use('/neighborhoods', _neighborhood["default"]);
/*http://localhost:3000/neighborhoods*/

app.use('/auth', _auth["default"]);
/*http://localhost:3000/auth*/

app.use('/users', _user["default"]);
/*http://localhost:3000/users*/

app.use('/products', _product["default"]);
/*http://localhost:3000/products*/

app.use('/orders', _order["default"]);
/*http://localhost:3000/orders*/

app.use('/status', _status["default"]);
/*http://localhost:3000/status*/

app.use('/', function (req, res) {
  res.json('Welcome to the Delilah Resto API REST!');
});
/*http://localhost:3000/home*/

var _default = app;
exports["default"] = _default;