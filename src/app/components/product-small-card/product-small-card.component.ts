import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from 'src/app/Models/IModel';

@Component({
  selector: 'app-product-small-card',
  templateUrl: './product-small-card.component.html',
  styleUrls: ['./product-small-card.component.scss'],
})
export class ProductSmallCardComponent implements OnInit {
  @Input() product:IProduct;
  constructor() {}

  ngOnInit(): void {}
   getDescription(name: string): string {
    if (name != null || undefined) {
      if (name.length > 40) {
        return name.slice(0, 40) + '...';
      }
      return name;
    }
    return '...';
  }
}
