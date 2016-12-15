import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'select-okopf',
    templateUrl: 'templated.html'
})
export class OkopfDropwownControl {
    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};
    public items: string[] = ['Все',
        'ОРГАНИЗАЦИОННО-ПРАВОВЫЕ ФОРМЫ ЮРИДИЧЕСКИХ ЛИЦ, ЯВЛЯЮЩИХСЯ КОММЕРЧЕСКИМИ КОРПОРАТИВНЫМИ  ОРГАНИЗАЦИЯМИ',
        '&nbsp;&nbsp;Хозяйственные товарищества',
        '&nbsp;&nbsp;&nbsp;&nbsp;Полные товарищества',
        '&nbsp;&nbsp;&nbsp;&nbsp;Товарищества на вере (коммандитные товарищества)',
        '&nbsp;&nbsp;Хозяйственные общества',
        '&nbsp;&nbsp;Акционерные общества',
        '&nbsp;&nbsp;&nbsp;&nbsp;Публичные акционерные общества',
        '&nbsp;&nbsp;&nbsp;&nbsp;Непубличные акционерные общества',
        '&nbsp;&nbsp;Общества с ограниченной ответственностью'];
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
