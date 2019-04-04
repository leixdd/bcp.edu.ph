"use strict";

var _Core = require("./core/Core.js");

var app = new _Core.Core();
app.context = 'app';
console.log(app.context['index'].target.render());