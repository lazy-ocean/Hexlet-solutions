/* drunkard.js
Drunkard is a card game in which the winner is the player who got all the cards. 
Rules:
--- Two players with equal numbers of cards 
--- Players couldn't see their cards, just the stack of it backs up.
--- At the same time players take out and show the first cards of their stacks: the player whose card is "bigger", takes both and puts them at the end of her stack (own card first).
--- If one player has got no more cards, the opponent wins.
--- If the cards are equal, they're thrown out of the game.
--- If both players has no more cards, it is a draw, 'botwa'.
--- Game could be played a long-long time so mind the rounds count.

Write a Drunkard class that has run() method for the game: it takes two arrays of cards for both players and runs the game until the draw, one player won or until 100 rounds reached.
When one of the players wins, return "First/Second player. Round: <#>"
If it is the draw or 100th round has passed by, return "Botwa!"
*/

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
