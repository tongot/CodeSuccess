import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserListComponent} from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
