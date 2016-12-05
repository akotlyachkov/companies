import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {NavbarItem} from "../entities/navbarItem";


@Injectable()
export class NavbarService {

    constructor(private http: Http) {
    }

    navbar(): Observable<NavbarItem[]> {
        return this.http
            .post('api/navbar', {})
            .map((res: Response) => {
                return res.json() as NavbarItem[]
            });
    }
    features():Observable<NavbarItem[]> {
        return this.http
            .post('api/features', {})
            .map((res: Response) => {
                return res.json() as NavbarItem[]
            });
    }
}