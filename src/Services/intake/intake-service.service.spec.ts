import { TestBed } from '@angular/core/testing';

import { IntakeServiceService } from './intake-service.service';

describe('IntakeServiceService', () => {
  let service: IntakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntakeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
