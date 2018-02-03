import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {appConfig} from "./app.config";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Auth} from "./auth";

/**
 * Service for authenticating users and setting up / taking down user sessions
 * @author Andrew Jarombek
 * @since 1/31/2018
 */

@Injectable()
export class AuthenticationService {

  private loginUrl = '/auth/login';

  constructor(private http: HttpClient, private auth: Auth) { }

  /**
   * Login a user and create a new session
   * @param {string} username - the users username
   * @param {string} password - the users password
   * @returns {Observable<any>}
   */
  login(username: string, password: string) {
    // http.post() returns an observable.  We use rxjs map() function to access the response
    return this.http.post<any>(`${appConfig.apiDev}${this.loginUrl}`, { username: username, password: password})
        .map(user => {

          // Add the user to local storage if the token property exists
          // This is to create a session that will keep the user logged in.  LocalStorage items have no expiration date
          if (user && user.token) {
            localStorage.setItem('user', JSON.stringify(user));
            this.auth.isAuthenticated = true;
            this.auth.username = user;

            return new Observable(data => {
                data.next('Signed In!');
            });
          } else {
            return new Observable(data => {
                data.error('Invalid Username or Password');
            });
          }
        });
  }

  /**
   * Log out the current user by removing the session from LocalStorage
   */
  logout() {
    localStorage.removeItem('user');
    this.auth.isAuthenticated = false;
    this.auth.username = null;
  }
}
