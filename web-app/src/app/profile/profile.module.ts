import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post/post.component';
import {Router, RouterModule} from "@angular/router";
import {LoginGuard} from "./login-guard";
import {MockLoginGuard} from "../mock/mock-login-guard";
import {ImageUploadModule} from "angular2-image-upload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {environment} from "../../environments/environment";
import {AuthenticationService} from "../authentication.service";

/**
 * Feature module for the pages only available to signed in users
 * @author Andrew Jarombek
 * @since 1/27/2018
 */

// Define routing within the feature module
export const routes = [
    {path: 'profile/:username', component: ProfileComponent},
    {path: 'post', component: PostComponent, canActivate: [LoginGuard]}
];

// Export both the ProfileComponent and PostComponent to outside the module
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ImageUploadModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      SharedModule
  ],
  declarations: [
      ProfileComponent,
      PostComponent
  ],
  providers: [
      {
          provide: LoginGuard,
          useFactory: (router: Router, authService: AuthenticationService) => {
              if (environment.useMocks) {
                  return new MockLoginGuard(router);
              } else {
                  return new LoginGuard(router, authService);
              }
          },
          deps: [Router, AuthenticationService]
      }
  ],
  exports: [
      ProfileComponent,
      PostComponent
  ]
})
export class ProfileModule { }
