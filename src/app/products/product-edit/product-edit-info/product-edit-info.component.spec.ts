import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditInfoComponent } from './product-edit-info.component';

describe('ProductEditInfoComponent', () => {
  let component: ProductEditInfoComponent;
  let fixture: ComponentFixture<ProductEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
