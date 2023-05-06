import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldetailsComponent } from './hoteldetails.component';

describe('HoteldetailsComponent', () => {
  let component: HoteldetailsComponent;
  let fixture: ComponentFixture<HoteldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
