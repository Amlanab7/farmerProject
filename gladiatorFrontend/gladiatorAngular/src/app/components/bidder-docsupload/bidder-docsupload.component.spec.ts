import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderDocsuploadComponent } from './bidder-docsupload.component';

describe('BidderDocsuploadComponent', () => {
  let component: BidderDocsuploadComponent;
  let fixture: ComponentFixture<BidderDocsuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderDocsuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderDocsuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
