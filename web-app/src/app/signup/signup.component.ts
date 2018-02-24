import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Auth} from "../auth";
import {AuthenticationService} from "../authentication.service";
import {noWhitespaceValidator} from "../shared/no-whitespace.validator";

/**
 * Component for signing up users
 * @author Andrew Jarombek
 * @since 1/3/2018
 */

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

    // Is the sign up process in progress
    public inProgress: boolean = false;

    // What text is displayed on the submit button
    public submitText: string = 'Sign Up';

    public formModel: FormGroup;
    public signupError: string = null;

    constructor(private fb: FormBuilder,
              private router: Router,
              public auth: Auth,
              private authService: AuthenticationService) {

        this.formModel = fb.group({
            'username': ['', [Validators.required, Validators.maxLength(15),
                          Validators.pattern("^[a-zA-Z0-9]+$")]],
            'first': ['', [Validators.required, Validators.maxLength(31),
                      Validators.pattern("^[a-zA-Z\-']+$")]],
            'last': ['', [Validators.required, Validators.maxLength(31),
                      Validators.pattern("^[a-zA-Z\-']+$")]],
            'pwGroup': fb.group({
                'password': ['', [Validators.required, Validators.minLength(6),
                              Validators.maxLength(63), Validators.pattern("^[^\\s]+$")]],
                'pwConfirm': ['', [Validators.required, Validators.minLength(6),
                              Validators.maxLength(63), noWhitespaceValidator()]]
            }, {validator: this.equalValidator})
        });
    }

    onSubmit() {
        this.inProgress = true;
        this.submitText = 'Signing Up...';
        console.info('Signing Up');
        setTimeout(() => {
            this.submitDone();
        }, 2000);
    }

    logout() {
        this.authService.logout();
    }

    private submitDone() {
        this.inProgress = false;
        this.submitText = 'Sign Up';
    }

    /**
     * A custom validator functon for a form group.  It must conform to the ValidatorFn interface, which
     * specifies that the function takes in a FormGroup and returns an object literal.  This validator checks to
     * see that all the values in the group are equal
     * @param FormGroup value - the values entered into the form group
     * @returns {{[p: string]: any}}
     */
    equalValidator({value}: FormGroup): {[key: string]: any} {
        const [first, ...rest] = Object.keys(value || {});
        const valid = rest.every(val => value[val] === value[first]);
        return valid ? null : {equal: true};
    }
}
