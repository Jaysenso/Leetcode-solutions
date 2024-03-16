/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // const word = s.trim();
    // let arr = word.split("");
    // let wordArray = [];
    // let temp = "";

    // for(let i = 0; i <= arr.length; i++){
    //     if(arr[i] === " " || i  === arr.length){
    //         if(temp != "")
    //             wordArray.push(temp);
    //         temp = "";
    //         continue;
    //     }
    //     temp += arr[i];
    // }
    // return wordArray.reverse().join(" ")

    s = s.split(" ");
    let res = [];

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] != "") res.push(s[i]);
    }
    return res.join(" ");
};
