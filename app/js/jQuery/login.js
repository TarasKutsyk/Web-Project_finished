import {MDCTextField} from '@material/textfield';

$(function () {
    $('.mdc-text-field').each(function () {
        const mdc_textField = new MDCTextField(this);
    });
});
