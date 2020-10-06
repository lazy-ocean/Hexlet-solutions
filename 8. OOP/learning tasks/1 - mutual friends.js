/* getMutualFriends.js
Write and export getMutualFriends() function that takes two users and returns their mutual friends.
Use incapsulated methods:
-- user.id – returns unique user id
-- user.getFriends() – returns friend list
*/
///// INCAPSULATED METHODS:
let makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends;
  },
});

///////// TASK FUNCTION
export const getMutualFriends = (friend1, friend2) => {
  let friends1 = friend1.getFriends();
  let friends2 = friend2.getFriends();
  return friends1.filter((friend) =>
    friends2.some((fr) => fr.id === friend.id)
  );
};

////// TESTS
const user1 = makeUser();
const user2 = makeUser();
console.log(getMutualFriends(user1, user2)); // []

const friends = [
  makeUser({ id: 2 }),
  makeUser({ id: 8 }),
  makeUser({ id: 7 }),
  makeUser({ id: 100 }),
];
const user3 = makeUser({
  friends: friends.filter(({ id }) => id !== 7),
});
const user4 = makeUser({
  friends: friends.filter(({ id }) => id !== 100),
});
const mutualFriends = getMutualFriends(user3, user4);

console.log(mutualFriends);
/* [
  {
    friends: [],
    id:2,
    getFriends: [Function: getFriends]
  },

  {
    friends: [],
    id: 8,
    getFriends: [Function: getFriends]
  }
]
  */
