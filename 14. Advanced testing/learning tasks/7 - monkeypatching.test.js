/* monkeypatching.test.js
Write tests for the function that knocks to the github with the name of the user and returns the language she has most repos in. It uses github api, but you should avoid it in tests and use monkeypatching with nock library.
*/
import nock from "nock";

test("getUserMainLanguage", async () => {
  const data = {
    user: [{ language: "php" }],
    user2: [{ language: "javascript" }],
    user3: [{ language: "java" }],
  };
  let user = "user";
  nock(/api\.github\.com/)
    .get(`/users/${user}/repos`)
    .reply(200, data);
  const languages = await getUserMainLanguage(user);
  expect(languages).toEqual("php");
});
