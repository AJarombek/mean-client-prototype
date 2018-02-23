import { NgModule } from '@angular/core';
import {SpyDirective} from "./spy.directive";
import {LifecycleService} from "./lifecycle.service";
import {CommonModule} from "@angular/common";

/**
 * Feature module for shared services and directives across the application
 * @author Andrew Jarombek
 * @since 2/22/2018
 */

// Export both the SpyDirective and LifecycleService to outside the module
@NgModule({
  imports: [CommonModule],
  declarations: [SpyDirective],
  providers: [LifecycleService],
  exports: [SpyDirective]
})
export class SharedModule { }
