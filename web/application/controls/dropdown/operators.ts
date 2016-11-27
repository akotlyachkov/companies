import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'operators-dropdown',
    templateUrl: 'operators.html'
})
export class OperatorsDropwownControl {
    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};
    public items: string[] = ['>', '<', '>=', '<='];
    public selectedItem: string = this.items[0];

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

}
