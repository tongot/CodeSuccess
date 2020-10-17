import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  devices = [
    { path: 'shopLocal', name: 'Shop Local' },
    { path: 'newElectronics', name: 'New Electronics' },
    { path: 'exclusivetoTakealot', name: 'Exclusive to Takealot' },
    { path: 'clearanceStore', name: 'Clearance Store' },
    { path: 'fashionOutlet', name: 'Fashion Outlet' },
    { path: 'everydayEssentials', name: 'Everyday Essentials' },
    { path: 'dealsAndPromotions', name: 'Deals & Promotions' },
    { path: 'brandStores', name: 'Brand Stores' },
  ];

  get isIndexPage(): boolean {
    return this.router.url === '/'? true : false;
  }
}
