import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ResultFounders} from "../entities/ResultFounders";
import {ResultChiefs} from "../entities/ResultChiefs";
import {ResultIchp} from "../entities/ResultIchp";
import {Filter} from "../entities/Filter";
import {FilterSearch} from "../entities/FilterSearch";
import {Tab} from "../entities/Tab";
import {Switcher} from "../entities/Switcher";

@Injectable()
export class BusinessmenProvider{
    constructor(private http: Http) {
    }

    searchFounders(filter: FilterSearch): Observable<ResultFounders[]> {
        return this.http
            .post('api/persons/search', filter)
            .map((res: Response) => {
                return res.json() as ResultFounders[]
            });
    }
    searchChiefs(filter: FilterSearch): Observable<ResultChiefs[]> {
        return this.http
            .post('api/companies/search', filter)
            .map((res: Response) => {
                return res.json() as ResultChiefs[]
            });
    }
    searchIchp(filter: FilterSearch): Observable<ResultIchp[]> {
        return this.http
            .post('api/companies/search', filter)
            .map((res: Response) => {
                return res.json() as ResultIchp[]
            });
    }
    searchCount(filter: Filter): Observable<Tab[]> {
        return this.http
            .post('api/persons/search/count/', filter)
            .map((res: Response) => {
                return res.json() as Tab[]
            });
    }

    switch(text: string): Observable<Switcher> {
        return this.http
            .post('api/text/switch/', text)
            .map((res: Response) => {
                return res.json() as Switcher
            });
    }


}