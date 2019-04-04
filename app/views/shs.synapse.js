export function template(arguments_) {
    return /*html*/`
        <div class="container-fluid">

            <div class="col-12 text-center txt-primary pt-2">
                <h2 class="display-4">SENIOR HIGH SCHOOL</h2>
                <h6>PRE - ADMISSION</h6>
            </div>
            
            <div class="row pt-5 pb-5">
                <div class="col-6 d-none d-sm-block">
                    <img src="https://i.imgur.com/y7wdOaW.jpg" class="img-fluid"/>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="card border-primary">
                        <div class="card-header back-primary text-white">SHS Pre-Registration Form for SY 2019-2020</div>
                        <div class="card-body">
                            <form id="shsForm">

                                <div class="form-group">
                                    <label>Learner Reference Number (LRN) <span class="text-danger">*</span></label>
                                    <input type="number" id="lrn" class="form-control" required/>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 col-xs-12">
                                        <div class="form-group">
                                            <label>First Name<span class="text-danger">*</span></label>
                                            <input type="text" id="fname" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12">
                                        <div class="form-group">
                                            <label>Middle Name</label>
                                            <input type="text" id="mname" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12">
                                        <div class="form-group">
                                            <label>Last Name<span class="text-danger">*</span></label>
                                            <input type="text" id="lname" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Address<span class="text-danger">*</span></label>
                                            <input type="text" id="address" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Address Line 2</label>
                                            <input type="text" id="address2" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>City<span class="text-danger">*</span></label>
                                            <input type="text" id="city" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>State / Province <span class="text-danger">*</span></label>
                                            <input type="text" id="state" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Postal Code<span class="text-danger">*</span></label>
                                            <input type="text" id="postalcode" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Contact Number (example: 09123456789)<span class="text-danger">*</span></label>
                                            <input type="number" id="contact" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Email Address<span class="text-danger">*</span></label>
                                            <input type="email" id="email" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Date of Birth<span class="text-danger">*</span></label>
                                            <input class="dateTimePicker" id="DateOfBirth" required/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Gender<span class="text-danger">*</span></label>
                                            <select id="gender" class="form-control">
                                                <option selected value="MALE">MALE</option>
                                                <option  value="FEMALE">FEMALE</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Parent/Guardian<span class="text-danger">*</span></label>
                                            <input type="text" id="parentguardian" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Previous School<span class="text-danger">*</span></label>
                                            <input type="text" id="prevSchool" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>Section<span class="text-danger">*</span></label>
                                            <input type="text" id="sec" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>School Year<span class="text-danger">*</span></label>
                                            <input type="text" id="sy" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label>What strand do you wish to take?<span class="text-danger">*</span></label>
                                            <select id="strand" class="form-control">
                                                <option selected value="GAS (General Academic Strand)">GAS (General Academic Strand)</option>
                                                <option value="ABM (Accountancy, Business and Management Strand)">ABM (Accountancy, Business and Management Strand)</option>
                                                <option value="HUMSS (Humanities and Social Sciences Strand)">HUMSS (Humanities and Social Sciences Strand)</option>
                                                <option value="STEM (Science, Technology, Engineering, and Mathematics Strand)">STEM (Science, Technology, Engineering, and Mathematics Strand)</option>
                                                <option value="PA (Performing Arts Strand)">PA (Performing Arts Strand)</option>
                                                <option value="HE (Home Economics Strand)">HE (Home Economics Strand)</option>
                                                <option value="ICT (Information and Communications Technology Strand)">ICT (Information and Communications Technology Strand)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                
                                <div class="row justify-content-center pb-2">
                                    <div id="recapt"></div>
                                </div>

                            
                                <div class="row justify-content-center">
                                    <button class="form-control back-primary text-white mr-4 ml-4" type="submit">Submit</button>
                                </div>
                                

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

