import { Core }  from './core/Core.js';

window.onload = function () {

    require('./core/Routes')(new Core('app').context).redirect();

    // $(".dateTimePicker").datepicker({
    //     uiLibrary: 'bootstrap4'
    // });
    
}
