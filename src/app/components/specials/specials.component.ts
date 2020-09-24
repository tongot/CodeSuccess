import { Component, OnInit, AfterContentInit, ContentChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { Automotive } from '../../shared/data/automotive'

import { SliderItemDirective } from "../../directive/slider-item.directive";

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements AfterContentInit {

  @ContentChildren(SliderItemDirective, { read: ElementRef }) items
    : QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('slides') slidesContainer: ElementRef<HTMLDivElement>;

  private slidesIndex = 0;

  get currentItem(): ElementRef<HTMLDivElement> {
    return this.items.find((item, index) => index === this.slidesIndex);
  }

  ngAfterContentInit() {
    console.log('items', this.items);
  }

  ngAfterViewInit() {
    console.log('slides', this.slidesContainer);
  }

  onClickLeft() {
    this.slidesContainer.nativeElement.scrollLeft -= this.currentItem.nativeElement.offsetWidth;

    if (this.slidesIndex > 0) {
      this.slidesIndex--;
    }
  }

  onClickRight() {
    this.slidesContainer.nativeElement.scrollLeft += this.currentItem.nativeElement.offsetWidth;

    if (this.slidesIndex < this.items.length - 1) {
      this.slidesIndex++
    }
  }

  onSpecial = [
    {
      title: "Keep Your Car Clean & Safe",
      department: 'automotive',
      path: "../../shared/data/automotive"
    }, {
      title: "Pampers Wipes & Nappies",
      department: 'babyToddler',
      path: "../../shared/data/bayToddler"
    }, {
      title: "Explore The Nivea Beauty Products Range",
      department: 'beauty',
      path: "../../shared/data/beauty"
    }, {
      title: "Study Material & Fictional Books",
      department: 'booksCourses',
      path: "../../shared/data/booksCourses"
    }, {
      title: "Best Outdoor Equipment For Groups & Individuals",
      department: 'campingOutdoor',
      path: "../../shared/data/campingOutdoor"
  }]

  dataSource = Automotive

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  select(title) {
    console.log(title);
    this.router.navigate(['product', title]);
  }




}
