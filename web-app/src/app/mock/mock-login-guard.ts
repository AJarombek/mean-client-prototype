import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

/**
 * A guard that mocks the behavior of blocking or accepting a signed in user
 * @author Andrew Jarombek
 * @since 1/30/2018
 */

@Injectable()
export class MockLoginGuard implements CanActivate {

    private LOG_TAG: string = '[LoginGuard]';

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.info(`${this.LOG_TAG} Navigating to URL Behind Login Guard`);
        return this.isLoggedIn(state);
    }

    private isLoggedIn(state: RouterStateSnapshot): boolean {

        if (localStorage.getItem('user')) {
            return true;
        }

        // Navigate to the login page if you try to navigate to a guarded page without being logged in
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        console.info(`${this.LOG_TAG} Login Guard Authentication Conditions Failed... Redirecting`);
        return false;
    }
}