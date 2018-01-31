import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

/**
 * A guard that checks to see if a user is signed in
 * @author Andrew Jarombek
 * @since 1/30/2018
 */

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.isLoggedIn(state);
    }

    private isLoggedIn(state: RouterStateSnapshot): boolean {

        if (localStorage.getItem('user')) {
            return true;
        }

        // Navigate to the login page if you try to navigate to a guarded page without being logged in
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}