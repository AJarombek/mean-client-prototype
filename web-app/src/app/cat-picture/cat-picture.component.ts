import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {Post} from "../models/post";

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
  @Input() post: Post
}
