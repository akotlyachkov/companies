import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'select-okfs',
    templateUrl: 'templated.html'
})
export class OkfsDropwownControl {
    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};
    public items: string[] = ['Все',
        'РОССИЙСКАЯ СОБСТВЕННОСТЬ',
        '&nbsp;&nbsp;Государственная собственность',
        '&nbsp;&nbsp;&nbsp;&nbsp;Федеральная собственность',
        '&nbsp;&nbsp;&nbsp;&nbsp;Собственность субъектов Российской Федерации',
        '&nbsp;&nbsp;Муниципальная собственность'];
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
