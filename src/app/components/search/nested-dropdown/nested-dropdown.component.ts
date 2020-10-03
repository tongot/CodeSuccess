import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departments, ShopByDepartments } from '../../../shared/departments';

@Component({
  selector: 'app-nested-dropdown',
  templateUrl: './nested-dropdown.component.html',
  styleUrls: ['./nested-dropdown.component.scss'],
})
export class NestedDropdownComponent implements OnInit {
  shopByDepartmentsList: Array<any>;
  subCategory: Array<any>;
  currentMenu: string;
  currentBannerImage: string;
  openDropdown = false;
  closeMenu = true;

  constructor(private router: Router) {
    this.shopByDepartmentsList = ShopByDepartments[0].children;
  }

  ngOnInit(): void {
    this.openDropdown = this.isOnIndexPage() ? true : false;
  }

  //get a shortened word if word too long for menu
  getLabel(name: string): string {
    if (name != null || undefined) {
      if (name.length > 18) {
        return name.slice(0, 19) + '...';
      }
      return name;
    }
    return null;
  }
  getSubCategory(shopBy): void {
    this.currentMenu = shopBy.label;
    this.currentBannerImage = shopBy.image;
    this.subCategory = shopBy.children;
  }
  openMenuOnHover() {
    if (!this.isOnIndexPage()) {
      this.openDropdown = true;
    }
  }
  closeMenuOnHover() {
    if (!this.isOnIndexPage()) {
      this.openDropdown = false;
    }
  }
  isOnIndexPage() {
    return this.router.url === '/' ? true : false;
  }
}
