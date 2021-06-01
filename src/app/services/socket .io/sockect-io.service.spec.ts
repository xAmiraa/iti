import { TestBed } from '@angular/core/testing';

import { SockectIoService } from './sockect-io.service';

describe('SockectIoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SockectIoService = TestBed.get(SockectIoService);
    expect(service).toBeTruthy();
  });
});
