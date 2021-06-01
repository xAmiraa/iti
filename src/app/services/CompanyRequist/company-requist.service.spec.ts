import { TestBed } from '@angular/core/testing';

import { CompanyRequistService } from './company-requist.service';

describe('CompanyRequistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyRequistService = TestBed.get(CompanyRequistService);
    expect(service).toBeTruthy();
  });
});
