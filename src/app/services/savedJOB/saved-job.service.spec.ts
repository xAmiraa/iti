import { TestBed } from '@angular/core/testing';

import { SavedJobService } from './saved-job.service';

describe('SavedJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedJobService = TestBed.get(SavedJobService);
    expect(service).toBeTruthy();
  });
});
