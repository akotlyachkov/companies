import {Component, OnInit} from "@angular/core";
import {NavbarService} from "../../providers/navbar";
import {NavbarItem} from "../../entities/NavbarItem";


@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.html'
})
export class NavbarControl implements OnInit {

    navbarList: NavbarItem[];

    constructor(private navbarService: NavbarService) {

    }

    ngOnInit(): void {
        this.navbarService.navbar().subscribe(response => this.navbarList = response);
    }
}