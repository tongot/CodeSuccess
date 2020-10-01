import { Component, OnInit } from '@angular/core';
import { SelectedCategory } from 'src/app/Models/CheckLists/CheckCategories';
import { AccountService } from 'src/app/Services/account.service';
import { Register } from '../../../Models/account/Register';
import { NotificationService } from 'src/app/Services/notification.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  newUser = new Register(true, true);

  constructor(
    private _accountService: AccountService,
    private _notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.newUser.selectedCategories = [
      new SelectedCategory(false, 'Books'),
      new SelectedCategory(false, 'Kitchen'),
      new SelectedCategory(false, 'Home'),
    ];
  }

  RegisterUser(registerForm): void {
    if (
      !registerForm.valid ||
      !this.isPasswordMatch() ||
      !this.isEmailMatch()
    ) {
      return;
    }
    this._notify.openSnackBar({
      message: 'We are the best',
      snackType: 'info',
    });
    this._accountService.RegisterUser(this.newUser).subscribe(
      (data) => console.log('success', data),
      (error) => console.log('error', error)
    );
  }
  isPasswordMatch(): boolean {
    return this.newUser.password != this.newUser.confirmPassword ? false : true;
  }
  isEmailMatch(): boolean {
    return this.newUser.email != this.newUser.confirmEmail ? false : true;
  }
}
