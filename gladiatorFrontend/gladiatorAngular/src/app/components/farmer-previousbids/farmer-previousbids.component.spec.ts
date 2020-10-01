import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPreviousbidsComponent } from './farmer-previousbids.component';

describe('FarmerPreviousbidsComponent', () => {
  let component: FarmerPreviousbidsComponent;
  let fixture: ComponentFixture<FarmerPreviousbidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerPreviousbidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPreviousbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
