const Controller = require('../core/Controller');
const Http = require('../core/Http');
const Auth = require('../core/Auth')();
const Flash = require('../core/Flash');

class Index extends Controller {

    constructor(app) {
        super(app)
        this._arguments = {};
        this._styles = [
                'roboto/roboto.css',
                'css/bootstrap.min.css',
                'material/material.css',
                'css/font-awesome.min.css',
                'plugins/node-waves/waves.css',
                'plugins/animate-css/animate.css',
                'css/style.css',
                'css/bcp.css'
            ],
            this._scripts = [
                'js/wow.min.js',
                'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js',
                'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js',
                'js/bootstrap.min.js',
                'js/instafeed.min.js',
                'js/home.js',
                'plugins/node-waves/waves.js',
                'js/admin.js',
            ]
    }

    index() {
        this.view("index", this._arguments);
    }



};

module.exports = function() {
    return Index;
}