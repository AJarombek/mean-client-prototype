import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {Auth} from "./auth";

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService, HttpClientModule, HttpClient, HttpHandler, Auth]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
