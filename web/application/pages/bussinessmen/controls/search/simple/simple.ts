import {Component, Output, EventEmitter, Input} from "@angular/core";
import {Filter} from "../../../entities/Filter";
import {FilterService} from "../SearchPanelService";
import {SharedService} from "../../../../../providers/global";

@Component({
    host: {class: 'search search--with-tabs'},
    selector: 'search-buinessmen-simple',
    templateUrl: 'simple.html'
})
export class SearchBusinessmenSimpleControl {
    constructor(private filterService: FilterService, shared: SharedService) {
        console.log('shared');
        console.log(shared)
    }


    @Input()
    model: Filter = new Filter();

    @Output()
    onSearch = new EventEmitter<Filter>();

    search(): void {
        this.filterService.provideFilter(this.model);
        this.onSearch.emit(this.model)
    }
}