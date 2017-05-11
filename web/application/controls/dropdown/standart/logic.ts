import {Component} from "@angular/core";
import {BaseDropwownControl} from "../base";

@Component({
    selector: 'select-logic',
    templateUrl: 'standart.html'
})
export class HeadcountDropwownControl extends BaseDropwownControl {
    items = [
        'И',
        'ИЛИ'];
    selectedItem = this.items[0];

}
