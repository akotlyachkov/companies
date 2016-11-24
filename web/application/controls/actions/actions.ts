import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'actions',
    templateUrl: 'actions.html'
})
export class ActionsControl {

    showModal1(){
        console.log('модал1')
    }

    showModal2(){
        console.log('модал2')
    }

    showModal3(){
        console.log('модал3')
    }
}