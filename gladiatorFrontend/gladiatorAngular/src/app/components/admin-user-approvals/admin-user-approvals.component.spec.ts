import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserApprovalsComponent } from './admin-user-approvals.component';

describe('AdminUserApprovalsComponent', () => {
  let component: AdminUserApprovalsComponent;
  let fixture: ComponentFixture<AdminUserApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserApprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
