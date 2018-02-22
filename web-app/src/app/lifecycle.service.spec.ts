import { TestBed, inject } from '@angular/core/testing';

import { LifecycleService } from './lifecycle.service';

describe('LifecycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifecycleService]
    });
  });

  it('should be created', inject([LifecycleService], (service: LifecycleService) => {
    expect(service).toBeTruthy();
  }));
});
