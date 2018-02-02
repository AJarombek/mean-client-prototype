import { Injectable } from '@angular/core';
import {Post} from "./models/post";
import {HttpClient} from "@angular/common/http";
import {appConfig} from "./app.config";
import {Observable} from "rxjs/Observable";

/**
 * Service for meow cat posts
 * @author Andrew Jarombek
 * @since 2/1/2018
 */

@Injectable()
export class PostService {

  private postGet = '/post';

  constructor(private http: HttpClient) {}

  /**
   * Return all the posts in the database
   * @returns {Observable<[Post]>}
   */
  public getPosts(): Observable<[Post]> {
    return this.http.get<[Post]>(`${appConfig.apiDev}${this.postGet}`).map(posts => {
      return posts;
    });
  }
}
