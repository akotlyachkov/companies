
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {ServerConfigProvider} from "./serverConfig";
import {SharedService} from "./global";


@Injectable()
export class ServerConfigResolver implements Resolve<any> {
    constructor(private serverConfigProvider: ServerConfigProvider) {


    }

    resolve(route: ActivatedRouteSnapshot): Observable<Object> {
        return this.serverConfigProvider.get();
    }
}