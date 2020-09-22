import { Component, OnInit } from '@angular/core';

import { ShopByDepartments } from "../../../shared/departments";
import { Departments } from "../../../shared/departments";

@Component({
  selector: 'app-compact-dropdown',
  templateUrl: './compact-dropdown.component.html',
  styleUrls: ['./compact-dropdown.component.scss']
})
export class CompactDropdownComponent implements OnInit {

  index:  number = 0;
  shopByDepartments: Array<any>;
  departments = Departments;
  selected = 'Shop by department';

  constructor() {
    this.shopByDepartments = ShopByDepartments;
  }

  ngOnInit(): void {
  }

}
