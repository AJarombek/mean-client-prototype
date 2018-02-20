import {Observable} from "rxjs/Observable";

/**
 * An interface for an HttpService in the project.  Note that the patch method is optional
 * (some services will just use PUT)
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

export interface HttpService {

    getAll(): Observable<[any]>;
    get(name: any): Observable<any>;
    post(item: any): Observable<any>;
    put(item: any): Observable<any>;
    patch?(name: string, data: {[key: string]: any}): Observable<any>;
    delete(name: any): Observable<any>;
}