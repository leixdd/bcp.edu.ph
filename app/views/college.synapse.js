export function template(arguments_) {
    return /*template*/ `
    <div class="container-fluid">
    
        <div class="col-12 text-center txt-primary pt-2">
            <h2 class="display-4">COLLEGE</h2>
            <h6>PRE - ADMISSION</h6>
        </div>

        <div class="row pt-5 pb-5">
            <div class="col-6 d-none d-sm-block">
                <img src="https://i.imgur.com/y7wdOaW.jpg" class="img-fluid"/>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="card border-primary">
                    <div class="card-header back-primary text-white">College Pre-Admission Form for SY 2019-2020</div>
                    <div class="card-body">
                        <form id="collegeForm" method="POST">

                            <div class="row">
                                <div class="col-md-12 col-xs-12">
                                    <div class="form-group">
                                        <label>What course do you wish to take?<span class="text-danger">*</span></label>
                                        <select id="college" class="form-control">
                                            <option selected value="BS INFORMATION TECHNOLOGY (BSIT)">BS INFORMATION TECHNOLOGY (BSIT)</option>
                                            <option value="BS HOSPITALITY MANAGEMENT (BSHM)">BS HOSPITALITY MANAGEMENT (BSHM)</option>
                                            <option value="BS OFFICE ADMINISTRATION (BSOA)">BS OFFICE ADMINISTRATION (BSOA)</option>
                                            <option value="BS BUSINESS ADMINISTRATION (BSBA)">BS BUSINESS ADMINISTRATION (BSBA) Major in Human Resource Management</option>
                                            <option value="BS BUSINESS ADMINISTRATION (BSBA)">BS BUSINESS ADMINISTRATION (BSBA) Major in Marketing</option>
                                            <option value="BS CRIMINOLOGY (BSCRIM)">BS CRIMINOLOGY (BSCRIM)</option>
                                            <option value="BACHELOR OF ELEMENTARY EDUCATION (BEED)">BACHELOR OF ELEMENTARY EDUCATION (BEED)</option>
                                            <option value="BACHELOR OF SECONDARY EDUCATION (BSED)">BACHELOR OF SECONDARY EDUCATION (BSED) Major in English</option>
                                            <option value="BACHELOR OF SECONDARY EDUCATION (BSED)">BACHELOR OF SECONDARY EDUCATION (BSED) Major in Filipino</option>
                                            <option value="BACHELOR OF SECONDARY EDUCATION (BSED)">BACHELOR OF SECONDARY EDUCATION (BSED) Major in Mathematics</option>
                                            <option value="BACHELOR OF SECONDARY EDUCATION (BSED)">BACHELOR OF SECONDARY EDUCATION (BSED) Major in Social Studies</option>
                                            <option value="BACHELOR OF SECONDARY EDUCATION (BSED)">BACHELOR OF SECONDARY EDUCATION (BSED) Major in Values Education</option>
                                            <option value="BACHELOR OF SECONDARY EDUCATION (BSED)">BACHELOR OF SECONDARY EDUCATION (BSED) Major in TLE</option>
                                            <option value="BS COMPUTER ENGINEERING (BSCpE)">BS COMPUTER ENGINEERING (BSCpE)</option>
                                            <option value="BACHELOR OF LIBRARY IN INFORMATION SCIENCE (BLIS)">BACHELOR OF LIBRARY IN INFORMATION SCIENCE (BLIS)</option>
                                            <option value="BS TOURISM MANAGEMENT (BSTM)">BS TOURISM MANAGEMENT (BSTM)</option>
                                            <option value="BS ENTREPRENEURSHIP (BSEntrep)">BS ENTREPRENEURSHIP (BSEntrep)</option>
                                            <option value="BS ACCOUNTING INFORMATION SYSTEM (BSAIS)">BS ACCOUNTING INFORMATION SYSTEM (BSAIS)</option>
                                            <option value="BS PSYCHOLOGY (BSP)">BS PSYCHOLOGY (BSP)</option>
                                        </select>
                                    </div>
                                </div>
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
                                <div class="col-md-12 col-xs-12">
                                    <div class="form-group">
                                        <label>Previous School<span class="text-danger">*</span></label>
                                        <input type="text" id="prevSchool" class="form-control" required/>
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
                                        <label>Section<span class="text-danger">*</span></label>
                                        <input type="text" id="sec" class="form-control" required/>
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