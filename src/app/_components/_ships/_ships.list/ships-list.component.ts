import {Component, Input, OnInit} from "@angular/core";
import {ShipsService} from "@/_services";

@Component({
    selector: 'app-ships-list',
    templateUrl: './ships-list.component.html'
})

export class ShipsListComponent implements OnInit {

    @Input()listShips: any;

    constructor() {
    }

    ngOnInit() {

    }
}
