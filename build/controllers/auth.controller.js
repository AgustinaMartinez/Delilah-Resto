"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

var _users = _interopRequireDefault(require("../models/users.model"));

var _roles = _interopRequireDefault(require("../models/roles.model"));

var _config = _interopRequireDefault(require("../config/config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, fullname, username, email, password, neighborhood, role, newUser, foundRole, _role, emailFound, usernameFound, savedUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, fullname = _req$body.fullname, username = _req$body.username, email = _req$body.email, password = _req$body.password, neighborhood = _req$body.neighborhood, role = _req$body.role;
            _context.t0 = _users["default"];
            _context.t1 = fullname;
            _context.t2 = username;
            _context.t3 = email;
            _context.next = 7;
            return _users["default"].encryptPassword(password);

          case 7:
            _context.t4 = _context.sent;
            _context.t5 = neighborhood;
            _context.t6 = {
              fullname: _context.t1,
              username: _context.t2,
              email: _context.t3,
              password: _context.t4,
              neighborhood: _context.t5
            };
            newUser = new _context.t0(_context.t6);

            if (!role) {
              _context.next = 18;
              break;
            }

            _context.next = 14;
            return _roles["default"].find({
              name: {
                $in: role
              }
            });

          case 14:
            foundRole = _context.sent;
            newUser.role = foundRole.map(function (role) {
              return role._id;
            });
            _context.next = 22;
            break;

          case 18:
            _context.next = 20;
            return _roles["default"].findOne({
              name: "user"
            });

          case 20:
            _role = _context.sent;
            newUser.role = [_role._id];

          case 22:
            _context.next = 24;
            return _users["default"].findOne({
              email: req.body.email
            });

          case 24:
            emailFound = _context.sent;
            _context.next = 27;
            return _users["default"].findOne({
              username: req.body.username
            });

          case 27:
            usernameFound = _context.sent;

            if (!(!emailFound && !usernameFound)) {
              _context.next = 37;
              break;
            }

            _context.next = 31;
            return newUser.save();

          case 31:
            savedUser = _context.sent;
            console.log(savedUser);
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].JWT.PRIVATE_KEY, {
              expiresIn: _config["default"].JWT.EXPIRES_TIME
            });
            res.status(200).json({
              token: token
            });
            _context.next = 39;
            break;

          case 37:
            res.status(400).json({
              message: "User already exists."
            });
            console.error(error);

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var usernameFound, emailFound, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _users["default"].findOne({
              username: req.body.username
            }).populate("role");

          case 2:
            usernameFound = _context2.sent;

            if (usernameFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Username not found."
            }));

          case 5:
            _context2.next = 7;
            return _users["default"].findOne({
              email: req.body.email
            }).populate("role");

          case 7:
            emailFound = _context2.sent;

            if (emailFound) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Email not found."
            }));

          case 10:
            _context2.next = 12;
            return _users["default"].comparePassword(req.body.password, emailFound.password);

          case 12:
            matchPassword = _context2.sent;

            if (!matchPassword) {
              res.status(401).json({
                token: null,
                message: "Invalid password."
              });
            } else {
              console.log(usernameFound, emailFound);
              token = _jsonwebtoken["default"].sign({
                id: usernameFound._id
              }, _config["default"].JWT.PRIVATE_KEY, {
                expiresIn: _config["default"].JWT.EXPIRES_TIME
              });
              res.json({
                token: token
              });
            }

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;