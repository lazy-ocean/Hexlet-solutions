/* getUserLanguage.js
Write tests for the function that knocks to the github with the name of the user and returns the language she has most repos in. It uses github api, but you should avoid it in tests and use fake new Octokit instead.
*/

class OctokitFake {
  constructor(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  repos = {
    listForUser: ({ user }) => {
      return Promise.resolve({ data: this.data[user] });
    },
  };
}

test("get user main language", async () => {
  const data = {
    user: [{ language: "php" }],
    user2: [{ language: "javascript" }],
    user3: [{ language: "java" }],
  };
  const client = new OctokitFake(data);
  const username = "user";
  const mainLanguages = await getUserMainLanguage(username, client);
  expect(mainLanguages).toEqual("php");
});
