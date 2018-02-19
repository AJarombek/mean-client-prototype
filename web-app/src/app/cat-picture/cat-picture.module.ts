import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CatPictureComponent} from "./cat-picture.component";
import {RouterModule} from "@angular/router";

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
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [CatPictureComponent]
})
export class CatPictureModule { }
