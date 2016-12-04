import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Companie} from "../entities/Companie";
import {SearchFilter} from "../entities/SearchFilter";


@Injectable()
export class CompaniesService {

    constructor(private http: Http) {
    }

    search(filter: SearchFilter): Observable<Companie[]> {
        return this.http
            .post('api/companies/search', filter)
            .map((res: Response) => {
                return res.json() as Companie[]
            });
    }

    count(): Observable<number> {
        return this.http
            .post('api/companies/count', {})
            .map((res: Response) => {
                return res.json().count as number
            });
    }
}