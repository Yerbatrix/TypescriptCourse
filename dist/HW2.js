"use strict";
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "NonFiction";
    Genre["Fantasy"] = "Fantasy";
    Genre["Biography"] = "Biography";
    Genre["ScienceFiction"] = "ScienceFiction";
})(Genre || (Genre = {}));
const library = [
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
