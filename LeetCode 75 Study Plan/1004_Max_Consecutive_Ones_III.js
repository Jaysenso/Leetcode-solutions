/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 /**
    Logic intuition :
      Whenever a zero is encountered (nums[j] === 0), the variable k is decremented. 
      This decrement operation tracks how many 0s can still be included in the window 
      without exceeding the maximum allowed (k).
  
      If the number of zeros in the window exceeds k (k < 0), the window needs to be shrunk 
      from the left. If the leftmost element being removed from the window is a zero 
      (nums[i] === 0), k is incremented because the window is now allowed one more zero than before.
  
      (j - i) effectively represents the length of subarray that meets the criteria 
      (at most 'k' 0s). We are relying on the fact that the window can only grow or shift to
      the right without shrinking in length because we only shrink the window when necessary 
      to make space for more 1s or to comply with the 'k' constraint. 
  
      The k variable acts as a 'budget' for how many 0s can be included, and adjusting this 
      'budget' based on the window's content allows for efficient maximization of the window size.
  */

var longestOnes = function(nums, k) {
    let i = 0;
    let j = 0;
  
    while(j < nums.length){
        if(nums[j] === 0) k--;
        if(k < 0) {
            if(nums[i] === 0){
                k++;
            }
            i++;
        }
        j++;
    }
    return j - i;
};
