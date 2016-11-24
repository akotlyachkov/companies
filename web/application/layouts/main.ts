import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
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