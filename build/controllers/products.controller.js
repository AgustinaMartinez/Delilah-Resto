"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductByID = exports.updateProductByID = exports.getProductByID = exports.createProduct = exports.getProducts = void 0;

var _products = _interopRequireDefault(require("../models/products.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _products["default"].find();

          case 2:
            products = _context.sent;
            res.status(200).json(products);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var createProduct = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, description, unitPrice, imgURL, newProduct, savedProduct;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, description = _req$body.description, unitPrice = _req$body.unitPrice, imgURL = _req$body.imgURL;
            newProduct = new _products["default"]({
              description: description,
              unitPrice: unitPrice,
              imgURL: imgURL
            });
            _context2.next = 4;
            return newProduct.save();

          case 4:
            savedProduct = _context2.sent;
            res.status(201).json(savedProduct);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getProductByID = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _products["default"].findById(req.params.id);

          case 2:
            product = _context3.sent;
            res.status(200).json(product);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductByID = getProductByID;

var updateProductByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedProduct;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _products["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 2:
            updatedProduct = _context4.sent;
            res.status(200).json(updatedProduct);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProductByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProductByID = updateProductByID;

var deleteProductByID = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _products["default"].findByIdAndDelete(req.params.id);

          case 2:
            res.status(200).json({
              message: "The product was deleted successfully."
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProductByID(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProductByID = deleteProductByID;