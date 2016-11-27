import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'companies',
    template: `
<router-outlet></router-outlet>
<selector></selector>
<companies-list></companies-list>
`
})
export class CompaniesPage {

}