let args = {};

export function view(filename, args) {
    return require('../views/' + filename + '.synapse.js').template(args);
}

export let config = {
    'host' : 'http://api-admission.bcp.edu.ph/',
}

export function generateRecaptcha() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
    document.getElementById('app-body').append(s);
}