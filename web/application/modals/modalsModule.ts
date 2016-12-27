import {NgModule} from "@angular/core";
import {ModalModule} from "ng2-bootstrap/ng2-bootstrap";
import {PersonQueryHistoryModal} from "./history/history";


@NgModule({
    imports:[ModalModule],
    declarations:[PersonQueryHistoryModal],
    exports:[PersonQueryHistoryModal]
})
export class ModalsModule{

}