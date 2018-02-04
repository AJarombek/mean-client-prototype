import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MockAuthenticationService} from "../mock/mock-authentication.service";
import {AuthenticationService} from "../authentication.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Auth} from "../auth";
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ LoginComponent ],
      providers: [
          {provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}},
          FormsModule,
          ReactiveFormsModule,
          Validators,
          Auth,
          AuthenticationService,
          HttpClient,
          HttpHandler,
          {provide: AuthenticationService, useClass: MockAuthenticationService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
