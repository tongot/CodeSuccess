import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IModel';


@Component({
  selector: 'app-items-slider',
  templateUrl: './items-slider.component.html',
  styleUrls: ['./items-slider.component.scss'],
})
export class ItemsSliderComponent implements OnInit {
  @Input() productSForSlider:IProduct[];
  constructor() {}
  count = 0;
  currentView = 0;


  ngOnInit(): void {
  }
  next(slider) {
    if (this.count < 5) {
      this.count++;
      this.currentView += 10;
      slider.style.transform = 'translate(-' + this.currentView + '%)'; //scroll to show next item
    }
  }
  prev(slider) {
    if (this.count > 0) {
      this.count--;
      this.currentView -= 10;
      slider.style.transform = 'translate(-' + this.currentView + '%)'; //scroll to show prev item
    }
  }
  getProduct(id){
    console.log(id)
  }
}
