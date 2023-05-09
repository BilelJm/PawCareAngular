import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionListFrontComponent } from './adoption-list-front.component';

describe('AdoptionListFrontComponent', () => {
  let component: AdoptionListFrontComponent;
  let fixture: ComponentFixture<AdoptionListFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionListFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
