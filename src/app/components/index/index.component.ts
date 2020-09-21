import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomotiveService } from 'src/app/automative.service';
import { Product } from 'src/app/shared/product';
import {BeautyService} from 'src/app/beauty.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

constructor(private autoService: BeautyService,
            private route: ActivatedRoute ) { }

sectionTitle = 'Automative Products';
errorMessage = 'Cant get products';
// product: IProductResolved;
rating: number;
// tslint:disable-next-line: variable-name
arrayFilter = '';

// filteredProducts: IProduct[] = [];
products: Product[] = [];

  ngOnInit(): void {
    this.autoService.getBeautyProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (err) => this.errorMessage = err
    );
    console.log(this.errorMessage);
  }

}
