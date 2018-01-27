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
              SignupComponent
          ],
          imports: [
              BrowserModule,
              RouterModule.forRoot(routes)
          ],
          providers: [
              {provide: APP_BASE_HREF, useValue: '/'}
          ]
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
