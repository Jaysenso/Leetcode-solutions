/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let l = 0;
    let r = 0; 
    let ans = 0;
    let max = Math.max(...nums);
    const n = nums.length;
    
    while(r < n){
        //if nums[r] === maximum element, decrement k
        k -= nums[r] === max ? 1 : 0;
        r++;
        //if k === 0, we shift the start of the window and check if the leaving element
        //is a maximum value, if it is, increment k else just keep shifting till we find max
        while(k === 0){
            k += nums[l] == max ? 1 : 0;
            l++;
        }
        //the answer is equal to the count of numbers to the left of the window
        ans += l;
    }
    return ans;

};
