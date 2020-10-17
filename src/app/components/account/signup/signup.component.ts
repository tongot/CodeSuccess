import { Component, OnInit } from '@angular/core';
import { SelectedCategory } from 'src/app/Models/Model';
import { AccountService } from 'src/app/Services/account.service';
import { Register } from '../../../Models/Model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  newUser = new Register();

  constructor(
    private _accountService: AccountService,
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
      !this.newUser.isPasswordMatching() ||
      !this.newUser.isEmailMatch()
    ) {
      return;
    }
    this._accountService.RegisterUser(this.newUser).subscribe(
      (data) => console.log('success', data),
      (error) => console.log('error', error)
    );
  }
}
