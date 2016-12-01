import {Component, OnInit} from "@angular/core";
import {CompaniesService} from "../data/companies";
import {Companie} from "../entities/Companie";

@Component({
    moduleId: module.id,
    selector: 'companies',
    providers: [CompaniesService],
    template: `
<router-outlet></router-outlet>
<selector></selector>
<companies-list [companies]="companies"></companies-list>
`
})
export class CompaniesPage implements OnInit {

    companies:Companie[];

    constructor(private companieService: CompaniesService) {

    }

    ngOnInit(): void {
        this.companieService.search().subscribe(response => this.companies = response);
    }
}