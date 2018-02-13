import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import {MockUserService} from "./mock/mock-user.service";

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService, MockUserService]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
