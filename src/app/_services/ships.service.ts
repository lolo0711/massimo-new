import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ShipsService {
    constructor(private http: HttpClient) {
    }

    getStarships() {
        // url hardcoded
        let url = 'https://swapi.dev/api/starships/';
        return this.http.get(url);
    }

    getFilm(url) {


        return this.http.get('https://swapi.dev/api/people/9/');
    }






}

