/* adapter.js
Write PasswordGeneratorAdapter adapter class that is used as a additional structure for generate-password library - https://github.com/brendanashworth/generate-password.
You have preset PasswordBuilder class that uses new PasswordGeneratorAdapter as an argument and then returns new password using buildPassword() method. buildPassword() takes length and some options as agruments that are further passed to the generatePassword() method of your adapter class. generatePassword() parses options, uses library and returns adapted password.
*/
import generator from "generate-password";

//////////// PRESET PASSWORD BUILDER
class PasswordBuilder {
  constructor(passwordGenerator) {
    this.passwordGenerator = passwordGenerator;
  }

  buildPassword(length = 8, options = ["numbers", "symbols"]) {
    const password = this.passwordGenerator.generatePassword(length, options);
    const digest = crypto.createHash("sha1").update(password).digest("hex");

    return { password, digest };
  }
}

//////////////// ADAPTER
class PasswordGeneratorAdapter {
  generatePassword(length, options) {
    let params = {
      uppercase: false,
      numbers: false,
      symbols: false,
      length: length,
    };
    if (options.length) options.forEach((opt) => (params[opt] = true));
    return generator.generate(params);
  }
}
