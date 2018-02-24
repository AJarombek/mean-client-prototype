import {AbstractControl, ValidatorFn} from "@angular/forms";

/**
 * Create a function for a form validator.  It makes sure that the form input contains no whitespace
 * @author Andrew Jarombek
 * @since 2/23/2018
 */

// The function has to be actually executed in the form model [ used as noWhiteSpaceValidator() ]
export function noWhitespaceValidator(): ValidatorFn {

    return (control: AbstractControl): {[key: string]: any} => {
        const isValid = (control.value || '').trim().length !== 0;
        return isValid ? null : {whitespace: true};
    };
}