/**
 * Class that represents a meow pic post
 * @author Andrew Jarombek
 * @since 1/29/2018
 */

export class Post {

    // This constructor pattern is shorthand for defining instance variables.  When you use
    // an access modifier in the constructor the variable is automatically added to the class
    constructor(public picture?: string,
                public name?: string,
                public username?: string,
                public first?: string,
                public last?: string,
                public date?: Date,
                public description?: string,
                public up?: number,
                public down?: number,
                public id?: number,
                public pictureData?: string) {}
}