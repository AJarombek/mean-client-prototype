import {Directive, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {LifecycleService} from "./lifecycle.service";
import {Lifecycle} from "../models/lifecycle";

/**
 * A directive that will spy on the element that it is applied to looking for lifecycle hooks
 * @author Andrew Jarombek
 * @since 2/21/2018
 */

@Directive({
  selector: '[spy]'
})
export class SpyDirective implements OnInit, OnDestroy {

    private LOG_TAG: string = '[Spy.Directive]';

    constructor(private renderer: Renderer2, private el: ElementRef, private lifecycleService: LifecycleService) {}

    /**
     * The initialization lifecycle for the spied upon element.  Send an appropriate notification to the
     * lifecycle service for subscribers to consume.
     */
    ngOnInit(): void {
        const status: Lifecycle = this.lifecycleObject("init");

        console.info(`${this.LOG_TAG} Init Element With Value: ${status.value}`);
        console.info(`${this.LOG_TAG} Init Element With ID: ${status.id}`);

        this.lifecycleService.emitData(status);
    }

    /**
     * The destroy lifecycle for the spied upon element.  Send an appropriate notification to the
     * lifecycle service for subscribers to consume.
     */
    ngOnDestroy(): void {
        const status: Lifecycle = this.lifecycleObject("destroy");

        console.info(`${this.LOG_TAG} Destroy Element With Value: ${status.value}`);
        console.info(`${this.LOG_TAG} Destroy Element With ID: ${status.id}`);

        this.lifecycleService.emitData(status);
    }

    /**
     * Create a Lifecycle object
     * @param {string} event - the type of event to be placed on the lifecycle object
     * @returns {Lifecycle}
     */
    lifecycleObject(event: string) : Lifecycle {
        return {
            id: this.el.nativeElement.id,
            event: event,
            value: this.el.nativeElement.value
        };
    }
}
