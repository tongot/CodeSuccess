export interface IBannerSliderItem {
  link: string;
  imageLink: string;
}

export class BannerSliderItem implements IBannerSliderItem {
  constructor(public link: string, public imageLink: string) {}
}

export class BannerSliderItems {
  constructor(public items: BannerSliderItem[]) {}
  //#region private props
  private numberOfItems: number = this.items.length;
  private itemWidth: number = 100 / this.numberOfItems;
  private currentSlide = 1;
  private currentTransition = 0;
  private currentDirection = 1;
  private moveBy = 0;
  //#endregion

  //#region getters

  get transform(): string {
    return 'translate(-' + this.moveBy + '%)';
  }
  get getInnerBannerWidth(): string {
    return this.itemWidth * this.numberOfItems * this.numberOfItems + '%';
  }
  get getItemWidth(): string {
    return (
      'width: ' +
      this.calcItemWidth() +
      '%;' +
      'flex-basis:' +
      this.calcItemWidth() +
      '%;'
    );
  }
  //#endregion

  //#region  private func
  private calcItemWidth(): number {
    return 100 / this.numberOfItems;
  }
  //#endregion

  //#region public functions
  public moveSlideRight(fromAuto: boolean): void {
    if (this.numberOfItems > 1) {
      if (this.currentTransition < 100 - this.calcItemWidth()) {
        this.currentTransition += this.calcItemWidth();
        if (!fromAuto) {
          this.currentSlide++;
        }
      }
      this.moveBy = this.currentTransition;
    }
  }
  public moveSlideLeft(fromAuto: boolean): void {
    if (this.numberOfItems > 1) {
      if (this.currentTransition > 0) {
        this.currentTransition -= this.calcItemWidth();
        if (!fromAuto) {
          this.currentSlide++;
        }
        this.moveBy = this.currentTransition;
      }
    }
  }
  public AutoRun(): void {
    if (this.currentDirection == 1) {
      if (this.currentSlide === this.numberOfItems) {
        this.currentDirection = -1;
        this.currentSlide--;
        this.moveSlideLeft(true);
      } else {
        console.log(this.currentSlide);
        this.currentSlide++;
        this.moveSlideRight(true);
      }
    } else {
      if (this.currentSlide == 1) {
        this.currentDirection = 1;
        this.currentSlide++;
        this.moveSlideRight(true);
      } else {
        console.log(this.currentSlide);
        this.currentSlide--;
        this.moveSlideLeft(true);
      }
    }
  }

  //#endregion
}
