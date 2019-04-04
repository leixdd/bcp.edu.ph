"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = void 0;

var _index = require("../views/index");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = function Core(appcomponent) {
  _classCallCheck(this, Core);

  this.context = document.getElementById(appcomponent);
  this.routes = {
    index: {
      path: '/',
      target: new _index.Index()
    }
  };
};

exports.Core = Core;