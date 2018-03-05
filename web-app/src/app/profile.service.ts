import {EventEmitter, Injectable} from '@angular/core';
import {NotifyService} from "./notify.service";
import {UserService} from "./user.service";

/**
 * A service that allows you to emit user data to subscribed components
 * @author Andrew Jarombek
 * @since 2/17/2018
 */

@Injectable()
export class ProfileService implements NotifyService {

    public onData: EventEmitter<string> = new EventEmitter<string>();

    private LOG_TAG: string = '[Profile.Service]';

    constructor(private userService: UserService) {}

    /**
     * Emit user data with a certain username to subscribed components
     * @param {string} username - the username of a user to get data about
     */
    emitData(username: string) {
        this.userService.get(username).subscribe(res => {
            console.info(`${this.LOG_TAG} Emitting User: ${JSON.stringify(res)}`);
            this.onData.emit(JSON.stringify(res));
        }, error => {
            console.info(`${this.LOG_TAG} User does not exist with username: ${username}`);
        });
    }

}
