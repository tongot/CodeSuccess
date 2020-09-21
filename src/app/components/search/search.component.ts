import { Component, OnInit, ViewChild } from '@angular/core';

import { MatMenuTrigger } from "@angular/material/menu";
import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router'

import { Departments } from "../../shared/departments";
import { ShopByDepartments } from "../../shared/departments";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  recheckIfInMenu: boolean;

  control = new FormControl();
  filteredDepartments: Observable<string[]>;
  selected = 'Shop by department';
  departments = Departments;
  index:  number = 0;
  shopByDepartments: Array<any>;

  constructor( private router:Router ) {
    this.shopByDepartments = ShopByDepartments;
  }

  ngOnInit(): void {
    this.recheckIfInMenu = false;

    this.filteredDepartments = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  openResourceMenu() {
    this.trigger.openMenu();
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 175);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.departments.filter(department => department.toLowerCase().indexOf(department) === 0);
  }

  devices=[{path:'shopLocal', name: "Shop Local"},{path:'newElectronics', name: "New Electronics"},{path:'exclusivetoTakealot', name: "Exclusive to Takealot"}, {path: 'clearanceStore', name: "Clearance Store"}, {path: "fashionOutlet", name: "Fashion Outlet"}, {path: "everydayEssentials", name: "Everyday Essentials"}, {path: 'dealsAndPromotions', name: "Deals & Promotions"}, {path: 'brandStores', name: 'Brand Stores'}]


  tiles: Tile[] = [
    {text: 'One',    cols: 2, rows: 1, color: 'blue'},
    {text: 'Two',    cols: 6, rows: 1, color: 'blue'},
    {text: 'Three',  cols: 1, rows: 1, color: 'blue'},
    {text: 'Four',   cols: 1, rows: 1, color: 'blue'},
    {text: 'Five',   cols: 2, rows: 1, color: 'blue'},
    {text: 'Six',    cols: 1, rows: 1, color: 'blue'},
    {text: 'Seven',  cols: 1, rows: 1, color: 'blue'},
    {text: 'Eight',  cols: 1, rows: 1, color: 'blue'},
    {text: 'Nine',   cols: 1, rows: 1, color: 'blue'},
    {text: 'Ten',    cols: 1, rows: 1, color: 'blue'},
    {text: 'Eleven', cols: 1, rows: 1, color: 'blue'},
    {text: 'Twelve', cols: 1, rows: 1, color: 'blue'},
    {text: '',       cols: 1, rows: 1, color: 'blue'},
  ];

}
