import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import {HttpService} from "../http.service";

/**
 * A mock service for handling users for the application
 * @author Andrew Jarombek
 * @since 2/9/2018
 */

@Injectable()
export class MockUserService implements HttpService {

    constructor() { }

    getAll(): Observable<[User]> {
        return new Observable<[User]>(o => {
           o.next([new User("andy", "Andrew", "Jarombek", 5),
               new User("test", "Joe", "Test", 1)]);
        });
    }

    get(username: string): Observable<User> {

        if (username == "andy") {
            return new Observable<User>(o => {
                o.next(new User("andy", "Andrew", "Jarombek", 5));
            });
        } else {
            return new Observable<User>(o => {
                o.error("No User matches Username");
            });
        }
    }

    post(user: User): Observable<User> {
        return this.returnUserObservable(user);
    }

    put(user: User): Observable<User> {
        return this.returnUserObservable(user);
    }

    patch(username: string, json: {[key: string]: any}): Observable<User> {
        return new Observable<User>(o => {
            o.error("No User matches Username");
        });
    }

    delete(username: string): Observable<any> {
        return new Observable<any>(o => {
            o.next("Delete User Success!");
        });
    }

    /**
     * Simply takes a User object and if it isn't null, return an Observable of it.
     * Otherwise return an observable that gives an error
     * @param {User} user - the user to wrap in an observable
     * @returns {Observable<User>}
     */
    returnUserObservable(user: User): Observable<User> {
        if (!user) {
            return new Observable<User>(o => {
                o.error("Invalid User Entered");
            });
        } else {
            return new Observable<User>(o => {
                o.next(user);
            });
        }
    }
}
