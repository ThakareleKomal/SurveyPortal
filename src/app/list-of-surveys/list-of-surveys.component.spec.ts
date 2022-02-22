import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSurveysComponent } from './list-of-surveys.component';

describe('ListOfSurveysComponent', () => {
  let component: ListOfSurveysComponent;
  let fixture: ComponentFixture<ListOfSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
