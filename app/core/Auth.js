class Auth {

    constructor() {

    }

    setAuth(credentials) {
        sessionStorage.setItem('_sp_ap', JSON.stringify(credentials));
    }

    getAuth() {
        return sessionStorage.getItem('_sp_ap');
    }
}

module.exports = function() { return new Auth(); }