import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdoptionComponent } from './create-adoption.component';

describe('CreateAdoptionComponent', () => {
  let component: CreateAdoptionComponent;
  let fixture: ComponentFixture<CreateAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
