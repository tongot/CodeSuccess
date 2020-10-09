import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-small-card',
  templateUrl: './product-small-card.component.html',
  styleUrls: ['./product-small-card.component.scss'],
})
export class ProductSmallCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getDescription(name: string): string {
    if (name != null || undefined) {
      if (name.length > 18) {
        return name.slice(0, 19) + '...';
      }
      return name;
    }
    return null;
  }
}
