/* buildRange.js
Write and export by default buildRange() function:
- it takes beginDate, endDate and array of dates between them (not all, but some)
- it should return a formatted strict array of dates between start and end with value, if it was argumented with dates. If there're no such value, set it as 0;
Example:
const dates = [
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
];
const beginDate = '2018-08-01';
const endDate = '2018-08-04';

buildRange(dates, beginDate, endDate);
[
  { value: 0, date: '01.08.2018' },
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
  { value: 0, date: '04.08.2018' },
]
*/
let eachDayOfInterval = require("date-fns/eachDayOfInterval");
let format = require("date-fns/format");

function buildRange(dates, beginDate, endDate) {
  let start = format(new Date(beginDate), "yyyy/MM/dd");
  let finish = format(new Date(endDate), "yyyy/MM/dd");
  let range = eachDayOfInterval({
    start: new Date(start),
    end: new Date(finish),
  }).map((d) => {
    return { value: 0, date: format(d, "dd.MM.yyyy") };
  });
  dates.forEach((item) => {
    range.forEach((rng) => {
      if (rng.date === item.date) rng.value = item.value;
    });
  });
  return range;
}

const dates = [
  { value: 14, date: "02.08.2018" },
  { value: 43, date: "03.08.2018" },
];
const beginDate = "2018-08-01";
const endDate = "2018-08-04";

console.log(buildRange(dates, beginDate, endDate));
module.exports = buildRange;
