import { view, config, generateRecaptcha } from '../core/boostrap.js';
export class College {
    constructor() {}

    render() {
        return view('college');
    }

    synapse_function_connect() {
        this.form = document.getElementById('collegeForm');
        this.form.addEventListener('submit', event => this.sendform(event));
        generateRecaptcha();
    }


    sendform(e) {
        e.preventDefault();

        swal({
            title: "Wait!",
            text: "Are you sure that all of information are correct?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then( (response) => {

            if (response) {
                swal({
                    title: "Sending your information..",
                    text: "Please Wait..",
                    icon: "warning",
                    buttons: false,
                    closeOnClickOutside: false
                });
                
                httpAjax('post', config.host + 'api/collegeReg', {
                    data : {
                        fname : $('#fname').val(),
                        mname : $('#mname').val(),
                        lname : $('#lname').val(),
                        address : $('#address').val(),
                        address2 : $('#address2').val(),
                        city : $('#city').val(),
                        state : $('#state').val(),
                        postalcode : $('#postalcode').val(),
                        contact : $('#contact').val(),
                        email : $('#email').val(),
                        DateOfBirth : $('#DateOfBirth').val(),
                        gender : $('#gender').val(),
                        prevSchool : $('#prevSchool').val(),
                        college : $('#college').val(),
                        pgx: $('#parentguardian').val(),
                        section: $('#sec').val(),
                        sy: $('#sy').val(),
                        'g-recaptcha-response': grecaptcha.getResponse()
                    }
                }).then( (rt) => {
                    if(rt.success) {
                        swal("Nice!", rt.message, "success");
                        
                        setTimeout(function() {
                            swal({
                                title: "Generating PDF..",
                                text: "Please Wait..",
                                icon: "info",
                                buttons: false,
                                closeOnClickOutside: false
                            });
                            
                             setTimeout(function() {
                                 
                                window.open(config.host + 'api/college/print/' + rt.link, '_blank');
                                
                                window.location.href = '/';
                                
                             },2000);
                             
                        }, 2000);
                    }else {
                        swal("Opps!", rt.message, "error");
                    }
                })
            }else {
                swal("Okay!", "Take your time", "info");
            }
        }); 
    }
}