import { Core }  from './core/Core.js';
import { Routes } from './core/Routes.js';

window.onload = function () {
    
    let app = new Core('app').context;

    new Routes().redir(app);
    
            
    $(".dateTimePicker").datepicker({
        uiLibrary: 'bootstrap4'
    });

  
    
}
