var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    Book.prototype.displayInfo = function () {
        console.log("Title: ".concat(this.title, ", Author: ").concat(this.author, ", ISBN: ").concat(this.isbn));
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Ksi\u0105\u017Cka \"".concat(book.title, "\" zosta\u0142a dodana do biblioteki."));
    };
    Library.prototype.removeBook = function (isbn) {
        var index = this.books.findIndex(function (book) { return book.isbn === isbn; });
        if (index !== -1) {
            var removedBook = this.books.splice(index, 1)[0];
            console.log("Ksi\u0105\u017Cka \"".concat(removedBook.title, "\" zosta\u0142a usuni\u0119ta z biblioteki."));
        }
        else {
            console.log("Nie znaleziono ksi\u0105\u017Cki o ISBN: ".concat(isbn, "."));
        }
    };
    Library.prototype.findBookByTitle = function (title) {
        var book = this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
        if (book) {
            console.log("Znaleziono ksi\u0105\u017Ck\u0119: \"".concat(book.title, "\""));
        }
        else {
            console.log("Nie znaleziono ksi\u0105\u017Cki o tytule \"".concat(title, "\""));
        }
        return book;
    };
    Library.prototype.displayAllBooks = function () {
        if (this.books.length > 0) {
            console.log("Lista książek w bibliotece");
            this.books.forEach(function (book) { return book.displayInfo(); });
        }
        else {
            console.log("Biblioteka jest pusta");
        }
    };
    return Library;
}());
var book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");
var book3 = new Book("1984", "George Orwell", "978-0-452-28423-4");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayAllBooks();
library.findBookByTitle("1984");
library.removeBook("978-0-06-112008-4");
library.displayAllBooks();
