const controller = require('../../core/Controller.js');

class Forgot extends controller{
    constructor(app) {
        super(app);
        this.arguments_ = {}
    }
    
    index() {
        this.view('util/forgot-password', this.arguments_); 
    }
}

module.exports = function () { return Forgot; }