import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Models/IModel';
import { ILogin } from '../Models/IModel';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  _url = '';
  constructor(private _http: HttpClient) {}

  RegisterUser(newUser: IRegister) {
    console.log(newUser);
    return this._http.post<any>(this._url, newUser);
  }
  LoginUser(credentials: ILogin){
    console.log(credentials)
    return this._http.post<any>(this._url,credentials)
  }
}
