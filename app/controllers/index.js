import { view } from '../core/boostrap.js';

let arguments_ = {
    logo_link: "https://i.imgur.com/8L1hQnF.png"
}

export class Index {

    constructor() {
    }

    render() {
        return view('index', arguments_); 
    }

}