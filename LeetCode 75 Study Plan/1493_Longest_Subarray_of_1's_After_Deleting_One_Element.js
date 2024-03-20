/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
    Logic Intuition : zeroCount is our "budget" / the maximum count of zeros we can have in the window is
    1. As long as there exists more than 1 zeros, we will shift the start of our window to the next element,
    at every iteration ( where zeroCount <= 1, we will calculate the length and update Maxlen accordingly)
  */
var longestSubarray = function(nums) {
    
    let zeroCount = 0;
    let maxLen = -Infinity;
    let leftPtr = 0;
    for(let rightPtr = 0; rightPtr < nums.length; rightPtr++){
        if(nums[rightPtr] === 0){
            zeroCount++;
        }

        if(zeroCount > 1){
            if(nums[leftPtr] === 0) {
                zeroCount--;
            }
            leftPtr++;
        }
        
        if(zeroCount <= 1){
            maxLen = Math.max(maxLen, rightPtr - leftPtr);
        }
    }
    return maxLen;

};
