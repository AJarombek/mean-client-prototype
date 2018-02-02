import { TestBed, inject } from '@angular/core/testing';

import {MockAuthenticationService} from "./mock-authentication.service";
import {HttpClientModule} from "@angular/common/http";

describe('MockAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockAuthenticationService, HttpClientModule]
    });
  });

  it('should be created', inject([MockAuthenticationService], (service: MockAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
