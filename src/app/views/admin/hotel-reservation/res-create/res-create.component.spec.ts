import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCreateComponent } from './res-create.component';

describe('ResCreateComponent', () => {
  let component: ResCreateComponent;
  let fixture: ComponentFixture<ResCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
