/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) { 
    let vowels = 'aeiouAEIOU';
    let arr = s.split("");
    let vowelChar = [];
    let vowelIndex = [];
    /**
        s = "hello"
        vowelChar = [e,o]
        vowelIndex = [1,4]
     */
    arr.forEach((char,index)=>{
        if(vowels.includes(char)){
            vowelChar.push(char);
            vowelIndex.push(index);
        }
    });

    //vowelChar = [o,e]        
    vowelChar.reverse();

    vowelIndex.forEach((pos,index) =>{
        arr[pos] = vowelChar[index];
    })

    return arr.join("");
};
