var registerUser = function (user) {
    if ("adminCode" in user) {
        console.log("Admin account crated. Hello ".concat(user.username, "!"));
    }
    else if ("guestCode" in user) {
        console.log("Guest crated. Hello ".concat(user.username, "!"));
    }
    else {
        console.log("User account created. Hello ".concat(user.username, "!"));
    }
};
var newUser = {
    username: "Franek",
    email: "franek.dolas@email.com",
};
var newAdmin = {
    username: "PanSzycha",
    email: "szyszka@email.com",
    adminCode: "bigboss",
};
var newGuest = {
    username: "Turysta",
    email: "tourist@email.com",
    guestCode: "tornister",
};
registerUser(newUser);
registerUser(newAdmin);
registerUser(newGuest);
