import { Injectable } from '@angular/core';
import {Post} from "./models/post";
import {HttpClient} from "@angular/common/http";
import {appConfig} from "./app.config";
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
        return this.http.get<[Post]>(`${appConfig.apiDev}/posts`).map(posts => {
            return posts;
        });
    }

    get(id: number): Observable<any> {
        return this.http.get<Post>(`${appConfig.apiDev}/posts/${id}`);
    }

    post(post: Post): Observable<any> {
        return this.http.post<Post>(`${appConfig.apiDev}/posts`, post);
    }

    put(post: Post): Observable<any> {
        return this.http.put<Post>(`${appConfig.apiDev}/posts/${post.id}`, post);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${appConfig.apiDev}/posts/${id}`);
    }
}
