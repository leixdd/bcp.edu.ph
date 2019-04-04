import { Index } from '../controllers/index.js'
import { SHS } from '../controllers/shs.js';
import { College } from '../controllers/college.js';

export class Router {

    constructor() {
        return {
            "/": {
                "path": new Index(),
                "name": "index"
            },
            "/shs" : {
                "path": new SHS(),
                "name": "seniorhigh"
            },
            "/college" : {
                "path" : new College(),
                "name" : "college"
            }
        }
    }
}