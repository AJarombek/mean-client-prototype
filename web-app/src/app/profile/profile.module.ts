import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from "@angular/router";
import {LoginGuard} from "./login-guard";
import {MockLoginGuard} from "../mock/mock-login-guard";
import {ImageUploadModule} from "angular2-image-upload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SpyDirective} from "../shared/spy.directive";
import {SharedModule} from "../shared/shared.module";

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
  declarations: [ProfileComponent, PostComponent],
  providers: [{provide: LoginGuard, useClass: LoginGuard}], // Use a mock guard until the Node.js API is set up
  exports: [ProfileComponent, PostComponent]
})
export class ProfileModule { }
