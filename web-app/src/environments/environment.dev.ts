/**
 * The DEV environment for the Angular app.  Dev environment hooks up to the backend API
 * Use `ng build --env=dev` to use `environment.dev.ts`.
 * @author Andrew Jarombek
 * @since 3/3/2018
 */

export const environment = {
    production: false,
    apiUrl: 'http://localhost:4200/api/',
    useMocks: false,
    evt: "dev"
};