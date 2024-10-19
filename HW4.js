var addContact = function (addressBook, contact) {
  if (!contact.name || !contact.email || !contact.phone) {
    console.log(
      "Błąd: Wszystkie pola (imię, email, telefon) muszą być wypełnione."
    );
    return;
  }
  addressBook.push(contact);
  console.log("Dodano kontakt: ".concat(contact.name));
};
var getContacts = function (addressBook) {
  console.log("\nlista kontaktów:");
  addressBook.forEach(function (contact, index) {
    console.log(
      ""
        .concat(index + 1, ". ")
        .concat(contact.name, " - ")
        .concat(contact.email, " - ")
        .concat(contact.phone)
    );
  });
};
var findContactByName = function (addressBook, name) {
  var contact = addressBook.find(function (contact) {
    return contact.name.toLowerCase() === name.toLowerCase();
  });
  if (contact) {
    console.log(
      "Znaleziono kontakt: "
        .concat(contact.name, " - ")
        .concat(contact.email, " - ")
        .concat(contact.phone)
    );
  } else {
    console.log("Nie znaleziono kontaktu o imieniu: ".concat(name, "."));
  }
};
var removeContact = function (addressBook, name) {
  var index = addressBook.findIndex(function (contact) {
    return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  if (index !== -1) {
    var removedContact = addressBook.splice(index, 1);
    console.log("Usuni\u0119to kontakt: ".concat(removedContact[0].name));
  } else {
    console.log(
      "Nie znaleziono kontaktu o imieniu: ".concat(
        name,
        ", nie mo\u017Cna usun\u0105\u0107."
      )
    );
  }
};
var addressBook = [];
addContact(addressBook, {
  name: "Jan Kowalski",
  email: "jan.kowalski@example.com",
  phone: "123-456-789",
});
addContact(addressBook, {
  name: "Anna Nowak",
  email: "anna.nowak@example.com",
  phone: "987-654-321",
});
addContact(addressBook, {
  name: "Piotr Zawada",
  email: "piotr.zawada@example.com",
  phone: "555-555-555",
});
getContacts(addressBook);
findContactByName(addressBook, "Jan Kowalski");
findContactByName(addressBook, "Stefan Kowalski");
removeContact(addressBook, "Stefan Kowalski");
removeContact(addressBook, "Jan Kowalski");
findContactByName(addressBook, "Jan Kowalski");
findContactByName(addressBook, "Stefan Kowalski");
getContacts(addressBook);
