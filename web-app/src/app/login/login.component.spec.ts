import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MockAuthenticationService} from "../mock/mock-authentication.service";
import {AuthenticationService} from "../authentication.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
          FormsModule,
          ReactiveFormsModule,
          Validators,
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
