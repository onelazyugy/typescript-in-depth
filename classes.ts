//import all
import * as Interfaces from './interfaces';
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string; 
    department: string;

    assistCustomer(custName: string){
        console.log(this.name + ' is assisting ' + custName);
    }
}

class ReferenceItem {
    title: string;
    private year: number;

    constructor(newTitle: string, newYear: number){
        console.log('Creating a new ReferenceItem...')
        this.title = newTitle;
        this.year = newYear;
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
    }
}

//another way to create classes
abstract class AnotherClass{
    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number){
        console.log('Creating a new AnotherClass...')
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${AnotherClass.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string){
        console.log('setting publisher.....');
        this._publisher = newPublisher;
    }
    //child class must implement this abstract class 
    abstract printCitation(): void;
}

export {UniversityLibrarian, ReferenceItem, AnotherClass};