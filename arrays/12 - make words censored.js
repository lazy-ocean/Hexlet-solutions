/* makeCensored.js
Write and export by default makeCensored() function that takes a string and some words that need to be censored and then returns a string with those words replaced with "$#%!".

For the purpose of this task, replace only the exact matches: with 'let' as censored word, 'let!' will not be replaced. 
*/

const makeCensored = (str, censoredWords) => {
    const separator = ' ';
    const words = str.split(separator);
    const censoredText = [];

    for (const word of words) {
        (censoredWords.includes(word)) ? censoredText.push('$#%!'): censoredText.push(word);
    }
    return censoredText.join(separator);
};

export default makeCensored;

const sentence1 = 'When you play the game of thrones, you win or you die';
console.log(makeCensored(sentence1, ['die'])); // 'When you play the game of thrones, you win or you $#%!'

const sentence2 = 'chicken chicken? chicken! chicken';
console.log(makeCensored(sentence2, ['chicken'])); // '$#%! chicken? chicken! $#%!'

const sentence3 = 'chicken chicken? chicken! ? chicken';
console.log(makeCensored(sentence3, ['?', 'chicken'])); // '$#%! chicken? chicken! $#%! $#%!'