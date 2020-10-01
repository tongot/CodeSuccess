import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../Models/account/Register';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  _url = '';
  constructor(private _http: HttpClient) {}

  RegisterUser(newUser: Register) {
    console.log(newUser);
    return this._http.post<any>(this._url, newUser);
  }
}
