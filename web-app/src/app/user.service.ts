import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {appConfig} from "./app.config";
import {User} from "./models/user";
import {Observable} from "rxjs/Observable";
import {HttpService} from "./http.service";

/**
 * A service for handling users for the application
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

@Injectable()
export class UserService implements HttpService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<[User]> {
        return this.http.get<[User]>(`${appConfig.apiDev}/users`);
    }

    get(username: string): Observable<User> {
        return this.http.get<User>(`${appConfig.apiDev}/users/${username}`);
    }

    post(user: User): Observable<User> {
        return this.http.post<User>(`${appConfig.apiDev}/users`, user);
    }

    put(user: User): Observable<User> {
        return this.http.put<User>(`${appConfig.apiDev}/users/${user.username}`, user);
    }

    patch(username: string, json: {[key: string]: any}): Observable<User> {
        return this.http.patch<User>(`${appConfig.apiDev}/users/${username}`, json);
    }

    delete(username: string): Observable<any> {
        return this.http.delete<any>(`${appConfig.apiDev}/users/${username}`);
    }
}
