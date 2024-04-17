/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const wordArr = text.split(" ");
    const ans = [];

    for(let i = 0; i < wordArr.length; i++){
        if(wordArr[i] === first && wordArr[i+1] === second && wordArr[i+2]){
            ans.push(wordArr[i+2]);
        }
    }
    return ans;
};
