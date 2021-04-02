import {MDCTextField} from '@material/textfield';

const textFields = document.getElementsByClassName('mdc-text-field');
for (const textField of textFields) {
    const mdc_textField = new MDCTextField(textField);
}
