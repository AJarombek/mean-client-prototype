import { Injectable } from '@angular/core';
import {Post} from "./models/post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";

/**
 * Service for meow cat posts
 * @author Andrew Jarombek
 * @since 2/1/2018
 */

@Injectable()
export class PostService implements HttpService {

    constructor(private http: HttpClient) {}

    /**
     * @deprecated User getAll() Instead
     */
    public getPosts(): Observable<[Post]> {
        return this.getAll();
    }

    /**
     * Return all the posts in the database
     * @returns {Observable<[Post]>}
     */
    getAll(): Observable<[any]> {
        return this.http.get<[Post]>(`/api/post`);
    }

    get(id: number): Observable<any> {
        return this.http.get<Post>(`/api/post/${id}`);
    }

    post(post: Post): Observable<any> {
        return this.http.post<Post>(`/api/post`, post);
    }

    put(post: Post): Observable<any> {
        return this.http.put<Post>(`/api/post/${post.id}`, post);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`/api/post/${id}`);
    }
}
