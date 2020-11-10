/* truncate()
truncate() function or method is usually used to shirnk some long text and add a separator at the end of it: 
truncate('long text', { length: 3 }); // lon...

Write Truncator class with constructor and truncate() method.
Method takes a string and some options:
- separator: symbol that is used at the end of the string
- length - max length of the string

Default options are preset using static options, BUT: it can be re-written at any step of class use: when class is first created and when method is used.
Mind how and where the options are changing and which values (default, constructor's or method's should be used at every time).
*/

export default class Truncater {
  // Defaults:
  static defaultOptions = {
    separator: "...",
    length: 200,
  };
  // Take default arguments and rewrite if there're argumented in constructor
  constructor(args = {}) {
    this.args = { ...Truncater.defaultOptions, ...args };
  }
  // Take default + constructor arguments and rewrite if there're argumented in the method
  truncate(text, args = {}) {
    let argums = { ...this.args, ...args };
    this.length = argums.length;
    this.separator = argums.separator;
    return text.length <= this.length
      ? text
      : `${text.substring(0, this.length)}${this.separator}`;
  }
}

/////// TESTS
const truncater = new Truncater();
console.log(truncater.truncate("one two")); // 'one two'
console.log(truncater.truncate("one two", { length: 6 })); // 'one tw...'

const truncater1 = new Truncater({ length: 6 });
console.log(truncater1.truncate("one two", { separator: "." })); // 'one tw.'
console.log(truncater1.truncate("one two", { length: "3" })); // 'one...'

const truncater3 = new Truncater({ length: 3 });
console.log(truncater3.truncate("one two")); // 'one...'
console.log(truncater3.truncate("one two", { separator: "!" })); // 'one!'
console.log(truncater3.truncate("one two")); // 'one...'
console.log(truncater3.truncate("one two", { length: 7 })); // 'one two'

const truncater4 = new Truncater({ separator: "__" });
console.log(truncater4.truncate("one two")); // 'one two'
console.log(truncater4.truncate("one two", { length: 3 })); // 'one__'
console.log(truncater4.truncate("one two", { length: 5, separator: "" })); // 'one t'
console.log(truncater4.truncate("one two")); // 'one two'
