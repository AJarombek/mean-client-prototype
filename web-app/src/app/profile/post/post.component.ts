import { Component } from '@angular/core';
import {FileHolder, ImageUploadModule} from "angular2-image-upload";
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Auth} from "../../auth";
import {Post} from "../../models/post";
import {PostService} from "../../post.service";
import {MockPostService} from "../../mock/mock-post.service";
import {Router} from "@angular/router";

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

    // If the picture in part II has been uploaded
    public pictureUploaded: boolean = false;

    // What text is displayed on the next button
    public nextText: string = 'Next';

    // What text is displayed on the submit button
    public submitText: string = 'Submit';

    // The new post object that is being built
    public newPost: Post = new Post();

    public formModel: FormGroup;
    private LOG_TAG: string = '[Post.Component]';

    constructor(private fb: FormBuilder,
                private auth: Auth,
                private postService: PostService,
                private router: Router) {

        this.formModel = fb.group({
            'name': ['', Validators.required],
            'description': ['', Validators.required]
        });
    }

    onNext() {
        this.newPost.username = this.auth.username;
        this.newPost.name = this.formModel.value.name;
        this.newPost.description = this.formModel.value.description;

        this.infoUploaded = true;
    }

    onSubmit() {
        console.info(`Submitting Post: ${JSON.stringify(this.newPost)}`);
        this.inProgressPicture = true;
        this.submitText = "Submitting...";

        this.postService.post(this.newPost).subscribe(() => {
            this.router.navigate(['/']);
            this.reset();
        }, err => {
            this.postPictureError = "Failed to Upload Picture to Server";
        });
    }

    onBack() {
        this.postPictureError = null;
        this.infoUploaded = false;
    }

    imageUploaded(file: FileHolder) {
        console.info(`${this.LOG_TAG} imageUploaded Called`);
        this.newPost.picture = file.file.name;
        this.pictureUploaded = true;
    }

    imageRemoved(file: FileHolder) {
        console.info(`${this.LOG_TAG} imageRemoved Called`);
        this.pictureUploaded = false;
    }

    /**
     * Reset all the fields for the Post component to their original state
     */
    reset() {
        this.newPost = new Post();
        this.inProgressPicture = false;
        this.inProgressInfo = false;
        this.pictureUploaded = false;
        this.nextText = 'Next';
        this.submitText = 'Submit';
        this.postPictureError = null;
        this.postInfoError = null;
    }
}
