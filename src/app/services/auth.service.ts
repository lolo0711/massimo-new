import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginObject, Session} from '../models';
import * as Http from 'http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject): Observable<Session> {
    return this.http.post(this.basePath + 'login', loginObj);
  }

  logout(): Observable<Boolean> {
    return this.http.post(this.basePath + 'logout', {});

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
