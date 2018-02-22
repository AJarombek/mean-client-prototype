import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LifecycleService} from "./lifecycle.service";

/**
 * A directive that will spy on the element that it is applied to looking for lifecycle hooks
 * @author Andrew Jarombek
 * @since 2/21/2018
 */

@Directive({
  selector: '[spy]'
})
export class SpyDirective implements OnInit, OnDestroy {

    constructor(private lifecycleService: LifecycleService) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
