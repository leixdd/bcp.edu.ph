const controller = require('../../core/Controller.js');

class Student extends controller {
    constructor(app) {
        super(app);
        this.arguments_ = {}
    }

    index() {
        console.log('a');
        //this.view("usm/registration", this.arguments_);
    }
}

module.exports =  function() { return Student };