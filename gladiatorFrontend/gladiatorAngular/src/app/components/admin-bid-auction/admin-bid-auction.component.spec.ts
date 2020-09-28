import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBidAuctionComponent } from './admin-bid-auction.component';

describe('AdminBidAuctionComponent', () => {
  let component: AdminBidAuctionComponent;
  let fixture: ComponentFixture<AdminBidAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBidAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBidAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
