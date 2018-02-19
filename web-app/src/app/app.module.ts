import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import { CatPictureComponent } from './cat-picture/cat-picture.component';
import {PostService} from "./post.service";
import {MockPostService} from "./mock/mock-post.service";
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth} from "./auth";
import {UserService} from "./user.service";
import {CatPictureModule} from "./cat-picture/cat-picture.module";
import {ProfileService} from "./profile.service";
import {LoadedService} from "./loaded.service";

/**
 * The main module for the application
 * @author Andrew Jarombek
 * @since 1/26/2018
 */

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile/:username', loadChildren: './profile/profile.module#ProfileModule'},
    {path: 'about', component: AboutComponent},
    {path: 'profile/post', loadChildren: './profile/profile.module#ProfileModule'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: ''}
];

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
      SignupComponent,
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CatPictureModule
  ],
  providers: [
      PostService,
      MockPostService,
      AuthenticationService,
      MockAuthenticationService,
      Validators,
      Auth,
      UserService,
      ProfileService,
      LoadedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
