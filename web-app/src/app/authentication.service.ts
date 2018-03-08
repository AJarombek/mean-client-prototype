import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import * as moment from "moment";

/**
 * Service for authenticating users and setting up / taking down user sessions
 * @author Andrew Jarombek
 * @since 1/31/2018
 */

@Injectable()
export class AuthenticationService {

  private SECOND = 'second';

  private static LOG_TAG: string = '[Authentication.Service]';

  constructor(private http: HttpClient) { }

  /**
   * Login a user and create a new session
   * @param {string} username - the users username
   * @param {string} password - the users password
   * @returns {Observable<any>}
   */
  login(username: string, password: string) {
    // http.post() returns an observable.  We use rxjs map() function to access the response
    return this.http.post<any>(`/api/auth/login`, { username: username, password: password})
        .map(jwtAuth => {

          // Add the JWT to localStorage
          // This is to create a session that will keep the user logged in.  LocalStorage items have no expiration date
          if (jwtAuth) {

            // Get the time that the JWT expires by adding the current time and the expires in time
            const expiresAt: moment.Moment = moment().add(this.SECOND, jwtAuth.expiresIn);

            localStorage.setItem('id_token', jwtAuth.idToken);
            localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
            localStorage.setItem('username', username);

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
  static logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('username');
  }

    /**
     * Determine if the user is logged in based on the JWT expiration date
     * @returns {boolean}
     */
  static isLoggedIn() {
      const loggedIn: boolean = moment().isBefore(this.getExpiration());
      console.debug(`${AuthenticationService.LOG_TAG} Is the user logged in: ${loggedIn}`);

      if (!loggedIn && localStorage.getItem('id_token')) {
          AuthenticationService.logout()
      }

      return loggedIn;
  }

    /**
     * Get the expiration date of the JWT session from localStorage
     * @returns {moment.Moment}
     */
  static getExpiration(): moment.Moment {
      const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return moment(expiresAt);
  }
}
