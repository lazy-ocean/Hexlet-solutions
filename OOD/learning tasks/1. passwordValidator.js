/* passwordValidator.js
Write a class PasswordValidator that takes two arguments:
--- minLength (8 by default) - min length of a password
--- containNumbers (true by default) - if the password must contain at least one digit.
Class has validate() method that checks if the argumented password meets all the (argumented or not) requirements of a class and returns an object with errors.
Possible errors:
minLength: 'too small'
containNumbers: 'should contain at least one number',
*/
class PasswordValidator {
  constructor(args = {}) {
    const def = {
      minLength: 8,
      containNumbers: true,
    };
    this.args = { ...def, ...args };
    this.minLength = this.args.minLength;
    this.containNumbers = this.args.containNumbers;
  }
  validate(password) {
    let errors = {};
    if (password.length < this.minLength) errors.minLength = "too small";
    let nums = password.match(/\d/);
    if (this.containNumbers && !nums)
      errors.containNumbers = "should contain at least one number";
    return errors;
  }
}

///// TESTS
const validator = new PasswordValidator({ minLength: 0, containNumbers: null });
console.log(validator.validate("")); // => {}

const validator = new PasswordValidator({ containNumberz: null });
console.log(validator.validate("qwert5yui")); // => {}
console.log(validator.validate("0werty")); // => { minLength: 'too small' }

const validator = new PasswordValidator({ containNumbers: false });
console.log(validator.validate("qwertyui")); // => {}
console.log(validator.validate("qwerty")); // => { minLength: 'too small' }
console.log(validator.validate("another-password")); // => {}

const validator = new PasswordValidator();
console.log(validator.validate("qwertya3sdf")); // => {}
console.log(validator.validate("qwerty")); // => { minLength: 'too small', containNumbers: 'should contain at least one number' }
console.log(validator.validate("q23ty")); // => { minLength: 'too small' }

const validator = new PasswordValidator({
  containNumbers: true,
  minLength: 10,
});
console.log(validator.validate("qwert3yag")); // => { minLength: 'too small' }
console.log(validator.validate("qwerty")); // => { minLength: 'too small', containNumbers: 'should contain at least one number' }
console.log(validator.validate("q2wer3ty4i")); // => {}
