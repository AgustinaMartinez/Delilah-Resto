"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNeighborhoodByID = exports.updateNeighborhoodByID = exports.getNeighborhoodByID = exports.createNeighborhood = exports.getNeighborhoods = void 0;

var _neighborhoods = _interopRequireDefault(require("../models/neighborhoods.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getNeighborhoods = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var neighborhoods;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _neighborhoods["default"].find();

          case 2:
            neighborhoods = _context.sent;
            res.status(200).json(neighborhoods);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getNeighborhoods(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getNeighborhoods = getNeighborhoods;

var createNeighborhood = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var name, newNeighborhood, savedNeighborhood;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = req.body.name;
            newNeighborhood = new _neighborhoods["default"]({
              name: name
            });
            _context2.next = 4;
            return newNeighborhood.save();

          case 4:
            savedNeighborhood = _context2.sent;
            res.status(201).json(savedNeighborhood);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createNeighborhood(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNeighborhood = createNeighborhood;

var getNeighborhoodByID = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var neighborhood;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _neighborhoods["default"].findById(req.params.id);

          case 2:
            neighborhood = _context3.sent;
            res.status(200).json(neighborhood);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getNeighborhoodByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getNeighborhoodByID = getNeighborhoodByID;

var updateNeighborhoodByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedNeighborhood;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _neighborhoods["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 2:
            updatedNeighborhood = _context4.sent;
            res.status(200).json(updatedNeighborhood);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateNeighborhoodByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateNeighborhoodByID = updateNeighborhoodByID;

var deleteNeighborhoodByID = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _neighborhoods["default"].findByIdAndDelete(req.params.id);

          case 2:
            res.status(200).send("The neighborhood was deleted successfully.");

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteNeighborhoodByID(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteNeighborhoodByID = deleteNeighborhoodByID;