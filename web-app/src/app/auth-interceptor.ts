import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

/**
 * Intercept all outbound HTTP requests.  If the user is authorized, add a new header to the HTTP request.
 * @author Andrew Jarombek
 * @since 3/3/2018
 * @source https://blog.angular-university.io/angular-jwt-authentication/
 */

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem('id_token');

        if (idToken) {

            // If the JWT exists in localStorage, set it as an HTTP header on outbound requests
            const authReq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });

            return next.handle(authReq);
        } else {

            // If there is no JWT, send the original HTTP request without an Authorization header
            return next.handle(req);
        }
    }

}