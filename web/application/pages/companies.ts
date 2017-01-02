import {Component, OnInit, ViewChild} from "@angular/core";
import {CompaniesProvider} from "../providers/companies";
import {Companie} from "../entities/companie";
import {SearchFilter} from "../entities/searchFilter";
import {PersonQueryHistoryModal} from "../features/bussinessmen/modals/history/history";


@Component({
    moduleId: module.id,
    selector: 'companies',
    providers: [CompaniesProvider],
    template: `
<router-outlet></router-outlet>
<actions-companies></actions-companies>
<selector></selector>
<companies-list [companies]="companies"></companies-list>
<pagination [totalItems]="totalItems" [(ngModel)]="currentPage" (pageChanged)="pageChanged($event)"></pagination>
<button class="btn btn-primary" (click)="test()">Large modal</button>
<query-history-modal #mod></query-history-modal>
`
})
export class CompaniesPage implements OnInit {

    companies: Companie[];
    totalItems: number;
    currentPage: number;

    constructor(private companieService: CompaniesProvider) {

    }

    filter: SearchFilter = {query: ''};

    ngOnInit(): void {

        this.companieService.count().subscribe(response => this.totalItems = response);
        this.companieService.search(this.filter).subscribe(response => this.companies = response);
    }

    pageChanged(event) {

    }

    @ViewChild('mod')
    mod:PersonQueryHistoryModal;

    test() {
        console.log('dfdf');
        this.mod.showChildModal()
    }
}