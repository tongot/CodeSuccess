import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  title = 'code-success';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
