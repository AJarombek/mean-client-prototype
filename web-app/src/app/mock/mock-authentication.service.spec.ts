import { TestBed, inject } from '@angular/core/testing';

import {MockAuthenticationService} from "./mock-authentication.service";
import {Auth} from "../auth";

describe('MockAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockAuthenticationService, Auth]
    });
  });

  it('should be created', inject([MockAuthenticationService], (service: MockAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
