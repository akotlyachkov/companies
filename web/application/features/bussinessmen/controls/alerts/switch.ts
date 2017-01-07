import {Component} from "@angular/core";
@Component({
    selector: 'alert-switch',
    template: `<p>Исправлена раскладка клавиатуры в «<a class="dashed pointer" (click)="search()">{{filter.queryAlt}}</a>» 
                    <a class="pointer" (click)="hide()"><i class="fa fa-times"></i></a>
               </p>`
})
export class AlertSwitch {
    hide() {

    }
    search() {

    }
}