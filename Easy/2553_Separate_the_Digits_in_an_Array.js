/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
/* Method 1 (not the worst but method 2 looks cleaner)
    let res = "";
    for(let i = 0; i < nums.length; i++){
        res += nums[i];
    }
    Method 2 
    1. convert each elements to a string, split it and re-map it into an array
    2. we used flatMap here so that the returned array would not be array of arrays
*/
    return nums.flatMap(n => n.toString().split('').map(Number));
};
