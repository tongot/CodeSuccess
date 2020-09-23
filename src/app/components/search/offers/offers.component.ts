import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  devices=[{path:'shopLocal', name: "Shop Local"},{path:'newElectronics', name: "New Electronics"},{path:'exclusivetoTakealot', name: "Exclusive to Takealot"}, {path: 'clearanceStore', name: "Clearance Store"}, {path: "fashionOutlet", name: "Fashion Outlet"}, {path: "everydayEssentials", name: "Everyday Essentials"}, {path: 'dealsAndPromotions', name: "Deals & Promotions"}, {path: 'brandStores', name: 'Brand Stores'}]

}
