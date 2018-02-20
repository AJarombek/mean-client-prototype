import { Component } from '@angular/core';
import {ImageUploadModule} from "angular2-image-upload";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../../auth";
import {Post} from "../../models/post";
import {PostService} from "../../post.service";
import {MockPostService} from "../../mock/mock-post.service";

/**
 * Component for uploading a new cat picture post
 * @author Andrew Jarombek
 * @since 2/19/2018
 */

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    providers: [{provide: PostService, useClass: MockPostService}]
})
export class PostComponent {

    // Is the post information process in progress
    public inProgressInfo: boolean = false;

    // Is the post picture process in progress
    public inProgressPicture: boolean = false;

    // If there is an error with part I of the post: cat picture information
    public postInfoError: string;

    // If there is an error with part II of the post: the picture upload
    public postPictureError: string;

    // If part I has been completed
    public infoUploaded: boolean = false;

    // What text is displayed on the next button
    public nextText: string = 'Next';

    // What text is displayed on the submit button
    public submitText: string = 'Submit';

    // The new post object that is being built
    public newPost: Post;

    public formModel: FormGroup;

    constructor(private fb: FormBuilder, private auth: Auth, private postService: PostService) {
        this.formModel = fb.group({
            'name': ['', Validators.required],
            'description': ['', Validators.required]
        });
    }

    onNext() {
        this.newPost.username = this.auth.username;
        this.newPost.name = this.formModel.value.name;
        this.newPost.description = this.formModel.value.description;
    }

    onSubmit() {

    }

    onBack() {

    }
}
