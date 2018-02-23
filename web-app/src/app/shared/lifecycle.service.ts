import {EventEmitter, Injectable} from '@angular/core';
import {NotifyService} from "../notify.service";
import {Lifecycle} from "../models/lifecycle";

/**
 * A service that emits information about a lifecycle event that happened on a particular element
 * @author Andrew Jarombek
 * @since 2/21/2018
 */

@Injectable()
export class LifecycleService implements NotifyService {

    onData: EventEmitter<string> = new EventEmitter<string>();

    private LOG_TAG: string = '[Lifecycle.Service]';

    constructor() { }

    emitData(data: Lifecycle) {
        const dataString: string = JSON.stringify(data);
        console.info(`${this.LOG_TAG} Emitting lifecycle event: ${dataString}`);

        // This timeout (0) gives enough time for the component to get a variable defined with the elements contents.
        // Yes, this is very hacky.  Yes it should be improved.
        setTimeout(() => {
            this.onData.emit(dataString);
        }, 0);
    }

}