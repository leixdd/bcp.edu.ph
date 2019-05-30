
export function Controller (path, app) {
    return new (require('../controllers/' + path + '.controller.js')())(app);
};



