import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyorRegistrationComponent } from './surveyor-registration.component';

describe('SurveyorRegistrationComponent', () => {
  let component: SurveyorRegistrationComponent;
  let fixture: ComponentFixture<SurveyorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyorRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
