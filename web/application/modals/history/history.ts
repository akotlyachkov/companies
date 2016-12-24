import {Component, ViewChild, Input} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";


@Component({
    moduleId: module.id,
    selector: 'query-history-modal',
    templateUrl: 'history.html'
})
export class PersonQueryHistoryModal {

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