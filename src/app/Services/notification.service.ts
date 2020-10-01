import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../../app/components/snack/snack.component';
import { SnackBarNotification } from '../Models/Notification/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}
  public openSnackBar(data: SnackBarNotification) {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: data.duration === undefined ? 5000 : data.duration,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: {
        message: data.message,
        snackType: data.snackType === undefined ? 'success' : data.snackType,
      },
    });
  }
}
