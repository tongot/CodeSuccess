import { Component, OnInit, Input } from '@angular/core';

import { Router } from "@angular/router";
import {string_to_slug} from "../../../shared/data/resources";

@Component({
  selector: 'app-automotive',
  templateUrl: './automotive.component.html',
  styleUrls: ['./automotive.component.scss']
})
export class AutomotiveComponent implements OnInit {

  @Input() dataSource;

  currentSlide = 0;
  zero = 0;
  one = 1;
  two = 2;
  three = 3;
  four = 4;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.dataSource.length - 1 : previous;

    this.zero = this.currentSlide;
    this.one   = this.currentSlide === this.dataSource.length - 1 ? 0 : this.currentSlide + 1;

    this.two = this.one + 1 ;
    this.two = this.one >= this.dataSource.length - 1 ? 1 : this.two;
    this.two = this.currentSlide === 5 ? 0 : this.two;

    this.three = this.two + 1;
    this.three = this.two >= this.dataSource.length - 1 ? 1 : this.three;
    this.three = this.one === 5 ? 0 : this.three;

    this.four = this.three === this.dataSource.length - 1 ? 0 : this.three + 1

    console.log("previous clicked, new current slide is: ", this.currentSlide, this.one, this.two, this.three, this.four);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    const next1 = this.currentSlide + 2;
    const next2 = this.currentSlide + 3;
    // const next3 = this.currentSlide + 4;

    this.currentSlide = next  === this.dataSource.length ? 0 : next;

    this.zero = this.currentSlide;

    this.one          = next1 >= this.dataSource.length  ? 0
      : next1 == 0 ? 1 : next1;

    this.two        = next2 >= this.dataSource.length  ? 0
      : next2 == 0 ? 1 : next2;

    this.one   = this.one   == this.currentSlide ? ++this.one : this.one;
    this.two = this.two == this.one ? ++ this.two : this.two;
    this.two = this.two == this.currentSlide ? this.two += 2 : this.two;

    this.three = this.two == this.dataSource.length - 1 ? 0 : this.two + 1;

    this.four = this.three == this.dataSource.length -1 ? 0 : this.three + 1;

    console.log("next clicked, new current slide is: ", this.currentSlide, this.one, this.two, this.three, this.four);
  }

  selectProduct(productData) {
    console.log(productData);
    const url = string_to_slug(productData);
    console.log(url);
    this.router.navigate(['', url], {state: {data: productData}});
    // this.titles.map(t=>t.isSelected = false);
    // title.isSelected = true;
    // this.titleSelected = title;
    // console.log(this.titles);
    // alert('Called from ' + title);
  }

}
