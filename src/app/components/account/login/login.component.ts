import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import {SnackNotificationService} from 'src/app/services/snack-notification.service'
import { Login} from '../../../Models/Model'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   credentials = new Login();

  constructor( private _account: AccountService,private _notify :SnackNotificationService) { 
  }

  ngOnInit(): void {
  }
  Login(formLogin):void{
    this._notify.openInfoSnackBar("Infor");
    if(!formLogin.valid)
    {
      return
    }
    this._account.LoginUser(this.credentials).subscribe();
  }
}
