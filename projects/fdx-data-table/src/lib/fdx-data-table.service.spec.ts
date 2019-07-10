import { TestBed } from '@angular/core/testing';

import { FdxDataTableService } from './fdx-data-table.service';

describe('FdxDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdxDataTableService = TestBed.get(FdxDataTableService);
    expect(service).toBeTruthy();
  });
});
