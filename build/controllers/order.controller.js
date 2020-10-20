"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOrderByID = exports.updateOrderByID = exports.getOrderByID = exports.createOrder = exports.getOrders = void 0;

var _orders = _interopRequireDefault(require("../models/orders.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getOrders = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var orders;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _orders["default"].find();

          case 2:
            orders = _context.sent;
            res.status(200).json(orders);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getOrders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getOrders = getOrders;

var createOrder = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, idUser, idProduct, status, newOrder, savedOrder;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, idUser = _req$body.idUser, idProduct = _req$body.idProduct, status = _req$body.status;
            newOrder = new _orders["default"]({
              idUser: idUser,
              idProduct: idProduct,
              status: status
            });
            _context2.next = 4;
            return newOrder.save();

          case 4:
            savedOrder = _context2.sent;
            res.status(201).json(savedOrder);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createOrder = createOrder;

var getOrderByID = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var order;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _orders["default"].findById(req.params.id);

          case 2:
            order = _context3.sent;
            res.status(200).json(order);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getOrderByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOrderByID = getOrderByID;

var updateOrderByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedOrder;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _orders["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 2:
            updatedOrder = _context4.sent;
            res.status(200).json(updatedOrder);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateOrderByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateOrderByID = updateOrderByID;

var deleteOrderByID = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _orders["default"].findByIdAndDelete(req.params.id);

          case 2:
            res.status(200).json({
              message: "The order was deleted successfully."
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteOrderByID(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteOrderByID = deleteOrderByID;