import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departments } from '../../shared/departments';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  departments: Array<any>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.departments = Departments;
  }

  getSearchBarHeight(searchBar): string {
    return this.router.url === '/'
      ? (searchBar.style.height = '75px')
      : (searchBar.style.height = '40px');
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
