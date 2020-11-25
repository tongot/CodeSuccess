import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Models/account/register';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url = '';
  // tslint:disable-next-line: variable-name
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  RegisterUser(newUser: IRegister) {
    console.log(newUser);
    return this.http.post<any>(this.url, newUser);
  }
}
