import {MDCDataTable} from '@material/data-table';
import User from './class/User';

let form, submit;

window.onload = () => {
    form = document.contactForm;
    submit = document.getElementById('add-contact-btn');

    submit.onclick = (ev) => {
        ev.preventDefault();

        let {name, surname} = form;
        console.log(name.value, surname.value);
    }

    const {adapter} = new MDCDataTable(document.querySelector('.mdc-data-table')).getDefaultFoundation();
    // adapter.addClass('HELLO');
    console.log(adapter)
}