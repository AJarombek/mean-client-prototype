import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {ProfileModule} from "./profile/profile.module";
import {ProfileComponent} from "./profile/profile.component";
import {PostComponent} from "./profile/post/post.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'about', component: AboutComponent},
    {path: 'post', component: PostComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];

/**
 * @NgModule configures an Angular module, helping to organize the application into components
 * In Angular 5 NgModules allow for Ahead-Of-Time Compilation, where the JavaScript and HTML is compiled before
 * the browser runs the code
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
      ProfileModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
