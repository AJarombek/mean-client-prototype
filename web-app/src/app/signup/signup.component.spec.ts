import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Auth} from "../auth";
import {AuthenticationService} from "../authentication.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {UserService} from "../user.service";

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ SignupComponent ],
      providers: [
          {provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}},
          Auth,
          AuthenticationService,
          UserService,
          HttpClient,
          HttpHandler,
          FormsModule,
          ReactiveFormsModule,
          Validators
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
