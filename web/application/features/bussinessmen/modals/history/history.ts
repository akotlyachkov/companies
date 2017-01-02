import {Component, ViewChild, Input, ViewContainerRef} from "@angular/core";
import {ModalDirective, ComponentsHelper} from "ng2-bootstrap/ng2-bootstrap";


@Component({
    moduleId: module.id,
    selector: 'query-history-modal',
    templateUrl: 'history.html'
})
export class PersonQueryHistoryModal {

    constructor(private componentsHelper: ComponentsHelper, private vcr: ViewContainerRef) {
        componentsHelper.setRootViewContainerRef(vcr);
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