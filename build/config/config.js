"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.envVariables = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var envVariables = {
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  port: process.env.PORT,
  retryWrites: process.env.DB_RETRY_WRITES,
  w: process.env.DB_W
};
exports.envVariables = envVariables;
var config = {
  JWT: {
    PRIVATE_KEY: 'secret',
    EXPIRES_TIME: 86400 //24 hours

  }
};
var _default = config;
exports["default"] = _default;