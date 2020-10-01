import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public slides = [
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(36).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(37).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(39).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(40).jpg" }
  ];


  brands = [
    { src: '/assets/carousel/brands/berlingerhaus.webp'},
    { src: '/assets/carousel/brands/blackdecker.webp'},
    { src: '/assets/carousel/brands/blaupunkt.webp'},
    { src: '/assets/carousel/brands/campground.webp'},
    { src: '/assets/carousel/brands/computers.webp'},
    { src: '/assets/carousel/brands/dyson.webp'}
  ];
  next: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(index) {
    window.location.assign("https://www.google.com");
  }

  public onCardClick(evt: MouseEvent){
    window.location.assign("https://www.google.com");
  }


}
