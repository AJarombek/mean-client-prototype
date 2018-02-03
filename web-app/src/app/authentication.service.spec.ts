import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService, HttpClientModule, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
