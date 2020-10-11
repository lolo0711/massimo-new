import {Component, Input, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ShipsService} from "@/_services";

@Component({
    selector: 'app-ships-detall',
    templateUrl: './ships.detall.component.html'
})

export class ShipsDetallComponent implements OnInit {

    @Input() itemDetall: any;

    public form: FormGroup;

    constructor(public formBuilder: FormBuilder, public shipService: ShipsService) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({});

        if (this.itemDetall.films.length > 0) {
            this.itemDetall.films.forEach( (film) => {
                this.shipService.getFilm(film).subscribe( item=> {
                    this.buildFilm(item);
                } )

            });

        }
        this.buildFormShip();
    }

    buildFilm(film) {
    }
    buildFormShip() {
        this.form.addControl("ship", this.formBuilder.group({
            mglt: this.itemDetall.mglet,
            cargo_capacity: this.itemDetall.cargo_capacity,
            consumables: this.itemDetall.consumables,
            cost_in_credits: this.itemDetall.cost_in_credits,
            created: this.itemDetall.created,
            crew: this.itemDetall.crew,
            edited: this.itemDetall.edited,
            hyperdrive_rating: this.itemDetall.hyperdrive_rating,
            manufacturer: this.itemDetall.manufacturer,
            model: this.itemDetall.model,
            nom: this.itemDetall.name,
            passengers: this.itemDetall.passengers,
            starship_class: this.itemDetall.starship_class,
            films: new FormArray([])
        }))
    }

    get shipForm(): FormGroup {
        return this.form.get('ship') as FormGroup;
    }
}
