import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {CatPictureModule} from "../cat-picture/cat-picture.module";
import {UsernameService} from "../username.service";
import {ActivatedRoute, Router} from "@angular/router";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [CatPictureModule],
        declarations: [ HomeComponent ],
        providers: [
            UsernameService,
            {provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}},
            {provide: ActivatedRoute, useClass: class { navigate = jasmine.createSpy("navigate");}}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
