import { Router } from './Route.js';

const v_Router = new Router();

export class Routes {

    constructor() {
        return this;
    }

    redir(context) {
        let CURRENT_PATH = window.location.pathname;

        if (CURRENT_PATH == '/index.html') {
            CURRENT_PATH = "/";
        }

        var route = v_Router[CURRENT_PATH].path;

        if(!route) {
            return false; //404
        } else {
            context.innerHTML = route.render();
            if(typeof route.synapse_function_connect === "function") {
                route.synapse_function_connect();
            }
            window.history.pushState("", "", '/#' + v_Router[CURRENT_PATH].name);
        }
        
    }
}

