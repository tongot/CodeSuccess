import { Injectable } from '@angular/core';
import { IBannerSliderItem } from '../Models/IModel';

@Injectable({
  providedIn: 'root'
})
export class BannerSliderServiceService {

  constructor() {
   }
  private numberOfItems: number = 0;
  private itemWidth: number =0
  private currentSlide: number = 1;
  private currentTransition: number = 0;
  private currentDirection: number = 1;
  private moveBy: number = 0;
  private bannerWidth = 0;

  get transform(): string {
    return 'translate(-' + this.moveBy + '%)';
  }
  get getInnerBannerWidth(): string {
    return this.bannerWidth + '%';
  }
  get getItemWidth(): string {
    return (
      'width: ' +
      this.itemWidth +
      '%;' +
      'flex-basis:' +
      this.itemWidth +
      '%;'
    );
  }
  setNumberOfItems(items:IBannerSliderItem[]){
    this.numberOfItems= items.length
    this.itemWidth = 100/this.numberOfItems;
    this.bannerWidth = this.itemWidth * this.numberOfItems * this.numberOfItems;
  }
   moveSlideRight(fromAuto: boolean): void {
    if (this.numberOfItems > 1&&this.currentTransition < 100 - this.itemWidth ) {
        this.currentTransition += this.itemWidth;
      this.moveBy = this.currentTransition;
    } 
    if (!fromAuto) {
          this.currentSlide++;
        }
  }
   moveSlideLeft(fromAuto: boolean): void {
    if (this.numberOfItems > 1 && this.currentTransition > 0) {
        this.currentTransition -= this.itemWidth;
        this.moveBy = this.currentTransition;
    }       
    if (!fromAuto) {
          this.currentSlide++;
        }
  }
   autoRun(): void {
    if (this.currentDirection == 1) {
      if (this.currentSlide === this.numberOfItems) {
        this.currentDirection = -1;
        this.currentSlide--;
        this.moveSlideLeft(true);
      } else {
        this.currentSlide++;
        this.moveSlideRight(true);
      }
    } else {
      if (this.currentSlide == 1) {
        this.currentDirection = 1;
        this.currentSlide++;
        this.moveSlideRight(true);
      } else {
        this.currentSlide--;
        this.moveSlideLeft(true);
      }
    }
  }
}
