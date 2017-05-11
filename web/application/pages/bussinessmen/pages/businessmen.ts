import {Component, OnInit} from "@angular/core";
import {FilterService} from "../controls/search/SearchPanelService";
import {Filter} from "../entities/Filter";
import {BusinessmenProvider} from "../providers/businessmen";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'businessmen',
    template: `
<router-outlet></router-outlet>
<selector></selector>
<div>businessmen table</div>
`
})
export class BusinessmenPage implements OnInit {

    public filter: Filter;
    public model;
    private serverConfig;

    constructor(private filterService: FilterService,
                private businessmenProvider: BusinessmenProvider,
                ) {
        this.filterService.filterObservable.subscribe(filter => {
            this.filter = filter;
            console.dir(this.filter);

            businessmenProvider.searchCount(this.filter).subscribe(
                response => this.model = response,
                error => console.dir(error)
            );
        })
    }
    ngOnInit() {

        console.log(this.serverConfig)
    }
}