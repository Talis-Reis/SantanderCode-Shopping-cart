import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSessionComponent } from './products-session.component';

describe('ProductsSessionComponent', () => {
  let component: ProductsSessionComponent;
  let fixture: ComponentFixture<ProductsSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
