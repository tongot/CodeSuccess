import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteSliderItems } from 'src/app/models/otherModels/infiniteSlider';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrls: ['./infinite-carousel.component.scss'],
})
export class InfiniteCarouselComponent implements OnInit {
  @Input() slideItem: InfiniteSliderItems;

  constructor(private route: Router) {}
  direction = 1;
  ngOnInit(): void {}

  prev(s, c): void {
    c.style.transition = 'all 0.5s';
    if (this.direction === 1) {
      for (let i = 0; i < this.slideItem.itemsOffView; i++) {
        c.appendChild(c.firstElementChild);
      }

      this.direction = -1;
    }
    s.style.justifyContent = 'flex-start';
    c.style.transform = 'translate(-' + this.slideItem.moveByTransition + '%)';
    setTimeout(() => {
      c.style.transition = 'none';
      c.style.transform = 'translate(0)';
      c.appendChild(c.firstElementChild);
    }, 500);
    setTimeout(() => {
      c.style.transition = 'all 0.5s';
    }, 2);
  }
  next(s, c): void {
    c.style.transition = 'all 0.5s';

    if (this.direction === -1) {
      for (let i = 0; i < this.slideItem.itemsOffView; i++) {
        c.prepend(c.lastElementChild);
      }
      this.direction = 1;
    }
    s.style.justifyContent = 'flex-end';
    c.style.transform = 'translate(' + this.slideItem.moveByTransition + '%)';
    setTimeout(() => {
      c.style.transition = 'none';
      c.style.transform = 'translate(0)';
      c.prepend(c.lastElementChild);
    }, 500);
    setTimeout(() => {
      c.style.transition = 'all 0.5s';
    }, 2);
  }
  gotoPage(url): void {
    // console.log(url);
    this.route.navigate([url]);
  }
}
