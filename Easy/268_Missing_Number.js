/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let arr = new Array(n+1).fill(-1);

    for(let i = 0; i < nums.length; i++){
        arr[nums[i]] = nums[i];
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === -1) return i;
    }
};
