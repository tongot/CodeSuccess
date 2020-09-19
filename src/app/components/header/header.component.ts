import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  openMenu(upArrow, downArrow) {
    upArrow.style.display = 'none';
    downArrow.style.display = '';
  }
  closeMenu(upArrow, downArrow) {
    upArrow.style.display = '';
    downArrow.style.display = 'none';
  }
  CartItems = [{ item: 'Timberland' }, { item: 'Mask' }];
}
