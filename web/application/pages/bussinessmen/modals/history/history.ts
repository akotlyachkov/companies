import {Component, ViewChild, Input, ViewContainerRef} from "@angular/core";
import {ModalDirective} from "ngx-bootstrap";


@Component({
    selector: 'query-history-modal',
    templateUrl: 'history.html'
})
export class PersonQueryHistoryModal {

    constructor() {

    }

    queries = [{textWithMarkup: ''}];

    @ViewChild('historyModal')
    public historyModal: ModalDirective;


    public showChildModal(): void {
        this.historyModal.show();
    }


    public hideChildModal(): void {
        this.historyModal.hide();
    }
}