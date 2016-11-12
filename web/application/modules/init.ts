import {NgModule} from '@angular/core';
import {Test} from  '../pages/page0/page0'
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "../pages/routes";
import {Page2} from "../pages/page2/page2";
import {Page1} from "../pages/page1/page1";

@NgModule({
    declarations: [Test,Page1,Page2],
    imports: [BrowserModule,RoutingModule],
    bootstrap: [Test]
})
export class InitModule {

}