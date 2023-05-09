import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionListComponent } from './adoption-list.component';

describe('AdoptionListComponent', () => {
  let component: AdoptionListComponent;
  let fixture: ComponentFixture<AdoptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
