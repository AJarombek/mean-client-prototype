import { Injectable } from '@angular/core';
import {Post} from "./models/post";

@Injectable()
export class PostService {

  public getPosts(): [Post] {
    return [null];
  }
}
