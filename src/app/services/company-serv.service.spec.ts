import { TestBed } from '@angular/core/testing';

import { CompanySERvService } from './company-serv.service';

describe('CompanySERvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanySERvService = TestBed.get(CompanySERvService);
    expect(service).toBeTruthy();
  });
});
