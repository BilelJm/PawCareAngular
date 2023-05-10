import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResComponent } from './create-res.component';

describe('CreateResComponent', () => {
  let component: CreateResComponent;
  let fixture: ComponentFixture<CreateResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
