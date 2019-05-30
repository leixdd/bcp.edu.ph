
var opts = {
    data: '',
    async: true,
};

const host = "http://127.0.0.1:8422/api/";

module.exports.request = function (type, url, opts = {}) {

    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(type);
    return new Promise((resolve, reject) => {
        $.ajax({
            type: type,
            data: JSON.stringify(opts.data),
            dataType: 'json',
            async: opts.async,
            url: host.concat(url),
            error: (xhr, status, error) => {
                reject(xhr);
            },
            success: (data) => {
                resolve(data);
            }
        });
    });
}
