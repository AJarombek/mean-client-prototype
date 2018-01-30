import { TestBed, inject } from '@angular/core/testing';

import { MockPostService } from './mock-post.service';

describe('MockPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockPostService]
    });
  });

  it('should be created', inject([MockPostService], (service: MockPostService) => {
    expect(service).toBeTruthy();
  }));
});
