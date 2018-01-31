import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

/**
 * A guard that checks to see if a user is signed in
 * @author Andrew Jarombek
 * @since 1/30/2018
 */

@Injectable()
export class LoginGuard implements CanActivate {

    canActivate() {
        return this.isLoggedIn();
    }

    private isLoggedIn() {
        return true;
    }
}