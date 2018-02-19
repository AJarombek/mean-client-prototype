import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {ProfileService} from "../profile.service";
import {MockUserService} from "../mock/mock-user.service";
import {LoadedService} from "../loaded.service";
import {ImageUploadModule} from "angular2-image-upload";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImageUploadModule.forRoot()],
      declarations: [ ProfileComponent ],
      providers: [
          ProfileService,
          MockUserService,
          LoadedService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
