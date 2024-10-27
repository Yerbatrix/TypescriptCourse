class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  displayInfo(): void {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`
    );
  }
}

class Library {
  books: Array<Book>;

  constructor() {
    this.books = [];
  }
  addBook(book: Book) {
    this.books.push(book);
    console.log(`Książka "${book.title}" została dodana do biblioteki.`);
  }
  removeBook(isbn: string): void {
    const index = this.books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(
        `Książka "${removedBook.title}" została usunięta z biblioteki.`
      );
    } else {
      console.log(`Nie znaleziono książki o ISBN: ${isbn}.`);
    }
  }
  findBookByTitle(title: string): Book | undefined {
    const book = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (book) {
      console.log(`Znaleziono książkę: "${book.title}"`);
    } else {
      console.log(`Nie znaleziono książki o tytule "${title}"`);
    }
    return book;
  }

  displayAllBooks(): void {
    if (this.books.length > 0) {
      console.log("Lista książek w bibliotece");
      this.books.forEach((book) => book.displayInfo());
    } else {
      console.log("Biblioteka jest pusta");
    }
  }
}

const book1 = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "978-0-316-76948-0"
);
const book2 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "978-0-06-112008-4"
);
const book3 = new Book("1984", "George Orwell", "978-0-452-28423-4");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.displayAllBooks();
library.findBookByTitle("1984");
library.removeBook("978-0-06-112008-4");
library.displayAllBooks();
