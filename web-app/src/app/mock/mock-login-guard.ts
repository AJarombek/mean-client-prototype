import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

/**
 * A guard that mocks the behavior of blocking or accepting a signed in user
 * @author Andrew Jarombek
 * @since 1/30/2018
 */

@Injectable()
export class MockLoginGuard implements CanActivate {

    canActivate() {
        return this.isLoggedIn();
    }

    private isLoggedIn() {
        console.info("Can't Access Page: No User Signed In");
        return false;
    }
}