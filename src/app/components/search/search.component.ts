import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {

  }

  devices=[{path:'shopLocal', name: "Shop Local"},{path:'newElectronics', name: "New Electronics"},{path:'exclusivetoTakealot', name: "Exclusive to Takealot"}, {path: 'clearanceStore', name: "Clearance Store"}, {path: "fashionOutlet", name: "Fashion Outlet"}, {path: "everydayEssentials", name: "Everyday Essentials"}, {path: 'dealsAndPromotions', name: "Deals & Promotions"}, {path: 'brandStores', name: 'Brand Stores'}]



}
