import {Component} from "@angular/core";
import {FilterService} from "../controls/search/SearchPanelService";
import {Filter} from "../entities/Filter";
import {BusinessmenProvider} from "../providers/businessmen";

@Component({
    selector: 'businessmen',
    template: `
<router-outlet></router-outlet>
<selector></selector>
<div>businessmen table</div>
`
})
export class BusinessmenPage {

    public filter: Filter;
    public model;

    constructor(private filterService: FilterService, private businessmenPrivider: BusinessmenProvider) {
        this.filterService.filterObservable.subscribe(filter => {
            this.filter = filter;
            console.dir(this.filter);
            businessmenPrivider.searchCount(this.filter).subscribe(
                response => this.model = response,
                error => console.dir(error)
            );
        })
    }
}