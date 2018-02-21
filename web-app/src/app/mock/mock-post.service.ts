import { Injectable } from '@angular/core';
import {Post} from "../models/post";
import {Observable} from "rxjs/Observable";
import {HttpService} from "../http.service";

/**
 * A mock service for supplying picture posts
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

@Injectable()
export class MockPostService implements HttpService {

    // All the mock posts.  Just store them as objects instead of in a database
    private post1: Post = new Post("assets/catpics/russianblue.jpg", "Cat Pic", "andy", "Andrew",
                                    "Jarombek", new Date(), "I love this picture!", 1, 0, 1);
    private post2: Post = new Post("assets/catpics/toms-cat.jpg", "Kitty!", "tom", "Thomas",
                                    "Caulfield", new Date(), "awww!", 5, 1, 2);
    private post3: Post = new Post("assets/catpics/rb.jpg", "Russian Blue :)", "andy", "Andrew",
                                    "Jarombek", new Date(), "I want this cat", 0, 0, 3);
    private post4: Post = new Post("assets/catpics/kitty.jpg", "What a Cute Kitten!", "joe", "Joseph",
                                    "Smith", new Date(), "❤️", 1, 0, 4);
    private post5: Post = new Post("assets/catpics/stretch.jpeg", "Big Stretch", "fish", "Ben",
                                    "Fishbein", new Date(), "hot dog!", 0, 0, 5);
    private post6: Post = new Post("assets/catpics/peek.jpg", "Just Hangin Out", "andy", "Andrew",
                                    "Jarombek", new Date(), "💕", 0, 0, 6);
    private post7: Post = new Post("assets/catpics/hey.jpg", "Oh Hey", "tom", "Thomas",
                                    "Caulfield", new Date(), "whats up", 1, 0, 7);
    private post8: Post = new Post("assets/catpics/khakis.jpg", "Oh Hell Yea!", "kyle", "Kyle",
                                    "Blanchette", new Date('1969-06-09'), "~~whats up~~", 5, 1, 8);
    private post9: Post = new Post("assets/catpics/cuddles.jpg", "Love", "andy", "Andrew",
                                    "Jarombek", new Date(), "Always", 0, 0, 9);
    private post10: Post = new Post("assets/catpics/hi.jpg", "Hi Guys!!!", "lisag", "Lisa",
                                    "Grohn", new Date(), "How is everyone doing!!", 0, 0, 10);
    private post11: Post = new Post("assets/catpics/sleepy.jpg", "Tired 😸", "andy", "Andrew",
                                    "Jarombek", new Date(), "lol", 0, 0, 11);

    private posts: [Post] = [this.post1, this.post2, this.post3, this.post4, this.post5, this.post6,
                            this.post7, this.post8, this.post9, this.post10, this.post11];

    /**
     * @deprecated Use getAll() instead
     */
    public getPosts(): Observable<[Post]> {
        return this.getAll();
    }

    /**
     * Return all the posts in our mock data store
     * @returns {Observable<[any]>}
     */
    getAll(): Observable<[any]> {
        return new Observable<[Post]>(posts => {

            posts.next(this.posts);

            return posts;
        });
    }

    /**
     * Return a single post with a given id from our mock data store
     * @param {number} id - the unique integer identifier for a post
     * @returns {Observable<Post>}
     */
    get(id: number): Observable<Post> {

        if (id !== undefined && id !== null) {
            id = Math.floor(id);
            const post: Post = this.posts[id];

            return new Observable<Post>(o => {
                if (post !== undefined) {
                    o.next(post);
                } else {
                    o.error("No Post Found for the Given ID");
                }
            });
        } else {
            return new Observable<Post>(o => {
                o.error("Invalid ID Entered");
            });
        }
    }

    /**
     * Create a new post (but since there is no data store and you can't save files on the browser,
     * just return the same post that was submitted)
     * @param {Post} item - the Post object to be created
     * @returns {Observable<Post>}
     */
    post(item: Post): Observable<Post> {
        return new Observable<Post>(o => {
            setTimeout(() => {
                if (item !== undefined) {
                    o.next(item);
                } else {
                    o.error("Invalid Post Entered for Creation");
                }
            }, 1000);
        });
    }

    put(item: any): Observable<any> {
        return undefined;
    }

    delete(name: string): Observable<any> {
        return undefined;
    }
}
