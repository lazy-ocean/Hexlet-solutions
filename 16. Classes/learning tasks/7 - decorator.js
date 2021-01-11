/* Sanitizer.js
Write Sanitizer and SanitizerStripTagsDecorator classes so that it has sanitize() method and it could take an html tag and return its only innerHTML text stripped of possible additional spaces at the end and the beginning.
*/
import cheerio from "cheerio";

class Sanitizer {
  sanitize(text) {
    return text.trim();
  }
}

const stripTags = (tagString) => {
  const $ = cheerio.load(tagString);
  return $.text();
};

class SanitizerStripTagsDecorator extends Sanitizer {
  sanitize(text) {
    let txt = stripTags(text);
    return super.sanitize(txt);
  }
}

//////// TESTS
const baseSanitizer = new Sanitizer();
sanitizer = new SanitizerStripTagsDecorator(baseSanitizer);
sanitizer.sanitize("text   "); // 'text'
sanitizer.sanitize(" boom "); // 'boom'
sanitizer.sanitize("<p>text<p>"); // 'text'
sanitizer.sanitize("  <hr>   another text "); // 'another text'
