import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {Ng2BootstrapModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";

import {NavbarControl} from "controls/navbar/navbar";
import {FeaturesControl} from "controls/features/features";
import {SelectorControl} from "controls/selector/selector";
import {ActionsCompaniesControl} from "controls/actions/companies/companies";
import {SearchBusinessmenPersonControl} from "pages/bussinessmen/controls/search/person/person";
import {SearchBusinessmenSimpleControl} from "pages/bussinessmen/controls/search/simple/simple";
import {SearchCompaniesFinanceControl} from "controls/search/companies/finance/finance";
import {SearchCompaniesFoundersControl} from "controls/search/companies/founders/founders";
import {SearchCompaniesIdentificationControl} from "controls/search/companies/identification/identification";
import {SearchCompaniesSimpleControl} from "controls/search/companies/simple/simple";
import {SearchIchpIdentificationControl} from "controls/search/ichp/identification/identification";
import {SearchIchpSimpleControl} from "controls/search/ichp/simple/simple";
import {TabsControl} from "controls/tabs/tabs";
import {CompaniesListControl} from "controls/tables/companies-list/companies-list";
import {IchpListControl} from "controls/tables/ichp-list/ichp-list";
import {BusinessmenListControl} from "controls/tables/businessmen-list/businessmen-list";
import {OperatorsDropwownControl} from "controls/dropdown/standart/operators";

import {NavbarService} from "providers/navbar";
import {HeadcountDropwownControl} from "controls/dropdown/standart/headcount";
import {OkfsDropwownControl} from "controls/dropdown/templated/okfs";
import {OkopfDropwownControl} from "controls/dropdown/templated/okopf";
import {AssetsDropwownControl} from "controls/dropdown/standart/assets";
import {PeriodsDropwownControl} from "controls/dropdown/standart/periods";
import {CurrencyDropwownControl} from "controls/dropdown/standart/currency";
import {SearchBusinessmenIdentificationControl} from "pages/bussinessmen/controls/search/identification/identification";

@NgModule({
    imports: [RouterModule, Ng2BootstrapModule, CommonModule],
    declarations: [
        NavbarControl,
        FeaturesControl,
        SearchBusinessmenPersonControl,
        SearchBusinessmenSimpleControl,
        SearchBusinessmenIdentificationControl,
        SearchCompaniesFinanceControl,
        SearchCompaniesFoundersControl,
        SearchCompaniesIdentificationControl,
        SearchCompaniesSimpleControl,
        SearchIchpIdentificationControl,
        SearchIchpSimpleControl,
        SelectorControl,
        ActionsCompaniesControl,
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
        SearchBusinessmenIdentificationControl,
        SearchCompaniesFinanceControl,
        SearchCompaniesFoundersControl,
        SearchCompaniesIdentificationControl,
        SearchCompaniesSimpleControl,
        SearchIchpIdentificationControl,
        SearchIchpSimpleControl,
        SelectorControl,
        ActionsCompaniesControl,
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
    providers: [NavbarService]
})
export class ControlsModule {

}