/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

    const result = [];
    const firstWordArr = [...words[0]];

    for(const letter of firstWordArr){
        if(words.every(word => word.includes(letter))){
            result.push(letter);
            words = words.map(word => word.replace(letter, ""));
        }
    }
    return result;

    // let arr = [];
    // let res = [];
    // for(let i = 0; i < words.length; i++){
    //     let word = words[i].split("");
    //     let map = new Map();
    //     for(const char of word){
    //         map.set(char, (map.get(char) || 0) + 1);
    //     }
    //     arr.push(map);
    // }

    // for(const [char,count] of arr[0]){
    //     let min = Infinity;
    //     if(arr.every(map => map.has(char))){
    //         arr.forEach(map => min = Math.min(map.get(char), min));
    //         for(let i = 0; i < min; i++){
    //             res.push(char);
    //         }
    //     }
    // }
    // return res;

};
