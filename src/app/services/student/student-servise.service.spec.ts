import { TestBed } from '@angular/core/testing';

import { StudentServiseService } from './student-servise.service';

describe('StudentServiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentServiseService = TestBed.get(StudentServiseService);
    expect(service).toBeTruthy();
  });
});
