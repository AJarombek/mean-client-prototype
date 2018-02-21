import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {MockAuthenticationService} from "../mock/mock-authentication.service";
import {Router} from "@angular/router";
import {Auth} from "../auth";

/**
 * Component for handling the form that logs in users
 * @author Andrew Jarombek
 * @since 2/2/2018
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [{provide: AuthenticationService, useClass: MockAuthenticationService}]
})
export class LoginComponent {

  // Is the login process in progress
  public inProgress: boolean = false;

  // What text is displayed on the submit button
  public submitText: string = 'Log In';

  public formModel: FormGroup;
  public loginError: string = null;

  private LOG_TAG: string = '[Login.Component]';

  constructor(private fb: FormBuilder,
              private router: Router,
              public auth: Auth,
              private authService: AuthenticationService) {

    this.formModel = fb.group({
       'username': ['', [Validators.required, Validators.maxLength(15)]],
       'password': ['', [Validators.required, Validators.maxLength(63)]]
    });
  }

  /**
   * Called when the login form is submitted
   */
  onSubmit() {
    this.inProgress = true;
    this.submitText = 'Logging In...';
    if (this.formModel.valid) {
      this.authService.login(this.formModel.value.username, this.formModel.value.password)
          .subscribe(() => {
            this.loginError = null;
            this.router.navigate(['/']);
            this.submitDone();
          }, error => {
            this.loginError = `Failed to Sign In User: ${error}`;
            this.submitDone();
          });
    } else {
      console.error(`${this.LOG_TAG} The form is not valid`);
    }
  }

  logout() {
      this.authService.logout();
  }

  private submitDone() {
      this.inProgress = false;
      this.submitText = 'Log In';
  }
}
