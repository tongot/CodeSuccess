import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit {
  constructor() {}
  moveRight = false;
  currentTrans = 0;
  private width = 100; //carousel length by default
  private itemWidth = 0; //with of slide items

  items = [
    { image: '../../../assets/carousel/722541220058344269.png', url: '#' },
    {
      image:
        '../../../assets/carousel/new_shop_local_lp_carousel_1292x300_2020_1.png',
      url: '#',
    },
  ];

  ngOnInit(): void {
    this.calculateWidth();
  }
  get getW() {
    return 'width: ' + this.width + '%';
  }
  get getIW() {
    return (
      'width: ' + this.itemWidth + '%;' + 'flex-basis:' + this.itemWidth + '%;'
    );
  }

  calculateWidth(): void {
    if (this.items.length > 0) {
      this.width = this.width * this.items.length;
      //100= full width
      //divide full with by number of items to get length of each item
      this.itemWidth = Math.round(100 / this.items.length);
    }
  }
  next(carousel) {
    if (this.items.length > 1) {
      if (this.currentTrans < 100 - this.itemWidth) {
        this.currentTrans += this.itemWidth;
      }
      carousel.style.transform = 'translate(-' + this.currentTrans + '%)'; //scroll to show next item
    }
  }
  prev(carousel) {
    if (this.items.length > 1) {
      if (this.currentTrans > 0) {
        this.currentTrans -= this.itemWidth;
        console.log(this.currentTrans + 'hit  ');
        carousel.style.transform = 'translate(-' + this.currentTrans + '%)'; //scroll to show prev item
      }
    }
  }
  go(url) {
    console.log(url);
  }
}
