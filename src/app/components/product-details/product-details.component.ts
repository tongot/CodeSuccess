import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { UrlTable } from "../../shared/data/resources";
import { Automotive } from "../../shared/data/automotive";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetail: object;
  urlTable = UrlTable;
  currentUrl;
  images = 0;
  automotive = Automotive;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.productDetail = this.router.getCurrentNavigation().extras.state;
    // console.log(this.productDetail);
    console.log(activatedRoute.snapshot.url[0].path);
    this.currentUrl = activatedRoute.snapshot.url[0].path;
    let id = this.urlTable.find(iD => iD.slug === this.currentUrl);
    console.log("ID is: ", id.id);
    this.productDetail = this.automotive.find(data => data.id == id.id);
    console.log(this.productDetail['name']);
    this.images = this.productDetail['images'].length;
  }

  ngOnInit(): void {
    // console.log(this.router.);
    // this.dataSource =
  }

}
