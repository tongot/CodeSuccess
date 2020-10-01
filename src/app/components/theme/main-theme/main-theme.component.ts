import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-theme',
  templateUrl: './main-theme.component.html',
  styleUrls: ['./main-theme.component.scss']
})
export class MainThemeComponent implements OnInit {

  @Input() slides;

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

}
