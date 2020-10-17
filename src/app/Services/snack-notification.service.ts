import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../components/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackNotificationService {

  constructor(private snackBar: MatSnackBar) {}

  public openErrorSnackBar(message:string) {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: {
        message: message,
        snackType: 'error',
      },
    });
  }
  public openSuccessSnackBar(message:string) {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 10000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: {
        message: message,
        snackType: 'success',
      },
    });
  }
  public openInfoSnackBar(message:string) {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 10000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: {
        message: message,
        snackType: 'info',
      },
    });
  }



}
