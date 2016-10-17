import {AnotherClass} from './classes';

export default class Encyclopedia extends AnotherClass {
    constructor(newTitle: string, newYear: number, public edition: number){
        super(newTitle, newYear);
    }
    //overriding parent method
    printItem(): void {
        super.printItem();//parent method
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}