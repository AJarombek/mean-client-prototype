import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {PostService} from "./post.service";
import {MockPostService} from "./mock/mock-post.service";
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth} from "./auth";
import {UserService} from "./user.service";
import {CatPictureModule} from "./cat-picture/cat-picture.module";
import {ProfileService} from "./profile.service";
import {LoadedService} from "./loaded.service";
import {UsernameService} from "./username.service";
import {SharedModule} from "./shared/shared.module";
import {environment} from "../environments/environment";
import {MockUserService} from "./mock/mock-user.service";

/**
 * The main module for the application
 * @author Andrew Jarombek
 * @since 1/26/2018
 */

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'user', loadChildren: './profile/profile.module#ProfileModule'},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: ''}
];

// Display the environment information
console.info(`Environment: ${JSON.stringify(environment)}`);

/**
 * @NgModule configures an Angular module, helping to organize the application into components
 * In Angular 5 NgModules allow for Ahead-Of-Time Compilation, where the JavaScript and HTML is compiled before
 * the code is sent to the client
 * declarations - items used in templates (ex. components, directives)
 * imports - import other modules
 * providers - services used in the module
 * bootstrap - specifies the root component of the application as a bootstrap entry point
 */
@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      LoginComponent,
      SignupComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CatPictureModule,
      SharedModule
  ],
  providers: [
      {
          provide: PostService,
          useFactory: (httpClient: HttpClient) => {
              if (environment.useMocks) {
                  return new MockPostService();
              } else {
                  return new PostService(httpClient);
              }
          },
          deps: [HttpClient]
      },
      {
          provide: UserService,
          useFactory: (httpClient: HttpClient) => {
              if (environment.useMocks) {
                  return new MockUserService();
              } else {
                  return new UserService(httpClient);
              }
          },
          deps: [HttpClient]
      },
      {
          provide: AuthenticationService,
          useFactory: (auth: Auth, httpClient: HttpClient) => {
              if (environment.useMocks) {
                  return new MockAuthenticationService(auth);
              } else {
                  return new AuthenticationService(httpClient, auth);
              }
          },
          deps: [Auth, HttpClient]
      },
      Validators,
      Auth,
      ProfileService,
      LoadedService,
      UsernameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
