/* SquaresGenerator.js
Write and export by default two classes:
--- Square - for building squares. Square has side and getSide() method;
--- SquaresGenerator - for returning several squares of equal size: it takes the number of squares and the length of the side and returns an array with squares;
*/
/////// Square:
export default class Square {
  constructor(side) {
    this.side = side;
  }
  getSide() {
    return this.side;
  }
}

/////// Squares generator:
export default class SquaresGenerator {
  static generate(side, count = 5) {
    let res = [];
    let n = 0;
    while (n < count) {
      res.push(new Square(side));
      n++;
    }
    return res;
  }
}
