/* normalize.js
Write a normalize() function that takes an array with a list of cities with their countries, normalize its names, sorts and returns in groups by contries without duplicates.
See tests for examples.
*/
const normalize = (countries) =>
  countries
    .map(({ name, country }) => {
      name = name.toLowerCase().trim();
      country = country.toLowerCase().trim();
      return { name, country };
    })
    .sort((a, b) => a.country.localeCompare(b.country))
    .reduce((acc, { name, country }) => {
      if (acc.hasOwnProperty(country)) {
        if (acc[country].indexOf(name) < 0) {
          acc[country].push(name);
          acc[country].sort();
        }
      } else {
        acc[country] = [name];
      }
      return acc;
    }, {});

//////// TESTS
const test1 = [
  { name: "Miami", country: "usa" },
  { name: "samarA", country: "  ruSsiA" },
  { name: "Moscow ", country: " Russia" },
];

normalize(test1);
/*
 {
   russia: [
     'moscow',
     'samara',
   ],
   usa: [
     'miami',
   ],
 }
*/

const test2 = [
  { name: "istambul", country: "turkey" },
  { name: "Moscow ", country: " Russia" },
  { name: "iStambul", country: "tUrkey" },
  { name: "antalia", country: "turkeY " },
  { name: "samarA", country: "  ruSsiA" },
  { name: "Miami", country: "usa" },
];

normalize(test2);
/*
{
  russia: [
      'moscow',
      'samara',
    ],
  turkey: [
      'antalia',
      'istambul',
    ],
  usa: [
      'miami',
    ],
  };
*/

const test3 = [
  {
    name: "pariS ",
    country: " france",
  },
  {
    name: " madrid",
    country: " sPain",
  },
  {
    name: "valencia",
    country: "spain",
  },
  {
    name: "marcel",
    country: "france",
  },
  {
    name: " madrid",
    country: " sPain",
  },
];

normalize(test3);
/*
{
  france: [
      'marcel',
      'paris',
    ],
  spain: [
      'madrid',
      'valencia',
    ],
  };
*/
