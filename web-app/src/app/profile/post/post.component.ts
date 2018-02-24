import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileHolder, ImageUploadModule} from "angular2-image-upload";
import {FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Auth} from "../../auth";
import {Post} from "../../models/post";
import {PostService} from "../../post.service";
import {MockPostService} from "../../mock/mock-post.service";
import {SpyDirective} from "../../shared/spy.directive";
import {Subject} from "rxjs/Subject";
import {LifecycleService} from "../../shared/lifecycle.service";
import {Lifecycle} from "../../models/lifecycle";
import {takeUntil} from "rxjs/operators";
import {noWhitespaceValidator} from "../../shared/no-whitespace.validator";

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
export class PostComponent implements OnInit {

    // Access the local template variables for both <input> HTML elements
    @ViewChild('postName') postName: ElementRef;
    @ViewChild('postDescription') postDescription: ElementRef;

    private postNameValue: string = "";
    private postDescriptionValue: string = "";

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

    // If the entire post upload process is finished
    public uploadCompleted: boolean = false;

    // What text is displayed on the next button
    public nextText: string = 'Next';

    // What text is displayed on the submit button
    public submitText: string = 'Submit';

    // The new post object that is being built
    public newPost: Post = new Post();

    // The file that is being uploaded
    private file: FileHolder;

    public formModel: FormGroup;
    private ngUnsubscribe: Subject<any> = new Subject();
    private LOG_TAG: string = '[Post.Component]';

    constructor(private fb: FormBuilder,
                private auth: Auth,
                private postService: PostService,
                private lifecycleService: LifecycleService) {

        this.formModel = fb.group({
            'name': ['', [Validators.required, noWhitespaceValidator()]],
            'description': ['', [Validators.required, noWhitespaceValidator()]]
        });
    }

    debug(input: any) {
        console.info(input);
    }

    /**
     * Called when the post component is first initialized
     */
    ngOnInit(): void {

        // Subscribe to the lifecycle service to know when the description and name input fields are
        // initialized or destroyed
        this.lifecycleService.onData.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
            console.info(`${this.LOG_TAG} Receiving Lifecycle Notification: ${res}`);

            const status: Lifecycle = JSON.parse(res);

            if (status.event === 'init') {
                // If the lifecycle event is [init] set the HTML elements value to the cached value
                // When first loaded the ElementRef objects can be undefined, so make sure they exist
                if (status.id === 'post-name' && this.postName !== undefined) {
                    this.postName.nativeElement.value = this.postNameValue.trim();
                } else if (status.id === 'post-description' && this.postDescription !== undefined) {
                    this.postDescription.nativeElement.value = this.postDescriptionValue.trim();
                }
            } else if (status.event === 'destroy') {
                // If the lifecycle event is [destroy] cache the value of the HTML element when it was terminated
                if (status.id === 'post-name') {
                    this.postNameValue = status.value;
                } else if (status.id === 'post-description') {
                    this.postDescriptionValue = status.value;
                }
            }
        });
    }

    /**
     * Called when the post name and description fields are filled out.  You are then taken to the picture upload page
     */
    onNext() {
        this.newPost.username = this.auth.username;
        this.newPost.name = this.formModel.value.name;
        this.newPost.description = this.formModel.value.description;

        // Removes the info upload template and displays the picture upload template
        this.infoUploaded = true;
    }

    /**
     * Called when the picture is submitted and we are ready to create a new post
     */
    onSubmit() {
        console.info(`Submitting Post: ${JSON.stringify(this.newPost)}`);
        this.inProgressPicture = true;
        this.submitText = "Submitting...";

        this.postService.post(this.newPost).subscribe(() => {

            // On completion display the completed template and reset all the fields to their defaults
            this.uploadCompleted = true;
            this.reset();
        }, err => {
            this.postPictureError = "Failed to Upload Picture to Server";
        });
    }

    /**
     * When going back to the info upload page from the picture upload page
     */
    onBack() {
        this.postPictureError = null;
        this.infoUploaded = false;
    }

    /**
     * When continuing from the completed page back to the info upload page.
     * This allows the user to upload another post.
     */
    onContinue() {
        this.infoUploaded = false;
        this.uploadCompleted = false;
    }

    /**
     * Called by the image upload module when a new picture is added
     * @param {FileHolder} file
     */
    imageUploaded(file: FileHolder) {
        console.info(`${this.LOG_TAG} imageUploaded Called`);
        this.file = file;
        this.newPost.picture = file.file.name;
        this.pictureUploaded = true;
    }

    /**
     * Called by the image upload module when the uploaded picture is deleted
     * @param {FileHolder} file
     */
    imageRemoved(file: FileHolder) {
        console.info(`${this.LOG_TAG} imageRemoved Called`);
        this.pictureUploaded = false;
        this.file = undefined;
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

        this.postNameValue = "";
        this.postDescriptionValue = "";
        this.file = undefined;
    }
}
