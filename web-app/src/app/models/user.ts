/**
 * Class that represents a user
 * @author Andrew Jarombek
 * @since 2/3/2018
 */

export class User {

    constructor(public username: string,
                public first: string,
                public last: string,
                public postCount?: number) {}

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }
}