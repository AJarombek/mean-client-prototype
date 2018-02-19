import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {Auth} from "./auth";
import {ProfileService} from "./profile.service";
import {MockUserService} from "./mock/mock-user.service";
import {Subject} from "rxjs/Subject";
import {LoadedService} from "./loaded.service";
import {takeUntil} from "rxjs/operators";
import {UsernameService} from "./username.service";

/**
 * Component for the application.  Contains the navigation bar and an outlet to the current routed page
 * @author Andrew Jarombek
 * @since 1/28/2018
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
      {provide: AuthenticationService, useClass: MockAuthenticationService},
      Auth,
      ProfileService,
      MockUserService
  ]
})
export class AppComponent implements OnInit, OnDestroy {

    private usernameToPass: string;
    private ngUnsubscribe: Subject<any> = new Subject();
    private LOG_TAG: string = '[App.Component]';

    constructor(public auth: Auth, private authService: AuthenticationService,
                private profileService: ProfileService, private loadedService: LoadedService,
                private usernameService: UsernameService) {}

    /**
     * Called when the Component is initialized.  HEre we want to subscribe from certain services
     */
    ngOnInit(): void {

        // Subscribe to the LoadedService.  This service lets our component know when a child is initialized
        this.loadedService.onData.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
            console.info(`${this.LOG_TAG} Receiving Component Loaded Notification: ${res}`);

            const username = this.usernameToPass || this.auth.username;

            this.getProfileData(username);
        });

        // Subscribe to the UsernameService.  This service gives us a username to generate a Profile Component with
        this.usernameService.onData.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
            console.info(`${this.LOG_TAG} Receiving Username: ${res}`);
            this.usernameToPass = res;
        });
    }

    /**
     * Called when the Component is destroyed.  We want to unsubscribe from all observables
     * at this point.
     */
    ngOnDestroy(): void {
        console.info(`${this.LOG_TAG} OnDestroy() called for App Component`);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    /**
     * Logs out a user
     */
    logout() {
        this.authService.logout();
    }

    /**
     * Emits data to the profile service for subscribed components to consume
     * @param {string} username - the username to pass to the profile service
     */
    getProfileData(username: string) {
        // Only pass the username if it is not null
        if (username !== null && username !== undefined) {
            console.info(`${this.LOG_TAG} Emitted Username: ${username}`);
            this.profileService.emitData(username);
        } else {
            console.info(`${this.LOG_TAG} Passed Username was null or undefined. No User data Emitted.`);
        }
    }

    /**
     * Setter for the private usernameToPass variable
     * @param {string} username
     */
    setUsernameToPass(username: string) {
        this.usernameToPass = username;
    }
}
