/* getGirlFriends()
Write and export by default getGirlFriends() function that takes a list of users and returns a flattened list of their girlfriends. The sex of a friend you can identify by 'gender' key of users.
*/
const getGirlFriends = (users) => {
  let friends = users.map((user) => user.friends).flat();
  return friends.filter((friend) => friend.gender === "female");
};
export default getGirlFriends;

////// TESTS
const users = [
  {
    name: "Tirion",
    friends: [
      { name: "Mira", gender: "female" },
      { name: "Ramsey", gender: "male" },
    ],
  },
  { name: "Bronn", friends: [] },
  {
    name: "Sam",
    friends: [
      { name: "Aria", gender: "female" },
      { name: "Keit", gender: "female" },
    ],
  },
  {
    name: "Rob",
    friends: [{ name: "Taywin", gender: "male" }],
  },
];

console.log(getGirlFriends([])); // []
console.log(getGirlFriends(users));
/*
[
  { name: 'Mira', gender: 'female' },
  { name: 'Aria', gender: 'female' },
  { name: 'Keit', gender: 'female' },
]
*/
