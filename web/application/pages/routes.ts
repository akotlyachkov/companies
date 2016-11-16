import {Routes, RouterModule} from "@angular/router";
import {Page2} from "./page2/page2";
import {Page1} from "./page1/page1";
import {MasterLayout} from "./master/master";
import {NgModule} from "@angular/core";
import {LoginPage} from "./login/login";

const routes: Routes = [
    {path: '', redirectTo: '/page0', pathMatch:'full'},
    {path: 'login', component: LoginPage},
    {path: 'page0', component: MasterLayout},
    {path: 'page1', component: Page1},
    {path: 'page2', component: Page2}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {

}