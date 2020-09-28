import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingAuctionComponent } from './bidding-auction.component';

describe('BiddingAuctionComponent', () => {
  let component: BiddingAuctionComponent;
  let fixture: ComponentFixture<BiddingAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
