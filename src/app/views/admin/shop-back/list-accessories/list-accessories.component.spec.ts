import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccessoriesComponent } from './list-accessories.component';

describe('ListAccessoriesComponent', () => {
  let component: ListAccessoriesComponent;
  let fixture: ComponentFixture<ListAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
