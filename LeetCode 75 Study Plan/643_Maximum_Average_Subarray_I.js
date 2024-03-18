/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    /**
        Approach : sliding window => since k (the size of our sliding window is constant),
        calculating max average is the same as calculating max sum of subarray.
        First compute the sum of first k elements, next, as we traverse the remaining elements, 
        we recompute the sum and do a comparison check to find the maximum sum of any 
        subarray that exists in nums. Our return value is simply just maxSum/k == maxAvg.
     */
    let sum = 0;
    let i;
    for(i = 0; i < k; i++){
        sum +=  nums[i];
    }
    
    let maxSum = sum;

    for(let x = i; x < nums.length; x++){
        sum = sum - nums[x-k] + nums[x];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum/k;
};
