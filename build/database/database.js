"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb+srv://acamica:acamica@node-api-rest.fdfqz.mongodb.net/delilahresto?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log("Database has been connected successfully.");
})["catch"](function (error) {
  return console.log(error);
});