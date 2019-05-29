class Router {

    constructor() {
        this.routes = {
            "/": {
                "path": 'index@index',
                "name": "/",
                "title": "BCP_StudentPortal",
                "withAuth": false
            },
            "/forgot-password": {
                "path": 'utils/forgot@index',
                "name": "forgot-password",
                "title": "BCP_StudentPortal | Forgot Password",
                "withAuth": false
            },
            "/create-account": {
                "path": 'usm/registration@index',
                "name": "create-account",
                "title": "BCP_StudentPortal | Create Account",
                "withAuth": true
            },
            "/student": {
                "path": 'usm/student@index',
                "name": "student",
                "title": "BCP_StudentPortal | Student",
                "withAuth": true
            }
        }
        return this;
    }

    call(target) {
        let controller_info = target.route.path.split("@");
        let controller_class = require('./Bootstrap').Controller(controller_info[0], target.app);
        let fnController = controller_info[1];
        window.history.pushState(null, target.route.title, target.route.name);

        if (typeof controller_class[fnController] === "function") {
            controller_class[fnController]();
            if (target.route.withAuth) {
                if (!controller_class['authorized']()) {
                    target.app.redirect('/');
                }

            }
        }



    }
}



const v_Router = new Router();


class Route {

    constructor(c) {
        this.context = c;
    }

    redirect(path = '') {
        const CURRENT_PATH = path === '' ? window.location.pathname : path;
        if (typeof v_Router.routes[CURRENT_PATH] !== 'undefined') {
            var route = v_Router.call({
                'route': v_Router.routes[CURRENT_PATH],
                'app': this,
            });
        } else {
            this.context.body.innerHTML = '<h1>404</h1>'
        }
    }

}


module.exports = function (context) {
    return new Route(context);
}