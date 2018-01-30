import { Component } from '@angular/core';
import {PostService} from "../post.service";
import {MockPostService} from "../mock/mock-post.service";
import {Post} from "../models/post";

/**
 * The component that displays all the cat pictures
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: PostService, useClass: MockPostService}] // Using a mock class since no data source is set up
})
export class HomeComponent {
  posts: [Post];

  // The private modifier creates a new instance variable
  constructor(private postService: PostService) {
    this.posts = postService.getPosts()
  }
}
