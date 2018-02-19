import {Component, Input} from '@angular/core';
import {Post} from "../models/post";
import {UsernameService} from "../username.service";
import {post} from "selenium-webdriver/http";

/**
 * The component for each cat picture
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

@Component({
  selector: 'cat-picture',
  templateUrl: './cat-picture.component.html',
  styleUrls: ['./cat-picture.component.scss']
})
export class CatPictureComponent {

    // The @Input annotation is used to get an input parameter from the parent component
    @Input() post: Post;

    private LOG_TAG: string = '[CatPicture.Component]';

    constructor(private usernameService: UsernameService) {}

    emitUsername() {

        if (this.post !== null && this.post !== undefined) {
            console.info(`${this.LOG_TAG} Emitted Username: ${this.post.username}`);
            this.usernameService.emitData(this.post.username);
        } else {
            console.info(`${this.LOG_TAG} Did not Emit Username Because Post is null or undefined`);
        }
    }
}
