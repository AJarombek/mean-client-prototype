import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CatPictureComponent} from "./cat-picture.component";

/**
 * Feature module for the cat picture components
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

@NgModule({
    declarations: [
        CatPictureComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [CatPictureComponent]
})
export class CatPictureModule { }
