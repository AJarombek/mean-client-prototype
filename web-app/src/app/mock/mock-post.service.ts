import { Injectable } from '@angular/core';
import {Post} from "../models/post";

/**
 * A mock service for supplying picture posts
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

@Injectable()
export class MockPostService {

    private post1: Post = new Post("...", "My Cat Pic", "andy", "Andrew",
                                    "Jarombek", new Date(), "I love this picture!", 1, 0);
    private post2: Post = new Post("...", "Kitty!", "tom", "Thomas",
                                    "Caulfield", new Date(), "awww!", 5, 1);
    private post3: Post = new Post("...", "Russian Blue :)", "andy", "Andrew",
                                    "Jarombek", new Date(), "I want this cat", 0, 0);

    public getPosts(): [Post] {
        return [this.post1, this.post2, this.post3];
    }

}
