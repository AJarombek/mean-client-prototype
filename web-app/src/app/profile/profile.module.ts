import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post/post.component';
import {RouterModule} from "@angular/router";

/**
 * Feature module for the pages only available to signed in users
 * @author Andrew Jarombek
 * @since 1/27/2018
 */

// Define routing within the feature module
export const routes = [
    {path: '', component: ProfileComponent},
    {path: 'post', component: PostComponent}
];

// Export both the ProfileComponent and PostComponent to outside the module
@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent, PostComponent],
  exports: [ProfileComponent, PostComponent]
})
export class ProfileModule { }
