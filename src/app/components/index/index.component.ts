import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AutomotiveService} from 'src/app/automative.service';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

constructor(private autoService: AutomotiveService, private http: HttpClient,
            private route: ActivatedRoute ) { }

sectionTitle = 'Products';
errorMessage = '';
// product: IProductResolved;
rating: number;
// tslint:disable-next-line: variable-name
arrayFilter = '';

// filteredProducts: IProduct[] = [];
products: Product[] = [];

  ngOnInit(): void {
  }

}
