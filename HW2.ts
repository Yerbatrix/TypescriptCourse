type Book = {
  title: string;
  author: string;
  yearPublished: number;
  genre: Genre;
  isAvailable: boolean;
};

enum Genre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Fantasy = "Fantasy",
  Biography = "Biography",
  ScienceFiction = "ScienceFiction",
}

const library: Array<Book> = [
  {
    title: "Heroizm dla początkujących",
    author: "John Moore",
    yearPublished: 2007,
    genre: Genre.Fantasy,
    isAvailable: false,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937,
    genre: Genre.Fantasy,
    isAvailable: true,
  },
  {
    title: "Czysty kod. Podręcznik dobrego programisty",
    author: "Martin Robert C.",
    yearPublished: 2014,
    genre: Genre.NonFiction,
    isAvailable: true,
  },
];

console.log(library);
