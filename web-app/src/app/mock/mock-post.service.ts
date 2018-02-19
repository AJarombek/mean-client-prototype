import { Injectable } from '@angular/core';
import {Post} from "../models/post";
import {Observable} from "rxjs/Observable";

/**
 * A mock service for supplying picture posts
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

@Injectable()
export class MockPostService {

    private post1: Post = new Post("assets/catpics/russianblue.jpg", "Cat Pic", "andy", "Andrew",
                                    "Jarombek", new Date(), "I love this picture!", 1, 0);
    private post2: Post = new Post("assets/catpics/toms-cat.jpg", "Kitty!", "tom", "Thomas",
                                    "Caulfield", new Date(), "awww!", 5, 1);
    private post3: Post = new Post("assets/catpics/rb.jpg", "Russian Blue :)", "andy", "Andrew",
                                    "Jarombek", new Date(), "I want this cat", 0, 0);
    private post4: Post = new Post("assets/catpics/kitty.jpg", "What a Cute Kitten!", "joe", "Joseph",
                                    "Smith", new Date(), "❤️", 1, 0);
    private post5: Post = new Post("assets/catpics/stretch.jpeg", "Big Stretch", "fish", "Ben",
                                    "Fishbein", new Date(), "hot dog!", 0, 0);
    private post6: Post = new Post("assets/catpics/peek.jpg", "Just Hangin Out", "andy", "Andrew",
                                    "Jarombek", new Date(), "💕", 0, 0);
    private post7: Post = new Post("assets/catpics/hey.jpg", "Oh Hey", "tom", "Thomas",
                                    "Caulfield", new Date(), "whats up", 1, 0);
    private post8: Post = new Post("assets/catpics/khakis.jpg", "Oh Hell Yea!", "kyle", "Kyle",
                                    "Blanchette", new Date('1969-06-09'), "~~whats up~~", 5, 1);
    private post9: Post = new Post("assets/catpics/cuddles.jpg", "Love", "andy", "Andrew",
                                    "Jarombek", new Date(), "Always", 0, 0);
    private post10: Post = new Post("assets/catpics/hi.jpg", "Hi Guys!!!", "lisag", "Lisa",
                                    "Grohn", new Date(), "How is everyone doing!!", 0, 0);
    private post11: Post = new Post("assets/catpics/sleepy.jpg", "Tired 😸", "andy", "Andrew",
                                    "Jarombek", new Date(), "lol", 0, 0);

    public getPosts(): Observable<[Post]> {
        return new Observable<[Post]>(posts => {

            posts.next([this.post1, this.post2, this.post3, this.post4, this.post5, this.post6,
                this.post7, this.post8, this.post9, this.post10, this.post11]);

            return posts;
        });
    }

}
