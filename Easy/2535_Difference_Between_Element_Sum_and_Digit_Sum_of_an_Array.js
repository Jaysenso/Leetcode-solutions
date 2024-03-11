/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++){
        elementSum += nums[i]; //sum of all the elements in nums
        digitSum += getDigitSum(nums[i]); //sum of all the digits that appear in nums
    }
    return Math.abs(elementSum - digitSum);
};

function getDigitSum(x) {
    let digitSum = 0;
    while (x !== 0) {
        digitSum += x % 10;
        x = Math.floor(x/10); 
    }
    return digitSum;
}
