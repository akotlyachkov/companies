
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable()
export class ServerConfigProvider {

    constructor(private http: Http) {
    }

    get(): Observable<Object> {
        return this.http
            .post('api/config', {})
            .map((res: Response) => {
                return res.json()
            });
    }

}