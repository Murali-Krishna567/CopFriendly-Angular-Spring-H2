import { TestBed } from '@angular/core/testing';

import { ResponsedataService } from './responsedata.service';

describe('ResponsedataService', () => {
  let service: ResponsedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
