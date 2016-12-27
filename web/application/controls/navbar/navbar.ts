import {Component, OnInit} from "@angular/core";
import {NavbarService} from "../../providers/navbar";
import {NavbarItem} from "../../entities/navbarItem";


@Component({
    moduleId: module.id,
    selector: 'navbar',
    host:{class:'navbar navbar-default navbar-static-top'},
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