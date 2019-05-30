var _controller = class Controller {

    constructor(app) {
        this.context = app.context;
        this.context.body.innerHTML = ""; //cleaning body
        this._styles = [];
        this._scripts = [];
    }

    generateStyles() {

        this._styles.forEach((style) => {
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = style;
            this.context.head.appendChild(link);
        });

    }

    generateScripts() {
        this._scripts.forEach((script) => {
            let link = document.createElement('script');
            link.src = script;
            this.context.scripts.after(link);
        });
    }

    view(filename, args) {
        this.render(require('../views/' + filename + '.synapse.js')(args));
    }

    render(view) {

        this.generateStyles()
        this.generateScripts();

        this.context.body.innerHTML = view;
        console.log(this.context);
        this.navigation(this.context);
    }

    navigation(_context) {
        const links = document.querySelectorAll('router[link]');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                window.history.pushState("", "", links[i].getAttribute('link').toString());
                _context.redirect();
            });
        }
    }

    move(path) {
        this.context.redirect(path);
    }

    authorized() {
        if (!require('../core/Auth')().getAuth()) {
            return false;
        };
        return true;
    }


}

module.exports = _controller;