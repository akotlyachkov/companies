import {Component} from "@angular/core";

@Component({
    selector: 'select-headcount',
    templateUrl: 'standart.html'
})
export class HeadcountDropwownControl {
    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};
    public items: string[] = ['Не задана',
        '1 - 5',
        '5 - 20',
        '20 - 50',
        '50 - 100',
        '100 - 200',
        '200 - 500'];
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
