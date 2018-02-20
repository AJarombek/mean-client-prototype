import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import {ImageUploadModule} from "angular2-image-upload";
import {ImageService} from "angular2-image-upload/lib/image-upload/image.service";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Auth} from "../../auth";

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ImageUploadModule, ReactiveFormsModule],
        declarations: [ PostComponent ],
        providers: [
            ImageService,
            FormsModule,
            ReactiveFormsModule,
            Validators,
            Auth
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
