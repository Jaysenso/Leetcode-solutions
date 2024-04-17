/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let index = sentence.split(" ").findIndex(word => word.startsWith(searchWord));
    return 0 <= index ? index + 1 : index;
    
};
