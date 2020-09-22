import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactDropdownComponent } from './compact-dropdown.component';

describe('CompactDropdownComponent', () => {
  let component: CompactDropdownComponent;
  let fixture: ComponentFixture<CompactDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
