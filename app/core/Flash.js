//Flashing message to client -> Requires Boostrap 4 [Dependency]

module.exports.flash = function (type, id, message) {

    let template = ``;

    switch (type) {

        case 'error':

            template = /*html*/`
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Opps!</strong> ${ message }
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;
            break;

        case 'success':

            template = /*html*/`
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> ${ message }
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;
            break;

        default:
            break;
    }

    document.getElementById(id).innerHTML = template;
}