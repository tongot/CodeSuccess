import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Automotive } from '../../shared/data/automotive'
import { CarouselComponent } from "./carousel/carousel.component";

import { SliderItemDirective } from "../directive/slider-item.directive";

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {

  public slides = [
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(36).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(37).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(39).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(40).jpg" }
  ];

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





}
