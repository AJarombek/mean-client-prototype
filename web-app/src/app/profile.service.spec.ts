import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import {MockUserService} from "./mock/mock-user.service";
import {UserService} from "./user.service";
import {PostService} from "./post.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          ProfileService,
          MockUserService,
          UserService,
          PostService,
          HttpClient,
          HttpHandler
      ]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
