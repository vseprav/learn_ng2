import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  private _baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this._baseUrl+'users').map(resp => resp.json());
  }
}
