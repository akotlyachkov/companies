import {Component, OnInit, ViewChild} from "@angular/core";
import {CompaniesProvider} from "providers/companies";
import {Companie} from "entities/companie";
import {SearchFilter} from "entities/searchFilter";
import {PersonQueryHistoryModal} from "pages/bussinessmen/modals/history/history";


@Component({
    selector: 'companies',
    providers: [CompaniesProvider],
    templateUrl: 'companies.html'
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