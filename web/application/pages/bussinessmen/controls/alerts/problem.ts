import {Component, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'alert-problem',
    template: `<div class="alert alert-warning alert--inline">Обратите внимание! В результатах поиска есть проблемные компании или ИП. <a class="pointer" (click)="hide()"><i class="fa fa-times"></i></a></div>`
})
export class AlertProblem {
    @Output()
    onHide = new EventEmitter<>();

    hide(): void {
        this.onHide.emit();
    }
}