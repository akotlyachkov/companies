import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PaginationModule} from "ng2-bootstrap/ng2-bootstrap";
import {CommonModule} from "@angular/common";

import {MasterLayout} from "./layouts/master";
import {MainLayout} from "./layouts/main";
import {RoutingModule} from "./pages/routes";
import {LoginPage} from "./pages/login/login";
import {ControlsModule} from "./controls/controlsModule";
import {NotFoundPage} from "./pages/notfound/notfound";
import {ErrorPage} from "./pages/error/error";
import {CompaniesPage} from "./pages/companies";
import {IchpPage} from "./pages/ichp";
import {BusinessmenPage} from "./features/bussinessmen/pages/businessmen";
import {DataModule} from "./providers/providersModule";
import {ModalsModule} from "./modals/modalsModule";

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
    imports: [BrowserModule, RoutingModule, ControlsModule, DataModule, PaginationModule, ModalsModule, CommonModule],
    bootstrap: [MasterLayout]
})
export class AppModule {

}