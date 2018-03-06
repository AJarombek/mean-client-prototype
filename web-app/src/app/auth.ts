import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

/**
 * A class to hold authentication values to be used throughout the application
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

@Injectable()
export class Auth {
    private LOG_TAG: string = '[Auth]';

    get isAuthenticated(): boolean {
        return AuthenticationService.isLoggedIn();
    }

    set isAuthenticated(val: boolean) {
        console.info(`${this.LOG_TAG} No Setting Allowed!`);
    }

    get username(): string {
        return localStorage.getItem('username');
    }

    set username(val: string) {
        console.info(`${this.LOG_TAG} No Setting Allowed!`);
    }
}