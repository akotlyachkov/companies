import {NavbarControl} from "./navbar/navbar";
import {FeaturesControl} from "./features/features";
import {SearchPanelSimpleControl} from "./search-panels/simple/simple";
import {NgModule} from "@angular/core";
import {SelectorControl} from "./selector/selector";
import {ActionsControl} from "./actions/actions";

@NgModule({
    declarations: [
        NavbarControl,
        FeaturesControl,
        SearchPanelSimpleControl,
        SelectorControl,
        ActionsControl
    ],
    exports:[
        NavbarControl,
        FeaturesControl,
        SearchPanelSimpleControl,
        SelectorControl,
        ActionsControl
    ]
})
export class ControlsModule {

}