import { TestBed } from '@angular/core/testing';

import { UsergoogleService } from './usergoogle.service';

describe('UsergoogleService', () => {
  let service: UsergoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsergoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
