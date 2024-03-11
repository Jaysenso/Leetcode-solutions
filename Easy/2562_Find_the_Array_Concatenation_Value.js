/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let concatSum = 0;

    while(nums.length > 1) {
        concatSum += Number(nums[0].toString() + nums[nums.length-1].toString());
        nums.shift();
        nums.pop();
    }

    if(nums.length === 1){
        concatSum += nums[0];
    }
    return concatSum;
};
