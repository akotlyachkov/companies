import {Component} from "@angular/core";
import './companies.scss'
@Component({
    selector: 'actions-companies',
    host:{'class':"pull-right"},
    templateUrl: 'companies.html'
})
export class ActionsCompaniesControl {

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