class Drunkard {
  constructor() {
    this.rounds = 1;
    this.winner = "";
  }
  run(cards1, cards2) {
    if (this.rounds > 100) return "Botva!";
    let card1 = cards1.shift();
    let card2 = cards2.shift();
    if (card1 > card2) {
      cards1.push(card1, card2);
    } else if (card2 > card1) {
      cards2.push(card2, card1);
    }
    if (!cards1.length && !cards2.length) return "Botva!";
    if (!cards2.length) {
      this.winner = `First player. Round: ${this.rounds}`;
      this.rounds = 1;
      return this.winner;
    }
    if (!cards1.length) {
      this.winner = `Second player. Round: ${this.rounds}`;
      this.rounds = 1;
      return this.winner;
    }
    this.rounds++;
    return this.run(cards1, cards2);
  }
}
