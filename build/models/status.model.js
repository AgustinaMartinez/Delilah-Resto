"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var statusSchema = new _mongoose.Schema({
  name: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Status', statusSchema);

exports["default"] = _default;