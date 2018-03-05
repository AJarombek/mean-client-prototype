import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/user";
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";
import {environment} from "../environments/environment";

/**
 * A service for handling users for the application
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

@Injectable()
export class UserService implements HttpService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<[User]> {
        return this.http.get<[User]>(`${environment.apiUrl}/users`);
    }

    get(username: string): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/users/${username}`);
    }

    post(user: User): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/users`, user);
    }

    put(user: User): Observable<User> {
        return this.http.put<User>(`${environment.apiUrl}/users/${user.username}`, user);
    }

    /**
     * There is currently no PATCH implementation in the API
     */
    patch(username: string, json: {[key: string]: any}): Observable<any> {
        return new Observable<any>(o => {
            o.next("No PATCH endpoint set for users");
        });
    }

    delete(username: string): Observable<any> {
        return this.http.delete<any>(`${environment.apiUrl}/users/${username}`);
    }
}
