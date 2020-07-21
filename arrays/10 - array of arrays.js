/* superseries.js
The Summit Series, or Super Series, was an eight-game series of ice hockey between the Soviet Union and Canada held two times in 1972-1974.
Your function will return the winner of SuperSeries.

Write and export by default getSuperSeriesWinner() function that returns the winner for argumented SuperSeries series scores. Every year (=array) consists of 8 game scores: e.g. [3, 2] - 3 goals for Canada, 2 for the USSR. The winner is the team that scored more goals.
Return the team that won more games than the opponent.
If the number of won games is even, return null.
*/

const getSuperSeriesWinner = (arr) => {
    let result = 0;
    for (const score of arr) {
        const game = score[0] - score[1];
        if (game < 0) result += 1;
        if (game > 0) result -= 1;
    }
    return (result > 0) ? 'ussr' : (result < 0) ? 'canada' : null;
};

export default getSuperSeriesWinner;

// super series 1
const scores1 = [
    [3, 7],
    [4, 1],
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
];
console.log(getSuperSeriesWinner(scores1)); // 'canada'

// super series 2
const scores2 = [
    [3, 3],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 3],
    [2, 5],
    [4, 4],
    [2, 3],
];
console.log(getSuperSeriesWinner(scores2)); //'ussr'

//super series 3
const scores3 = [
    [3, 2],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 2],
    [2, 4],
    [4, 2],
    [2, 3],
];
console.log(getSuperSeriesWinner(scores3)); // null