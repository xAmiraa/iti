import { TestBed } from '@angular/core/testing';

import { JOBService } from './job.service';

describe('JOBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JOBService = TestBed.get(JOBService);
    expect(service).toBeTruthy();
  });
});
