module.exports = function(args) {
    return /*template*/`
        <div class="row dp ml-3 mr-3">
                <div class="">
                    <div class="col-12">
                        <div class="card border-primary ">
                            <div class="card-header back-primary text-white text-center">Forgot Password</div>
                            <div class="card-body">
                                <form id="spForm" class="p-2">
                                    <div class="form-group">
                                        <label for="email"><b>Email Address</b></label>
                                        <input type="email" id="email" class="form-control" required/>
                                    </div>
                                    <a href="#" class="btn back-primary text-white form-control">RECOVER ACCOUNT</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
}