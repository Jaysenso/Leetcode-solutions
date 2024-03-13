/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let sorted = [...nums].sort((a,b) => a-b);
    let arr = sorted.splice(nums.length - k);
    let res = [];
    /** 
        nums = [-1,-2,3,4] k = 3
        arr = [-1,3,4]

        Approach : eventhough arr contains our answer, it is not in order
        hence, we have to check the answer array (arr) against the untouched 'nums' array
        to re-order its sequence.
    */
    for(let i = 0; i < nums.length; i++){
        if (arr.includes(nums[i])){
            res.push(nums[i]);
            arr.splice(arr.indexOf(nums[i]), 1);
        }       
    }
    return res;
};
