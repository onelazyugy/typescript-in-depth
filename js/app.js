"use strict";
var enums_1 = require('./enums');
var shelf_1 = require('./shelf');
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Biography },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemignway', available: false, category: enums_1.Category.Poetry },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Fiction },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.History },
        { id: 5, title: 'Hamlet', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //get all books based on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            foundTitles.push(book.title);
        }
    }
    return foundTitles;
    ;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//
//**********************************************************
//generic function
/*
var inventory = [
    { id: 10, title: 'The C programming language', author: 'K & R', available: true, category: enums_1.Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnel', available: true, category: enums_1.Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: enums_1.Category.Software },
    { id: 13, title: 'Cool autoexec.bat Script', author: 'C. D.', available: true, category: enums_1.Category.Software }
];
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) {
    bookShelf.add(book);
});
var firstBook = bookShelf.getFirst();
console.log("first book: " + firstBook.title);
var magazine = [
    { title: 'Programming Language Montly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
var magazineShelf = new shelf_1.default();
magazine.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
console.log("first magazine: " + firstMagazine.title);
magazineShelf.printTitles();
var softwareBook = bookShelf.find('Code Complete');
console.log(softwareBook.title + " (" + softwareBook.author + ")");
*/
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
//# sourceMappingURL=app.js.map