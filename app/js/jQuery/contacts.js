import {MDCDataTable} from '@material/data-table';

const deleteBtnHtml = '<span class="mdc-button__ripple"></span>\n' +
    '                            <span class="mdc-button__label">\n' +
    '                                <i class="material-icons mdc-list-item__graphic deleteIcon" aria-hidden="true">remove</i>\n' +
    '                            </span>\n' +
    '                            <span class="mdc-button__touch"></span>';

$(function () {
    const myTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

    const idGenerator = (function () {
        let privateCounter = 0;

        return {
            next: function () {
                return ++privateCounter;
            }
        };
    })();

    const form = document.contactForm;

    $('#add-contact-btn').click((ev) => {
        ev.preventDefault();

        const {name, surname} = form;
        const newContact = formNewContact(name.value, surname.value);

        $('#contactsBody').append(newContact);
    })


    function formNewContact(name, surname) {
        const newRow = $('<tr></tr>')
            .addClass('mdc-data-table__row')
            .attr('id', idGenerator.next());

        newRow.append(
            $('<td></td>')
                .addClass('mdc-data-table__cell mdc-data-table__cell--numeric')
                .text(name),
            $('<td></td>')
                .addClass('mdc-data-table__cell mdc-data-table__cell--numeric')
                .text(surname),
            $('<td></td>').append(
                $('<button></button>')
                    .addClass('mdc-button mdc-button--touch0 delete-contact-btn')
                    .html(deleteBtnHtml)
                    .click(() => newRow.remove())
            )
        );

        return newRow;
    }
})
