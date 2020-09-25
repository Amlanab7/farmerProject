import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistrationFormComponent } from './farmer-registration-form.component';

describe('FarmerRegistrationFormComponent', () => {
  let component: FarmerRegistrationFormComponent;
  let fixture: ComponentFixture<FarmerRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
