import {MDCDataTable} from '@material/data-table';

const myTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

const idGenerator = (function () {
    let privateCounter = 0;

    return {
        next: function () {
            return ++privateCounter;
        }
    };
})();

let form, submit, contacts;

window.onload = () => {
    contacts = document.getElementById('contactsBody');
    form = document.contactForm;
    submit = document.getElementById('add-contact-btn');

    submit.onclick = (ev) => {
        ev.preventDefault();

        const {name, surname} = form;
        const newContact = formNewContact(name.value, surname.value);

        contacts.appendChild(newContact);
    }
}

function formNewContact(name, surname) {
    const rowElement = document.createElement('tr');
    rowElement.className = 'mdc-data-table__row';
    rowElement.id = idGenerator.next();

    const rowDataName = document.createElement('td');
    const rowDataSurname = document.createElement('td');

    rowDataName.className = 'mdc-data-table__cell mdc-data-table__cell--numeric';
    rowDataSurname.className = 'mdc-data-table__cell mdc-data-table__cell--numeric';

    rowDataName.innerText = name;
    rowDataSurname.innerText = surname;

    const deleteBtnWrapper = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'mdc-button mdc-button--touch0 delete-contact-btn';
    deleteBtn.innerHTML =
        '<span class="mdc-button__ripple"></span>\n' +
'                            <span class="mdc-button__label">\n' +
'                                <i class="material-icons mdc-list-item__graphic deleteIcon" aria-hidden="true">remove</i>\n' +
'                            </span>\n' +
'                            <span class="mdc-button__touch"></span>';
    deleteBtn.onclick = () => {
        rowElement.remove();
    }

    deleteBtnWrapper.appendChild(deleteBtn);

    rowElement.appendChild(rowDataName);
    rowElement.appendChild(rowDataSurname);
    rowElement.appendChild(deleteBtnWrapper);

    return rowElement;
}
