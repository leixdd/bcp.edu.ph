module.exports = function (_args) {
    return /*template*/`
        <div class="row dp ml-3 mr-3">
            <div class="">
                <div class="col-12">
                    <div class="card border-primary ">
                        <div class="card-header back-primary text-white text-center">Create Account</div>
                        <div class="card-body">
                            <form id="spForm" class="p-2">

                                <div class="form-group">
                                    <label for="student_no"><b>Student Number</b></label>
                                    <input type="text" id="student_no" class="form-control" required />
                                </div>

                                <div class="form-group">
                                    <label for="email"><b>Email Address</b></label>
                                    <input type="email" id="email" class="form-control" required />
                                </div>

                                <div class="form-group">
                                    <label for="password"><b>Password</b></label>
                                    <input type="password" id="password" class="form-control" required />
                                </div>
                                
                                <div class="form-group">
                                    <label for="password"><b>Re-Type Password</b></label>
                                    <input type="password" id="repassword" class="form-control" required />
                                </div>

                                <a href="#" class="btn back-primary text-white form-control">SUBMIT</a>
                                
                                <hr>
                                
                                <div class="d-flex justify-content-center">
                                    <router link='/' class="txt-primary"><small>Already have account?</small></router>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}