import {Category} from './enums';
import {Book} from './interfaces';

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
//interfaces
let myBook : Book= {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged: (reason: string) => console.log('Damaged: ' + reason)
};

PrintBook(myBook);
myBook.markDamaged('Missing back cover');
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