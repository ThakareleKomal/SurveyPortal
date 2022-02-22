import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyorLoginSuccessComponent } from './surveyor-login-success.component';

describe('SurveyorLoginSuccessComponent', () => {
  let component: SurveyorLoginSuccessComponent;
  let fixture: ComponentFixture<SurveyorLoginSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyorLoginSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyorLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
