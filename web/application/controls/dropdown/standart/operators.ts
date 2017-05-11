import {Component} from "@angular/core";

@Component({
    selector: 'select-operators',
    templateUrl: 'standart.html'
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

    public selectMenuItem(item:string): void{
        this.selectedItem = item;
        console.log('Selected: ', item);
    }


}
