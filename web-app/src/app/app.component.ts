import {AfterContentChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {Auth} from "./auth";
import {ProfileService} from "./profile.service";
import {MockUserService} from "./mock/mock-user.service";
import {Subject} from "rxjs/Subject";
import {LoadedService} from "./loaded.service";
import {takeUntil} from "rxjs/operators";

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

    private ngUnsubscribe: Subject<any> = new Subject();
    private LOG_TAG: string = '[App.Component]';

    constructor(public auth: Auth, private authService: AuthenticationService,
              private profileService: ProfileService, private loadedService: LoadedService) {
        console.info(loadedService);
    }

    ngOnInit(): void {
        console.info(this.loadedService);
        this.loadedService.onData.pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
            console.info(`${this.LOG_TAG} Receiving Component Loaded Notification: ${res}`);
            this.getProfileData(this.auth.username);
        });
    }

    ngOnDestroy(): void {
        console.info(`${this.LOG_TAG} OnDestroy() called for App Component`);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    logout() {
        this.authService.logout();
    }

    getProfileData(username: string) {
        console.info(`${this.LOG_TAG} Emitted Username: ${username}`);
        this.profileService.emitData(username);
    }
}
