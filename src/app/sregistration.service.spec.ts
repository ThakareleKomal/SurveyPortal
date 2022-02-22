import { TestBed } from '@angular/core/testing';

import { SregistrationService } from './sregistration.service';

describe('SregistrationService', () => {
  let service: SregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
