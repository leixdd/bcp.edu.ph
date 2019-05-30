const controller = require('../../core/Controller.js');

class Registration extends controller {
    constructor(app) {
        super(app);
        this.arguments_ = {}
    }

    index() {
        this.view("usm/registration", this.arguments_);
    }
}

module.exports =  function() { return Registration };