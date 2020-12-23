"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("".concat(_config.envVariables.host, "+srv://").concat(_config.envVariables.user, ":").concat(_config.envVariables.pass, "@node-api-rest.fdfqz.mongodb.net/").concat(_config.envVariables.name, "?retryWrites=").concat(_config.envVariables.retryWrites, "&w=").concat(_config.envVariables.user), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log("Database has been connected successfully.");
})["catch"](function (error) {
  return console.log(error);
});