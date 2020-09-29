import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellAuctionComponent } from './admin-sell-auction.component';

describe('AdminSellAuctionComponent', () => {
  let component: AdminSellAuctionComponent;
  let fixture: ComponentFixture<AdminSellAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
