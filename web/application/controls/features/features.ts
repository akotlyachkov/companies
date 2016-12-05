import {Component, OnInit} from "@angular/core";
import {NavbarService} from "../../providers/navbar";
import {NavbarItem} from "../../entities/navbarItem";


@Component({
    moduleId: module.id,
    selector: 'features',
    templateUrl: 'features.html'
})
export class FeaturesControl implements OnInit {

    features: NavbarItem[];

    constructor(private navbarService: NavbarService) {

    }

    ngOnInit(): void {
        this.navbarService.features().subscribe(response => this.features = response);
    }

}