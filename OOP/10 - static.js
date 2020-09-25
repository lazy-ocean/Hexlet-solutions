/* static.js
Time class takes a number of hours and minutes (h, m) and can return it as a string 'h:m"
Add to Time class static method fromString() that takes a string 'hours:minutes' and returns new Time object on the base of it. */
export default class Time {
  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }

  /// STATIC METHOD
  static fromString(time) {
    this.hours = time.split(":")[0];
    this.minutes = time.split(":")[1];
    return new Time(this.hours, this.minutes);
  }
}

/////// TESTS
const time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'

const time1 = Time.fromString("10:23");
// автоматически вызывается метод toString()
console.log(`The time is ${time1}`); // 'The time is 10:23'
