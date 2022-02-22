import { TestBed } from '@angular/core/testing';

import { SurveyorServiceService } from './surveyor-service.service';

describe('SurveyorServiceService', () => {
  let service: SurveyorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
