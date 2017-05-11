import { Component } from '@angular/core';
import './pager.scss'

@Component({
    selector: 'pager',
    templateUrl: 'pager.html'
})
export class PagerControl {
    public totalItems:number = 64;
    public currentPage:number = 4;

    public maxSize:number = 5;
    public bigTotalItems:number = 175;
    public bigCurrentPage:number = 1;

    public setPage(pageNo:number):void {
        this.currentPage = pageNo;
    };

    public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
}