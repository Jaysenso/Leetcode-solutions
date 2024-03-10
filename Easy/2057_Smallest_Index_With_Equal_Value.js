/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {

    /**Since we are traversing from index 0 to index nums.length - 1,
    we can just return the first instance of i % 10 == nums[i] <= guaranteed to be the smallest index*/
    for(let i = 0; i < nums.length; i++){
        if(i % 10 == nums[i]) return i;
    }
    return -1;

};
