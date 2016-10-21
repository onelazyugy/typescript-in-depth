import {Category} from './enums';
import {Book, Logger, Author, Librarian, Magazine} from './interfaces';
import {UniversityLibrarian, ReferenceItem, AnotherClass} from './classes';
//import a module
import {CalculateLateFee as CalcFee, MaxBooksAllowed, Purge} from './lib/utilityFunctions'
//import default
import refBook from './encyclopedia';
import Shelf from './shelf';

function GetAllBooks(): Book[]{
    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Biography},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemignway', available: false, category: Category.Poetry},
        {id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Fiction},
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.History},
        {id: 5, title: 'Hamlet', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];
    return books;
}

function LogFirstAvailable(books): void{
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for(let currentBook of books){
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>{
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];
    for(let currentBook of allBooks){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]):void{
    for(let title of titles){
        console.log(title); 
    }
}

function GetBookByID(id: number): Book{
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number){
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);
    if(age){
        console.log('Age: ' + age);
    }
    if(city){
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[]{
    console.log('Checking out books for ' + customer);
    let booksCheckedOut: string[] = [];
    for(let id of bookIDs){
        let book = GetBookByID(id);
        if(book.available){
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

//overload function
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[]{
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];
    if(typeof bookProperty == 'string'){
        //get all books by a particular author
        for(let book of allBooks){
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    } else if(typeof bookProperty == 'boolean'){
        //get all books based on specified availability
        for(let book of allBooks){
            foundTitles.push(book.title);
        }
    }
    return foundTitles;;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}


//
//**********************************************************
//generic function
let inventory: Array<Book> = [
    {id: 10, title: 'The C programming language', author: 'K & R', available: true, category: Category.Software},
    {id: 11, title: 'Code Complete', author: 'Steve McConnel', available: true, category: Category.Software},
    {id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software},
    {id: 13, title: 'Cool autoexec.bat Script', author: 'C. D.', available: true, category: Category.Software}
];

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book =>{
    bookShelf.add(book);
});

let firstBook: Book = bookShelf.getFirst();
console.log(`first book: ${firstBook.title}`);

let magazine: Array<Magazine> = [
    {title: 'Programming Language Montly', publisher: 'Code Mags'},
    {title: 'Literary Fiction Quarterly', publisher: 'College Press'},
    {title: 'Five Points', publisher: 'GSU'}
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazine.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();
console.log(`first magazine: ${firstMagazine.title}`);
magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);
/*
let purgedBook: Array<Book> = Purge<Book>(inventory);
purgedBook.forEach(book =>{
    console.log(book.title);
});

let purgedNums : Array<number> = Purge<number>([1, 2, 3, 4]);
console.log(`number is: ${purgedNums}`);
*/

//class expression
/*
let Newspaper = class extends AnotherClass {
    //implement the abstract method
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class {title: string}{
    mainCharacter: string;
}
let favoriteNovel = new Novel();
favoriteNovel.title; 
*/

//abstract class
//let refBook: AnotherClass = new Encyclopedia('WorldPedia', 1900, 10);
//refBook.printCitation();

//inheritance
//let refBook = new Encyclopedia('WorldPedia', 1900, 10);
//refBook.printItem();

//classes
//let ref = new ReferenceItem('New Facts and Figures', 2010);
//ref.printItem();

//let another: AnotherClass = new AnotherClass('another class', 2016);
//another.printItem();
//getter and setter
//another.publisher = 'Random Data Publishing';
//console.log(another.publisher);
/*
let person: Librarian = new UniversityLibrarian();
person.name = 'Viet';
person.assistCustomer('Lynda');
*/

//interfaces
/*
let myBook : Book= {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged: (reason: string) => console.log('Damaged: ' + reason)
};*/

//interfaces
//PrintBook(myBook);
//myBook.markDamaged('torn pages');
//---
/*
let logDamage: DamageLogger;
logDamage = (damage: string) => {
    console.log('Damage reported: ' + damage);
};
logDamage('coffee stains');
*/




//function overload
//let hermansBooks = GetTitles('Herman Melville');
//hermansBooks.forEach(title=>console.log(title));

//rest param (vargars in JAVA)
//let myBooks: string[] = CheckoutBooks('Thorne', 1);
//myBooks.forEach(title => console.log(title));

//default param
//let poetryBooks = GetBookTitlesByCategory();
//poetryBooks.forEach(title => console.log(title));

//optional param
//CreateCustomer('Viet', 8);

//let IdGenerator: (chars: string, nums: number) => string;
//IdGenerator = CreateCustomerID;

//let myID : string = IdGenerator('daniel', 25);
//console.log(myID);

//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) =>console.log(++idx + ' - ' + val));