import { TestBed } from '@angular/core/testing';

import { RemainingleaveService } from './remainingleave.service';

describe('RemainingleaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemainingleaveService = TestBed.get(RemainingleaveService);
    expect(service).toBeTruthy();
  });
});
