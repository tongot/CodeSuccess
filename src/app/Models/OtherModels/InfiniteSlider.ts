export interface IInfiniteSlider {
  imageUrl: string;
  link: string;
}
export class InfiniteSlider implements IInfiniteSlider {
  constructor(public imageUrl: string, public link: string) {}
}
export class InfiniteSliderItems {
  constructor(public sliderItems: InfiniteSlider[], public viewItems: number) {}
  get getItemW() {
    return 'width: ' + 100 / this.viewItems + '%';
  }
  get getSliderWth() {
    return 'width: ' + this.sliderItems.length * (100 / this.viewItems) + '%';
  }
  get itemsOffView() {
    return this.sliderItems.length - this.viewItems;
  }
  get moveByTransition() {
    return 100 / this.sliderItems.length;
  }
}
