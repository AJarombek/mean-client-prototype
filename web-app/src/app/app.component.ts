import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {Auth} from "./auth";
import {ProfileService} from "./profile.service";
import {MockUserService} from "./mock/mock-user.service";

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
export class AppComponent {

  constructor(public auth: Auth, private authService: AuthenticationService,
              private profileService: ProfileService) {}

  logout() {
    this.authService.logout();
  }

  getProfileData(username: string) {
    console.info(`Emitted Username: ${username}`);
    this.profileService.emitData(username);
  }
}
