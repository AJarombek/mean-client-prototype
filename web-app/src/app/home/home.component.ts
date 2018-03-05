import { Component } from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../models/post";
import {environment} from "../../environments/environment";

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

      console.info(data);
      this.posts = data;
      console.info(this.posts);

      // If we are in the development environment (hooked up to API locally), change the date strings to date objects
      // Also change the relative path to the pictures
      if (environment.evt === 'dev') {
        this.posts.forEach(post => {
          post.date = new Date(post.date);
          post.picture = `${post.picture}`;
        });
      }
    });
  }
}
