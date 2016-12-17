import {Component, OnInit} from "@angular/core";
import {CompaniesService} from "../providers/companies";
import {Companie} from "../entities/companie";
import {SearchFilter} from "../entities/searchFilter";

@Component({
    moduleId: module.id,
    selector: 'companies',
    providers: [CompaniesService],
    template: `
<router-outlet></router-outlet>
<actions-companies></actions-companies>
<selector></selector>
<companies-list [companies]="companies"></companies-list>
<pagination [totalItems]="totalItems" [(ngModel)]="currentPage" (pageChanged)="pageChanged($event)"></pagination>
`
})
export class CompaniesPage implements OnInit {

    companies: Companie[];
    totalItems: number;
    currentPage: number;

    constructor(private companieService: CompaniesService) {

    }

    filter: SearchFilter = {query: ''};

    ngOnInit(): void {

        this.companieService.count().subscribe(response => this.totalItems = response);
        this.companieService.search(this.filter).subscribe(response => this.companies = response);
    }
    pageChanged (event){

    }
}