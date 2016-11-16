import {NgModule} from "@angular/core";
import {MasterLayout} from "./pages/master/master";
import {BrowserModule} from "@angular/platform-browser";
import {RoutingModule} from "./pages/routes";
import {Page2} from "./pages/page2/page2";
import {Page1} from "./pages/page1/page1";
import {LoginPage} from "./pages/login/login";
import {ControlsModule} from "./controls/controlsModule";

@NgModule({
    declarations: [
        LoginPage,
        MasterLayout,
        Page1,
        Page2
    ],
    imports: [BrowserModule, RoutingModule,ControlsModule],
    bootstrap: [MasterLayout]
})
export class AppModule {

}