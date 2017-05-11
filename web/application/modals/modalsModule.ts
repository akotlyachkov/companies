import {NgModule} from "@angular/core";
import {ModalModule} from "ngx-bootstrap";
import {PersonQueryHistoryModal} from "pages/bussinessmen/modals/history/history";
import './index.scss'

@NgModule({
    imports:[ModalModule],
    declarations:[PersonQueryHistoryModal],
    exports:[PersonQueryHistoryModal]
})
export class ModalsModule{

}