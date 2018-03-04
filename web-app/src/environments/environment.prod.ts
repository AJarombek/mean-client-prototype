/**
 * The PROD environment for the Angular app.  Prod environment hooks up to the local backend API for now
 * Use `ng build --env=prod` to use `environment.prod.ts`.
 * @author Andrew Jarombek
 * @since 3/3/2018
 */

export const environment = {
    production: true,
    apiUrl: 'localhost:3000/api/', // There is no prod endpoint at the moment
    useMocks: false
};