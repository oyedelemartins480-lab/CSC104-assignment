class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title);

        if (book && book.available) {
            book.available = false;
            console.log(`${title} borrowed.`);
        } else {
            console.log(`${title} is not available.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(book => book.title === title);

        if (book) {
            book.available = true;
            console.log(`${title} returned.`);
        }
    }

    listAvailableBooks() {
        const availableBooks = this.books.filter(book => book.available);

        console.log("Available Books:");

        availableBooks.forEach(book => {
            console.log(`${book.title} by ${book.author}`);
        });
    }
}

const library = new Library();

library.addBook(new Book("Things Fall Apart", "Chinua Achebe", 1958));
library.addBook(new Book("Atomic Habits", "James Clear", 2018));

library.borrowBook("Atomic Habits");

library.listAvailableBooks();

library.returnBook("Atomic Habits");
