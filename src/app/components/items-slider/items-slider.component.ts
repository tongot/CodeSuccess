import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-slider',
  templateUrl: './items-slider.component.html',
  styleUrls: ['./items-slider.component.scss'],
})
export class ItemsSliderComponent implements OnInit {
  constructor() {}
  count = 0;
  currentView = 0;
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {}
  next(slider) {
    if (this.count < 5) {
      this.count++;
      this.currentView += 20;
      slider.style.transform = 'translate(-' + this.currentView + '%)'; //scroll to show next item
    }
  }
  prev(slider) {
    if (this.count > 0) {
      this.count--;
      this.currentView -= 20;
      slider.style.transform = 'translate(-' + this.currentView + '%)'; //scroll to show prev item
    }
  }
}
