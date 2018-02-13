import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AboutComponent} from "./about/about.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {routes} from "./app.module";
import {APP_BASE_HREF} from "@angular/common";
import {CatPictureComponent} from "./cat-picture/cat-picture.component";
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {PostService} from "./post.service";
import {MockPostService} from "./mock/mock-post.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth} from "./auth";
import {UserService} from "./user.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ProfileService} from "./profile.service";
import {MockUserService} from "./mock/mock-user.service";

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
              AppComponent,
              HomeComponent,
              AboutComponent,
              LoginComponent,
              SignupComponent,
              CatPictureComponent
          ],
          imports: [
              BrowserModule,
              RouterModule.forRoot(routes),
              HttpClientModule,
              FormsModule,
              ReactiveFormsModule
          ],
          providers: [
              {provide: APP_BASE_HREF, useValue: '/'},
              PostService,
              MockPostService,
              AuthenticationService,
              MockAuthenticationService,
              Validators,
              Auth,
              UserService,
              MockUserService,
              ProfileService
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
