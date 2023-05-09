import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListFrontComponent } from './training-list-front.component';

describe('TrainingListFrontComponent', () => {
  let component: TrainingListFrontComponent;
  let fixture: ComponentFixture<TrainingListFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingListFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
