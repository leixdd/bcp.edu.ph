export class Core {
    
    constructor(appcomponent) {
        this.context = {
            body : document.getElementById(appcomponent),
            head : document.querySelector('head'),
            scripts : document.querySelector('logics')
        };
    }
}
