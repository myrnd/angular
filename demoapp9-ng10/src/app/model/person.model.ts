export interface PersonModel {
    name: string;
    location: string;
}

export class Person implements PersonModel {
    name: string;
    location: string;

    constructor() {
        this.name = "";
        this.location = "";
    }
}

