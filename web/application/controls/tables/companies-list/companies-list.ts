import {Component, Input} from "@angular/core";
import {Companie} from "../../../entities/Companie";


@Component({
    moduleId: module.id,
    selector: 'companies-list',
    templateUrl: 'companies-list.html'
})
export class CompaniesListControl {
    @Input()
    companies: Companie[];

}