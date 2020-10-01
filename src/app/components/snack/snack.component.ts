import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss'],
})
export class SnackComponent implements OnInit {
  snackIcon: string;
  iconColor: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon(): void {
    if (this.data.snackType == 'success') {
      this.snackIcon = 'check_circle';
      this.iconColor = 'success-icon';
    } else if (this.data.snackType == 'error') {
      this.snackIcon = 'error';
      this.iconColor = 'error-icon';
    } else if (this.data.snackType == 'warning') {
      this.snackIcon = 'warning';
      this.iconColor = 'warning-icon';
    } else {
      this.snackIcon = 'info';
      this.iconColor = 'info-icon';
    }
  }
}
