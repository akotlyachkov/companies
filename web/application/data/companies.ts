import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Companie} from "../entities/Companie";


@Injectable()
export class CompaniesService {

    constructor(private http: Http) {
    }

    search(): Observable<Companie[]> {
        return this.http
            .get('api/companies/list')
            .map((res: Response) => {
                return res.json() as Companie[]
            });
    }
}