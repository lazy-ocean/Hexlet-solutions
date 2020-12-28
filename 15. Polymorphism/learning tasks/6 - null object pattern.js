/* FakeSubscription.js
You have preset Subscription class and User class.
1) Write FakeSubscription class that works the same way but the constructor is different - it takes a user (made with User class). If the user is admin, all types of subscriptions available, if not - all disabled.
2) Finish User class the way that if the subscription type is not argumented, it creates fake one using a class from above.
*/

//////// FAKE SUBSCRIPTION
class FakeSubscription {
  constructor(user) {
    this.admin = user;
  }

  hasProfessionalAccess() {
    return this.admin;
  }

  hasPremiumAccess() {
    return this.admin;
  }
}

///////// USER
class User {
  constructor(email, currentSubscription = null) {
    this.email = email;
    this.currentSubscription =
      currentSubscription || new FakeSubscription(this.isAdmin());
  }

  getCurrentSubscription() {
    return this.currentSubscription;
  }

  isAdmin() {
    return this.email === "admin@hexlet.io";
  }
}

////// SUBSCRIPTION
class Subscription {
  constructor(subscriptionPlanName) {
    this.subscriptionPlanName = subscriptionPlanName;
  }

  hasProfessionalAccess() {
    return this.subscriptionPlanName === "professional";
  }

  hasPremiumAccess() {
    return this.subscriptionPlanName === "premium";
  }
}

//////// TESTS
const user1 = new User("vasya@email.com", new Subscription("premium"));
user1.getCurrentSubscription().hasPremiumAccess(); // true
user1.getCurrentSubscription().hasProfessionalAccess(); // false

const user2 = new User("vasya@email.com", new Subscription("professional"));
user2.getCurrentSubscription().hasPremiumAccess(); // false
user2.getCurrentSubscription().hasProfessionalAccess(); // true

// fake one is created as the subscription is not argumented, and this is just a user
const user3 = new User("vasya@email.com");
user3.getCurrentSubscription().hasPremiumAccess(); // false
user3.getCurrentSubscription().hasProfessionalAccess(); // false

const user4 = new User("admin@hexlet.io"); // is admin
user4.getCurrentSubscription().hasPremiumAccess(); // true
user4.getCurrentSubscription().hasProfessionalAccess(); // true
