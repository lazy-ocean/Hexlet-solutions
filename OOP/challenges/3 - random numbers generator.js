/* Random.js
Write and export by default Random class that contains:
--- generator, that has argumented seed, the starting number
--- getNext() method, returning next random number
--- reset() method that switches generator to the start seed number.
Use linear congruential generator formula to make your generator.
*/
class Random {
  constructor(seed) {
    this.seed = seed;
    this.firstSeed = seed;
  }
  getNext() {
    const a = 106 + this.firstSeed;
    const c = 1283 + this.firstSeed;
    const m = 6075 + this.firstSeed;

    let random = (a * this.seed + c) % m;
    this.seed = random;
    return random;
  }
  reset() {
    this.seed = this.firstSeed;
  }
}

////// TESTS
const seq = new Random(100);
const result1 = seq.getNext();
const result2 = seq.getNext();
console.log(result1, result2); // 3458, 3606

seq.reset();

const result21 = seq.getNext();
const result22 = seq.getNext();
console.log(result21, result22); // 3458, 3606
