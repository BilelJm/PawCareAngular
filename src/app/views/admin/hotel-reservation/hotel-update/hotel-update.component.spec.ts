import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelUpdateComponent } from './hotel-update.component';

describe('HotelUpdateComponent', () => {
  let component: HotelUpdateComponent;
  let fixture: ComponentFixture<HotelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
