import { TestBed } from '@angular/core/testing';

import { ApplyrequestService } from './applyrequest.service';

describe('ApplyrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyrequestService = TestBed.get(ApplyrequestService);
    expect(service).toBeTruthy();
  });
});
