import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  slides = [
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(36).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(37).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(39).jpg" },
    { src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(40).jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
