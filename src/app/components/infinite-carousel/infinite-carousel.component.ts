import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteSliderItems } from 'src/app/Models/Model';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrls: ['./infinite-carousel.component.scss'],
})
export class InfiniteCarouselComponent implements OnInit {
  @Input() slideItem: InfiniteSliderItems;
  itemWidth= 0;
  numberOfItems = 0;
  moveBy = 0;
  sliderWidth=0;
  itemsOffView=0;
  fullWidth = 100;
  direction: number = 1;

  constructor(private route: Router) {}
  

  ngOnInit(): void {
    this.itemWidth =this.fullWidth / this.slideItem.viewItems
    this.numberOfItems = this.slideItem.sliderItems.length;
    this.moveBy = this.fullWidth/this.numberOfItems;
    this.sliderWidth = this.numberOfItems * this.itemWidth;
    this.itemsOffView=this.numberOfItems - this.slideItem.viewItems;
  }

  prev(container, slider): void {
    slider.style.transition = 'all 0.5s';
    if (this.direction == 1) {
      for (let i = 0; i < this.itemsOffView; i++) {
        slider.appendChild(slider.firstElementChild);
      }
      this.direction = -1;
    }
    container.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-' + this.moveBy + '%)';
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      slider.appendChild(slider.firstElementChild);
    }, 500);
    setTimeout(() => {
      slider.style.transition = 'all 0.5s';
    }, 2);
  }
  next(container, slider): void {
    slider.style.transition = 'all 0.5s';

    if (this.direction == -1) {
      for (let i = 0; i < this.itemsOffView; i++) {
        slider.prepend(slider.lastElementChild);
      }
      this.direction = 1;
    }
    container.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(' + this.moveBy + '%)';
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      slider.prepend(slider.lastElementChild);
    }, 500);
    setTimeout(() => {
      slider.style.transition = 'all 0.5s';
    }, 2);
  }

  get getItemW() {
    return 'width: ' + this.itemWidth + '%';
  }
  get getSliderWth() {
    return 'width: ' + this.sliderWidth + '%';
  }

  gotoPage(url): void {
    console.log(url);
    this.route.navigate([url]);
  }
}
