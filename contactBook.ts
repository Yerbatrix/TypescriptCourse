interface Contact {
  name: string;
  email: string;
  phone: string;
}

const addContact = (addressBook: Array<Contact>, contact: Contact): void => {
  if (!contact.name || !contact.email || !contact.phone) {
    console.log(
      "Błąd: Wszystkie pola (imię, email, telefon) muszą być wypełnione."
    );
    return;
  }
  addressBook.push(contact);
  console.log(`Dodano kontakt: ${contact.name}`);
};

const getContacts = (addressBook: Array<Contact>): void => {
  console.log("\nlista kontaktów:");
  addressBook.forEach((contact, index) => {
    console.log(
      `${index + 1}. ${contact.name} - ${contact.email} - ${contact.phone}`
    );
  });
};

const findContactByName = (addressBook: Array<Contact>, name: String): void => {
  const contact = addressBook.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (contact) {
    console.log(
      `Znaleziono kontakt: ${contact.name} - ${contact.email} - ${contact.phone}`
    );
  } else {
    console.log(`Nie znaleziono kontaktu o imieniu: ${name}.`);
  }
};

const removeContact = (addressBook: Array<Contact>, name: string): void => {
  const index = addressBook.findIndex(
    (contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
  if (index !== -1) {
    const removedContact = addressBook.splice(index, 1);
    console.log(`Usunięto kontakt: ${removedContact[0].name}`);
  } else {
    console.log(
      `Nie znaleziono kontaktu o imieniu: ${name}, nie można usunąć.`
    );
  }
};

const addressBook: Array<Contact> = [];

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
