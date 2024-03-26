/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

 /**
    operation 1 : allows you to freely order the string
    operation 2 : allows you to freely reassign the letters' frequencies
    how do we determine which characters to re-order/re-assign??

  */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    //freq1 & freq2 store the frequency of each letter in word1 and word2
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);
    for(let ch of word1){
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let ch of word2){
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    //if a character is present in one word and not the other, return false
    for(let i = 0; i < 26; i++){
        if((freq1[i] !== 0 && freq2[i] === 0) || freq1[i] === 0 && freq2[i] !== 0)
            return false;
    }

    //iterate through the sorted freq array and compare corresponding elements
    //if any coresponding elements are not equal, return false
    freq1.sort((a,b) => (a-b));
    freq2.sort((a,b) => (a-b));
    for(let i = 0; i < 26; i++){
        if(freq1[i] !== freq2[i]) return false;
    }
    return true;
};
