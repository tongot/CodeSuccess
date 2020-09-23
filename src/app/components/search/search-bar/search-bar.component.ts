import {Component, OnInit, ViewChild} from '@angular/core';
import {map, startWith} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Departments} from "../../../shared/departments";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  recheckIfInMenu: boolean;

  control = new FormControl();
  filteredDepartments: Observable<string[]>;
  selected = 'Shop by department';
  departments = Departments;

  value = "null";

  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];

  constructor() { }

  ngOnInit(): void {
    this.recheckIfInMenu = false;

    this.filteredDepartments = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
