//import {UIRouterModule} from "ui-router-ng2";
import {RouterModule, Routes, RouterLink} from "@angular/router";
import {CompaniesPage} from "./companies";
import {NgModule} from "@angular/core";
import {LoginPage} from "./login/login";
import {ErrorPage} from "./error/error";
import {NotFoundPage} from "./notfound/notfound";
//import {BusinessmenPage} from "./businessmen/businessmen";
import {ControlsModule} from "../controls/controlsModule";
import {MainLayout} from "../layouts/main";
import {SearchCompaniesSimpleControl} from "../controls/search/companies/simple/simple";
import {SearchCompaniesFinanceControl} from "../controls/search/companies/finance/finance";
import {SearchCompaniesIdentificationControl} from "../controls/search/companies/identification/identification";
import {SearchCompaniesFoundersControl} from "../controls/search/companies/founders/founders";
import {IchpPage} from "./ichp";
import {SearchIchpIdentificationControl} from "../controls/search/ichp/identification/identification";
import {BusinessmenPage} from "./businessmen";
import {SearchIchpSimpleControl} from "../controls/search/ichp/simple/simple";


const appRoutes: Routes = [
    {path:'',redirectTo:'/companies',pathMatch:'full'},
    {
        path:'', component: MainLayout,  children: [
        {
            path: 'companies', component: CompaniesPage, children: [
            {path: '', component: SearchCompaniesSimpleControl },
            {path: 'finance', component: SearchCompaniesFinanceControl},
            {path: 'identification', component: SearchCompaniesIdentificationControl},
            {path: 'founders', component: SearchCompaniesFoundersControl},
        ]
        },
        {
            path: 'ichp', component: IchpPage, children: [
            {path: '', component: SearchIchpSimpleControl},
            {path: 'identification', component: SearchIchpIdentificationControl},
        ]
        },
        {
            path: 'businessmen', component: BusinessmenPage, children: [
            {path: '', component: SearchIchpIdentificationControl},
            {path: 'person', component: SearchIchpIdentificationControl},
        ]
        }
    ]
    },

    {path: 'login', component: LoginPage},
    {path: 'error', component: ErrorPage},
    {path: 'notfound', component: NotFoundPage},
    {path: '**', component: NotFoundPage},
];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes), ControlsModule],
    exports: [RouterModule]
})

export class RoutingModule {


}