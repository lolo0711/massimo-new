import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-ships-detail',
    templateUrl: './ships.detail.component.html'
})

export class ShipsDetailComponent implements OnInit {

    @Input() shipItem: any;
    mostrarItem: boolean = false;
    shipId: any;

    constructor() {
    }

    ngOnInit() {
        this.getStarshipId();
    }

     getStarshipId() {
        var url = this.shipItem.url;
        this.shipId = url.split("/").filter(function (item) {
            return item !== "";
        }).slice(-1)[0];
    }

    goToDetall(item: any) {
        this.mostrarItem = true;


    }
}
