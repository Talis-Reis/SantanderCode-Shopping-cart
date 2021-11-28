import { TestBed } from '@angular/core/testing';

import { DataStorageHandlerService } from './data-storage-handler.service';

describe('DataStorageHandlerService', () => {
  let service: DataStorageHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStorageHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
