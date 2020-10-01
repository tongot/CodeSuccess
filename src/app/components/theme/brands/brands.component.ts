import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  @Input() brands;

  currentSlide = 0;
  zero = 0;
  one = 1;
  two = 2;
  three = 3;
  four = 4;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.brands.length - 1 : previous;

    this.zero = this.currentSlide;
    this.one   = this.currentSlide === this.brands.length - 1 ? 0 : this.currentSlide + 1;

    this.two = this.one + 1 ;
    this.two = this.one >= this.brands.length - 1 ? 1 : this.two;
    this.two = this.currentSlide === 5 ? 0 : this.two;

    this.three = this.two + 1;
    this.three = this.two >= this.brands.length - 1 ? 1 : this.three;
    this.three = this.one === 5 ? 0 : this.three;

    this.four = this.three === this.brands.length - 1 ? 0 : this.three + 1

    console.log("previous clicked, new current slide is: ", this.currentSlide, this.one, this.two, this.three, this.four);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    const next1 = this.currentSlide + 2;
    const next2 = this.currentSlide + 3;
    // const next3 = this.currentSlide + 4;

    this.currentSlide = next  === this.brands.length ? 0 : next;

    this.zero = this.currentSlide;

    this.one          = next1 >= this.brands.length  ? 0
      : next1 == 0 ? 1 : next1;

    this.two        = next2 >= this.brands.length  ? 0
      : next2 == 0 ? 1 : next2;

    this.one   = this.one   == this.currentSlide ? ++this.one : this.one;
    this.two = this.two == this.one ? ++ this.two : this.two;
    this.two = this.two == this.currentSlide ? this.two += 2 : this.two;

    this.three = this.two == this.brands.length - 1 ? 0 : this.two + 1;

    this.four = this.three == this.brands.length -1 ? 0 : this.three + 1;

    console.log("next clicked, new current slide is: ", this.currentSlide, this.one, this.two, this.three, this.four);
  }

  preloadImages() {
    for (const slide of this.brands) {
      new Image().src = slide.src;
    }
  }

}
