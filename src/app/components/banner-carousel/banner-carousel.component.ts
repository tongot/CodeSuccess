import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BannerSliderItems } from 'src/app/Models/OtherModels/bannerSlider';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit, OnDestroy {
  @Input() bannerSlide: BannerSliderItems;
  IntervalSlide;
  constructor() {}
  ngOnDestroy(): void {
    clearInterval(this.IntervalSlide);
  }
  ngOnInit(): void {
    this.SlideAutoRun();
  }
  next() {
    this.bannerSlide.moveSlideRight(false);
  }
  prev() {
    this.bannerSlide.moveSlideLeft(false);
  }
  go(url) {
    console.log(url);
  }
  SlideAutoRun() {
    this.IntervalSlide = setInterval(() => {
      this.bannerSlide.AutoRun();
    }, 5000);
  }
}
