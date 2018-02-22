import {EventEmitter, Injectable} from '@angular/core';
import {NotifyService} from "./notify.service";
import {logger} from "codelyzer/util/logger";

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

    emitData(data: string) {
        logger.info(`${this.LOG_TAG} Emitting lifecycle event: ${data}`);
        this.onData.emit(data);
    }

}
