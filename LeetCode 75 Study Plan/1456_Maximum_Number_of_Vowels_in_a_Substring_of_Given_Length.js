/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/**
    Approach : sliding window => just check the character at the start of the window
    and the character after the end of the window. We just update count according 
    to the conditions defined in (line 24 & 25) and also keep track of the maxCount

    Logic Intuition : imagine the window like a bus, if a vowel wants to board the bus,
    we will increment the Count. If a vowel wants to alight the bus, we will decrement the count.
    MaxCount is used to keep track of the maximum count of vowels that was on the bus.

*/

var maxVowels = function(s, k) {
    let arr = s.split("");
    let count = 0;

    for(let i = 0; i < k; i++){
        if(isVowels(arr[i]))
            count++;
    }
    //i - k = start of window ,  k = end of window
    let maxCount = count;
    for(let i = k; i < arr.length; i++){
        if(isVowels(arr[i])) count++;
        if(isVowels(arr[i - k])) count--;
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};

function isVowels(a){
    const vowels = "aeiou"
    return vowels.includes(a);
} 
