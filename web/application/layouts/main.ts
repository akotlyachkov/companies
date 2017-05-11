import {Component} from "@angular/core";


@Component({
    selector: 'main',
    template: `
<navbar></navbar>
<features></features>
<tabs></tabs>
<router-outlet></router-outlet>
`
})
export class MainLayout {

}