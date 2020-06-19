import { TestBed } from '@angular/core/testing';

import { WatchsService } from './watchs.service';

describe('WatchsService', () => {
  let service: WatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
