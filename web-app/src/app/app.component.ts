import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {MockAuthenticationService} from "./mock/mock-authentication.service";
import {Auth} from "./auth";

/**
 * Component for the application.  Contains the navigation bar and an outlet to the current routed page
 * @author Andrew Jarombek
 * @since 1/28/2018
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{provide: AuthenticationService, useClass: MockAuthenticationService}, Auth]
})
export class AppComponent {

  constructor(private auth: Auth, private authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
  }
}
