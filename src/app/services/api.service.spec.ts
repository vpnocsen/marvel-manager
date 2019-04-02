import { TestBed } from '@angular/core/testing';

import { ApiServices } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServices = TestBed.get(ApiServices);
    expect(service).toBeTruthy();
  });
});
