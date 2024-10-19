"use strict";
const registerUser = (user) => {
    if (`admincode` in user) {
        console.log(`Admin account crated. Hello ${user.username}!`);
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
registerUser(newUser);
registerUser(newAdmin);
