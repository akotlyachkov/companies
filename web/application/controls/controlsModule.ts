
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';


import {NavbarControl} from "./navbar/navbar";
import {FeaturesControl} from "./features/features";
import {SelectorControl} from "./selector/selector";
import {ActionsControl} from "./actions/actions";
import {SearchBusinessmenPersonControl} from "./search/businessmen/person/person";
import {SearchBusinessmenSimpleControl} from "./search/businessmen/simple/simple";
import {SearchCompaniesFinanceControl} from "./search/companies/finance/finance";
import {SearchCompaniesFoundersControl} from "./search/companies/founders/founders";
import {SearchCompaniesIdentificationControl} from "./search/companies/identification/identification";
import {SearchCompaniesSimpleControl} from "./search/companies/simple/simple";
import {SearchIchpIdentificationControl} from "./search/ichp/identification/identification";
import {SearchIchpSimpleControl} from "./search/ichp/simple/simple";
import {TabsControl} from "./tabs/tabs";
import {CompaniesListControl} from "./tables/companies-list/companies-list";
import {IchpListControl} from "./tables/ichp-list/ichp-list";
import {BusinessmenListControl} from "./tables/businessmen-list/businessmen-list";
import {OperatorsDropwownControl} from "./dropdown/standart/operators";
import {CommonModule} from "@angular/common";
import {NavbarService} from "../providers/navbar";
import {HeadcountDropwownControl} from "./dropdown/standart/headcount";
import {OkfsDropwownControl} from "./dropdown/templated/okfs";
import {OkopfDropwownControl} from "./dropdown/templated/okopf";
import {AssetsDropwownControl} from "./dropdown/standart/assets";
import {PeriodsDropwownControl} from "./dropdown/standart/periods";
import {CurrencyDropwownControl} from "./dropdown/standart/currency";
import {BaseDropwownControl} from "./dropdown/base";

@NgModule({
    imports: [RouterModule,Ng2BootstrapModule,CommonModule],
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
        TabsControl,
        CompaniesListControl,
        IchpListControl,
        BusinessmenListControl,
        HeadcountDropwownControl,
        OkfsDropwownControl,
        OkopfDropwownControl,
        AssetsDropwownControl,
        PeriodsDropwownControl,
        OperatorsDropwownControl,
        CurrencyDropwownControl
    ],
    exports: [

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
        TabsControl,
        CompaniesListControl,
        IchpListControl,
        BusinessmenListControl,
        HeadcountDropwownControl,
        OkfsDropwownControl,
        OkopfDropwownControl,
        AssetsDropwownControl,
        PeriodsDropwownControl,
        OperatorsDropwownControl,
        CurrencyDropwownControl
    ],
    providers:[NavbarService]
})
export class ControlsModule {

}