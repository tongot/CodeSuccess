import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Departments } from '../../shared/departments';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  departments: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.departments = Departments;
  }

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
}
