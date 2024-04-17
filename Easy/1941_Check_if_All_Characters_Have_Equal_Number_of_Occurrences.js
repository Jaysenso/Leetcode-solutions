/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    
    let occur = new Map();
    let chars = s.split("");
    chars.map((char) => occur.set(char, (occur.get(char) || 0) + 1));
    //stores all the values in a new Set
    return new Set(occur.values()).size === 1;
    //if ther exists 2 different number of occurences values, set size > 1
};
