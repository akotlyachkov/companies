import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MasterLayout} from "./layouts/master";
import {MainLayout} from "./layouts/main";
import {RoutingModule} from "./pages/routes";
import {Page2} from "./pages/page2/page2";
import {LoginPage} from "./pages/login/login";
import {ControlsModule} from "./controls/controlsModule";
import {NotFoundPage} from "./pages/notfound/notfound";
import {ErrorPage} from "./pages/error/error";
import {CompaniesPage} from "./pages/companies";
import {IchpPage} from "./pages/ichp";
import {BusinessmenPage} from "./pages/businessmen";
import {DataModule} from "./providers/providersModule";

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
        Page2


    ],
    imports: [BrowserModule, RoutingModule, ControlsModule, DataModule],
    bootstrap: [MasterLayout]
})
export class AppModule {

}