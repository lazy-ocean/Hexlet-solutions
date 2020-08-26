/*
DNA and RNA are nucleotide sequences.

DNA's 4 nucleotides are adenine (A), cytosine (C), guanine (G) and thymine (T).RNA's 4 nucleotides are adenine (A), cytosine (C), guanine (G) and uracil (U).

RNA sequence is made by consequentially transcripting every nucleotide:
G -> C
C -> G
T -> A
A -> U

dnaToRna.js
Write and export by default dnaToRna() function that takes DNA as an argument and translates it to RNA.

If there're no nucleotides in the string (is empty), return empty string. If in the DNA there's an unknown nucleotide (not A, C, G or T), return null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // nul
*/


const dnaToRna = (str) => {
    let rna = '',
        length = str.length;
    for (let i = 0; i < length; i++) {
        const symbol = str[i];
        switch (symbol) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                return null;
        }
    }
    return rna;
};

export default dnaToRna;

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null