import { Component } from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../models/post";

/**
 * The component that displays all the cat pictures
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: [Post];

  // The private modifier creates a new instance variable
  constructor(private postService: PostService) {

    // Subscribe to the Observable that getPosts() returns ans when the value arrives give it to the posts variable
    postService.getPosts().subscribe(data => {
      
      this.posts = data;
    });
  }
}
