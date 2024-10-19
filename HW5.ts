interface User {
  username: string;
  email: string;
}
interface Admin extends User {
  adminCode: string;
}

type Guest = User & {
  guestCode: string;
};

const registerUser = (user: User | Admin): void => {
  if (`adminCode` in user) {
    console.log(`Admin account crated. Hello ${user.username}!`);
  } else if (`guestCode` in user) {
    console.log(`Guest crated. Hello ${user.username}!`);
  } else {
    console.log(`User account created. Hello ${user.username}!`);
  }
};

const newUser: User = {
  username: "Franek",
  email: "franek.dolas@email.com",
};

const newAdmin: Admin = {
  username: "PanSzycha",
  email: "szyszka@email.com",
  adminCode: "bigboss",
};

const newGuest: Guest = {
  username: "Turysta",
  email: "tourist@email.com",
  guestCode: "tornister",
};

registerUser(newUser);

registerUser(newAdmin);

registerUser(newGuest);
