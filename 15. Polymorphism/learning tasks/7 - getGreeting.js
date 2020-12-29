/* getGreeting.js
Imagine that you have users and guests in the system. Write a function getGreeting and complete (if necessary) User and Guest classes so the greeting would be returned.
Don't use getGreeting as a class method and only add methods that potentially could be used for other functions. Build a function that could also be enhanced on much more types of users (admins, testers and so on).

Examples of work:
const guest = new Guest();
getGreeting(guest); // 'Nice to meet you Guest!'
const user = new User('Petr');
getGreeting(user); // 'Hello Petr!'
*/

/////// GUEST CLASS
class Guest {
  constructor() {
    this.name = "Guest";
  }

  getName() {
    return this.name;
  }

  getType() {
    return "guest";
  }
}

//////// USER CLASS
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getType() {
    return "user";
  }
}

/////// GET GREETING FUNCTION
const mapping = {
  guest: (guest) => `Nice to meet you ${guest.getName()}!`,
  user: (user) => `Hello ${user.getName()}!`,
  // potentially admin: (admin) => `Hi ${admin.getName()}!`,
};

const getGreeting = (user) => mapping[user.getType()](user);
