import {EventEmitter, Injectable} from '@angular/core';

/**
 * Service that allows you to emit a username to other components.  The current use is to pass a username from the
 * cat picture component to the app component.  From there, it is used to load the profile page
 * @author Andrew Jarombek
 * @since 2/18/2018
 */

@Injectable()
export class UsernameService {

    public onData: EventEmitter<string> = new EventEmitter<string>();

    private LOG_TAG: string = '[Username.Service]';

    constructor() { }

    /**
     * Emit a username to subscribed components
     * @param {string} username - the username to be emitted to subscribers
     */
    emitData(username: string) {
        console.info(`${this.LOG_TAG} Emitting Username: ${username}`);
        this.onData.emit(username);
    }
}
