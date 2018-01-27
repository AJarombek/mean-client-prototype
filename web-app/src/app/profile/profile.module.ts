import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, PostComponent],
  exports: [ProfileComponent, PostComponent]
})
export class ProfileModule { }
