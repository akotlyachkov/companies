import {NgModule} from "@angular/core";

import {NavbarControl} from "./navbar/navbar";
import {FeaturesControl} from "./features/features";
import {SelectorControl} from "./selector/selector";
import {ActionsControl} from "./actions/actions";
import {SearchBusinessmenPersonControl} from "./search/buinessmen/person/person";
import {SearchBusinessmenSimpleControl} from "./search/buinessmen/simple/simple";
import {SearchCompaniesFinanceControl} from "./search/companies/finance/finance";
import {SearchCompaniesFoundersControl} from "./search/companies/founders/founders";
import {SearchCompaniesIdentificationControl} from "./search/companies/identification/identification";
import {SearchCompaniesSimpleControl} from "./search/companies/simple/simple";
import {SearchIchpIdentificationControl} from "./search/ichp/identification/identification";
import {SearchIchpSimpleControl} from "./search/ichp/simple/simple";
import {PagerControl} from "./pager/pager";
import {TabsControl} from "./tabs/tabs";

@NgModule({
    declarations: [
        NavbarControl,
        FeaturesControl,
        SearchBusinessmenPersonControl,
        SearchBusinessmenSimpleControl,
        SearchCompaniesFinanceControl,
        SearchCompaniesFoundersControl,
        SearchCompaniesIdentificationControl,
        SearchCompaniesSimpleControl,
        SearchIchpIdentificationControl,
        SearchIchpSimpleControl,
        SelectorControl,
        ActionsControl,
        //PagerControl,
        TabsControl
    ],
    exports:[
        NavbarControl,
        FeaturesControl,
        SearchBusinessmenPersonControl,
        SearchBusinessmenSimpleControl,
        SearchCompaniesFinanceControl,
        SearchCompaniesFoundersControl,
        SearchCompaniesIdentificationControl,
        SearchCompaniesSimpleControl,
        SearchIchpIdentificationControl,
        SearchIchpSimpleControl,
        SelectorControl,
        ActionsControl,
        //PagerControl,
        TabsControl
    ]
})
export class ControlsModule {

}