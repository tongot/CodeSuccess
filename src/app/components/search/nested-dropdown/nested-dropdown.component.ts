import { Component, OnInit, ViewChild } from '@angular/core';

import { MatMenuTrigger } from "@angular/material/menu";

import { Departments, ShopByDepartments} from '../../../shared/departments';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-nested-dropdown',
  templateUrl: './nested-dropdown.component.html',
  styleUrls: ['./nested-dropdown.component.scss']
})
export class NestedDropdownComponent implements OnInit {

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  recheckIfInMenu: boolean;

  index:  number = 0;
  shopByDepartments: Array<any>;

  constructor() {
    this.shopByDepartments = ShopByDepartments;
  }

  ngOnInit(): void {
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 175);
  }

}
