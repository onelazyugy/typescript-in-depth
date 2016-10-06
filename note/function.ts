function GetAllBooks(){
    let books = [
        {title: 'Ulysses', author: 'James Joyce', available: true},
        {title: 'A Farewell to Arms', author: 'Ernest Hemignway', available: false},
        {title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true},
        {title: 'Moby Dick', author: 'Herman Melville', available: true}
    ];
    return books;
}

function LogFirstAvailable(books): void{
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for(let currentBook of books){
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Totoal Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);