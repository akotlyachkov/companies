import {Component} from "@angular/core";
@Component({
    selector: 'alert-overload',
    template: `<div class="alert alert-warning alert--inline">В результатах поиска найдено более {{this}} записей. Попробуйте изменить критерии поиска.</div>`
})
export class AlertOverload {
    hide() {

    }
}