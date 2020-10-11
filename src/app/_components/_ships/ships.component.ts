import {Component, OnInit} from "@angular/core";
import {ShipsService} from "@/_services";

@Component({
    selector: 'app-ships',
    templateUrl: './ships.component.html'
})

export class ShipsComponent implements OnInit {

    listShips: any;
    private showError: boolean = false;

    constructor(private _shipsService: ShipsService) {
    }

    ngOnInit() {
        this.loadShips();
    }

    loadShips() {
        this._shipsService.getStarships().subscribe(data => {
            this.listShips = data;
        }, error => {
            this.showError = true;
        })
    }
}
