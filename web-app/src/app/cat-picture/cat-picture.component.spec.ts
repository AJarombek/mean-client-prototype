import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPictureComponent } from './cat-picture.component';
import {Router} from "@angular/router";

describe('CatPictureComponent', () => {
  let component: CatPictureComponent;
  let fixture: ComponentFixture<CatPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ CatPictureComponent ],
        providers: [{provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}}]
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
