import {Injectable} from "@angular/core";

/**
 * A class to hold authentication values to be used throughout the application
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

@Injectable()
export class Auth {
    private _isAuthenticated: boolean = false;
    private _username: string = null;

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    set isAuthenticated(val: boolean) {
        console.info(`Setting 'isAuthenticated' to ${val}`);
        this._isAuthenticated = val;
    }

    get username(): string {
        return this._username;
    }

    set username(val: string) {
        console.info(`Setting 'username' to ${val}`);
        this._username = val;
    }
}