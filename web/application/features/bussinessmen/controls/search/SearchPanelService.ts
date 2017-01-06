import {Injectable} from "@angular/core";
import {Filter} from "../../entities/Filter";
import {Subject} from "rxjs/Subject";

@Injectable()
export class FilterService{
    private filterObserver = new Subject<Filter>();

    public filterObservable = this.filterObserver.asObservable();

    public provideFilter(filter: Filter) {
        this.filterObserver.next(filter);
    }
}