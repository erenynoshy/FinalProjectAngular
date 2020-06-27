import { TestBed } from '@angular/core/testing';

import { TokeninterceptService } from './tokenintercept.service';

describe('TokeninterceptService', () => {
  let service: TokeninterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeninterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
