"use strict";
const registerUser = (user) => {
    if (`adminCode` in user) {
        console.log(`Admin account crated. Hello ${user.username}!`);
    }
    else if (`guestCode` in user) {
        console.log(`Guest crated. Hello ${user.username}!`);
    }
    else {
        console.log(`User account created. Hello ${user.username}!`);
    }
};
const newUser = {
    username: "Franek",
    email: "franek.dolas@email.com",
};
const newAdmin = {
    username: "PanSzycha",
    email: "szyszka@email.com",
    adminCode: "bigboss",
};
const newGuest = {
    username: "Turysta",
    email: "tourist@email.com",
    guestCode: "tornister",
};
registerUser(newUser);
registerUser(newAdmin);
registerUser(newGuest);
