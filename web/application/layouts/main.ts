import {Component} from "@angular/core";
import {SharedService} from "../providers/global";
import {ActivatedRoute} from "@angular/router";


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
constructor(shared: SharedService,private route: ActivatedRoute){
    shared.configServer = this.route.snapshot.data['serverConfig'];
}
}