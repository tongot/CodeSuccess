import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IBannerSliderItem } from 'src/app/Models/IModel';
import {BannerSliderServiceService} from '../../services/banner-slider-service.service'


@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit, OnDestroy {
  @Input() bannerSlide: IBannerSliderItem[];
  IntervalSlide;
  constructor( public _banner:BannerSliderServiceService) {

  }
  ngOnDestroy(): void {
    clearInterval(this.IntervalSlide);
  }
  ngOnInit(): void {    
    this._banner.setNumberOfItems(this.bannerSlide);
    this.SlideAutoRun();
  }
  next() {
    this._banner.moveSlideRight(false);
  }
  prev() {
    this._banner.moveSlideLeft(false);
  }
  go(url) {
    console.log(url);
  }
  SlideAutoRun() {
    this.IntervalSlide = setInterval(() => {
      this._banner.autoRun();
    }, 5000);
  }
}
