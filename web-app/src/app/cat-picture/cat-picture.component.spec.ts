import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPictureComponent } from './cat-picture.component';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {UsernameService} from "../username.service";

describe('CatPictureComponent', () => {
  let component: CatPictureComponent;
  let fixture: ComponentFixture<CatPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ CatPictureComponent ],
        imports: [RouterModule],
        providers: [
            {provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}},
            {provide: ActivatedRoute, useClass: class { navigate = jasmine.createSpy("navigate");}},
            {provide: APP_BASE_HREF, useValue: '/'},
            UsernameService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
