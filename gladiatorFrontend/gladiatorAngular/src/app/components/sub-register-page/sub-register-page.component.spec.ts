import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRegisterPageComponent } from './sub-register-page.component';

describe('SubRegisterPageComponent', () => {
  let component: SubRegisterPageComponent;
  let fixture: ComponentFixture<SubRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
