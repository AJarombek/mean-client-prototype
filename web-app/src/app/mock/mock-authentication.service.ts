import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Auth} from "../auth";

/**
 * Mock service for authenticating users and setting up / taking down user sessions
 * @author Andrew Jarombek
 * @since 1/31/2018
 */

@Injectable()
export class MockAuthenticationService {

    constructor(private auth: Auth) { }

    /**
     * Mock login for a user and create a new session
     * @param {string} username - the users username
     * @param {string} password - the users password
     * @returns {Observable<any>}
     */
    login(username: string, password: string): Observable<any> {

        // Accept a user with the test account
        if (username === 'andy' && password === 'test') {

            // Delay the sign in process by two seconds
            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify({user:'andy'}));
                this.auth.isAuthenticated = true;
                this.auth.username = 'andy';
            }, 2000);

            return new Observable(data => {
                setTimeout(() => {
                    data.next('Signed In!');
                }, 2000);
            });
        } else {
            return new Observable(data => {
                data.error('Invalid Username or Password');
            });
        }
    }

    /**
     * Log out the current user by removing the session from LocalStorage
     */
    logout() {
        localStorage.removeItem('user');
        this.auth.isAuthenticated = false;
        this.auth.username = null;
    }

    /**
     * Returns where the user is logged in or not based on whether the local storage has a user value
     * @returns {string | null}
     */
    static isLoggedIn(): boolean {
        // The unary negate operator '!' coerces a value to a boolean, so a double negation returns the correct boolean
        // Source: You Don't Know JavaScript: Types & Grammar (p. 83)
        return !!localStorage.getItem('user');
    }
}