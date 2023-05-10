import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelhomeComponent } from './hotelhome.component';

describe('HotelhomeComponent', () => {
  let component: HotelhomeComponent;
  let fixture: ComponentFixture<HotelhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
