import {Component, Input} from "@angular/core";
import {Companie} from "../../../entities/companie";


@Component({
    moduleId: module.id,
    selector: 'companies-list',
    templateUrl: 'companies-list.html'
})
export class CompaniesListControl {
    @Input()
    companies: Companie[];

}