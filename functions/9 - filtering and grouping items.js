/* getFreeDomainsCount.js
Write and export by default getFreeDomainsCount() function that takes a list of emails and returns an object with free domains and the number of the emails on this domains from the list.
*/
const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com"];

const getFreeDomainsCount = (emails) =>
  emails
    .filter((email) => {
      const free = freeEmailDomains.includes(email.split("@")[1]);
      return free;
    })

    .reduce((acc, free) => {
      let domain = free.split("@")[1];
      acc.hasOwnProperty(domain) ? (acc[domain] += 1) : (acc[domain] = 1);
      return acc;
    }, {});

export default getFreeDomainsCount;

//////// TEST
const emails = [
  "info@gmail.com",
  "info@yandex.ru",
  "info@hotmail.com",
  "mk@host.com",
  "support@hexlet.io",
  "key@yandex.ru",
  "sergey@gmail.com",
  "vovan@gmail.com",
  "vovan@hotmail.com",
];

console.log(getFreeDomainsCount(emails));
/*
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
*/
