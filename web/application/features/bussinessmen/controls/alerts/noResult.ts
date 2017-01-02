import {Component} from "@angular/core";
@Component({
    selector: 'alert-noresult',
    template: `<div class="alert alert-warning alert--inline">Данная персона не аффилирована ни с одной компанией и не является индивидуальным предпринимателем. Попробуйте изменить критерии поиска.</div>`
})
export class AlertNoresult {

}