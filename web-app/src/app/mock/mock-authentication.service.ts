import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/**
 * Mock service for authenticating users and setting up / taking down user sessions
 * @author Andrew Jarombek
 * @since 1/31/2018
 */

@Injectable()
export class MockAuthenticationService {

    constructor() { }

    /**
     * Mock login for a user and create a new session
     * @param {string} username - the users username
     * @param {string} password - the users password
     * @returns {Observable<any>}
     */
    login(username: string, password: string) {

        // Accept a user with the test account
        if (username === 'andy' && password === 'test') {
            localStorage.setItem('user', JSON.stringify({user:'andy'}));
        }

        return new Observable;
    }

    /**
     * Log out the current user by removing the session from LocalStorage
     */
    logout() {
        localStorage.removeItem('user');
    }
}