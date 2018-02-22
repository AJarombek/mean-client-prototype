import {EventEmitter} from "@angular/core";

/**
 * An interface for a service that emits notifications to subscribers
 * @author Andrew Jarombek
 * @since 2/21/2018
 */

export interface NotifyService {

    onData: EventEmitter<any>;

    emitData(data: any);
}