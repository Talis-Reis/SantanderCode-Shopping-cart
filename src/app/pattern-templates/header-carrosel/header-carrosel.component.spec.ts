import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCarroselComponent } from './header-carrosel.component';

describe('HeaderCarroselComponent', () => {
  let component: HeaderCarroselComponent;
  let fixture: ComponentFixture<HeaderCarroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCarroselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
