import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSoldComponent } from './admin-sold.component';

describe('AdminSoldComponent', () => {
  let component: AdminSoldComponent;
  let fixture: ComponentFixture<AdminSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
