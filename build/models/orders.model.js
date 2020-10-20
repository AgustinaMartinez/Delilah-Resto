"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var orderSchema = new _mongoose.Schema({
  idUser: [{
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  }],
  totalPrice: Number,
  status: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Order', orderSchema);

exports["default"] = _default;