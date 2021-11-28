import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDataComponent } from './shipping-data.component';

describe('ShippingDataComponent', () => {
  let component: ShippingDataComponent;
  let fixture: ComponentFixture<ShippingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
