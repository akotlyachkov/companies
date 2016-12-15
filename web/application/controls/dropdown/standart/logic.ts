import {Component} from "@angular/core";
import {BaseDropwownControl} from "../base";

@Component({
    moduleId: module.id,
    selector: 'select-logic',
    templateUrl: 'standart.html'
})
export class HeadcountDropwownControl extends BaseDropwownControl {
    items = [
        'И',
        'ИЛИ'];
    selectedItem = this.items[0];

}
