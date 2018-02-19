import {EventEmitter, Injectable} from '@angular/core';
import {logger} from "codelyzer/util/logger";

/**
 * A service that allows you to emit a notification that a child component is loaded
 * @author Andrew Jarombek
 * @since 2/18/2018
 */

@Injectable()
export class LoadedService {

    public onData: EventEmitter<string> = new EventEmitter<string>();

    private LOG_TAG: string = '[Loaded.Service]';

    constructor() { }

    /**
     * Emit user data when a child component is loaded
     * @param {string} component - the name of the component that loaded
     */
    public emitData(component: string) {
        logger.info(`${this.LOG_TAG} Emitting component loaded: ${component}`);
        this.onData.emit(component);
    }
}
