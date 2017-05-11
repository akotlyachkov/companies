import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PaginationModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";
import {FormsModule}   from '@angular/forms';

import {MasterLayout} from "layouts/master";
import {MainLayout} from "layouts/main";
import {RoutingModule} from "pages/routes";
import {LoginPage} from "pages/login/login";
import {ControlsModule} from "controls/controlsModule";
import {NotFoundPage} from "pages/notfound/notfound";
import {ErrorPage} from "pages/error/error";
import {CompaniesPage} from "pages/companies";
import {IchpPage} from "pages/ichp";
import {BusinessmenPage} from "pages/bussinessmen/pages/businessmen";
import {DataModule} from "providers/providersModule";
import {ModalsModule} from "modals/modalsModule";
import {FilterService} from "pages/bussinessmen/controls/search/SearchPanelService";
import {BusinessmenProvider} from "pages/bussinessmen/providers/businessmen";

@NgModule({
    declarations: [
        MasterLayout,
        MainLayout,
        IchpPage,
        CompaniesPage,
        BusinessmenPage,
        ErrorPage,
        NotFoundPage,
        LoginPage,
    ],
    imports: [BrowserModule, RoutingModule, ControlsModule, DataModule, PaginationModule, ModalsModule, CommonModule, FormsModule],
    bootstrap: [MasterLayout],
    providers:[FilterService,BusinessmenProvider]
})
export class AppModule {

}