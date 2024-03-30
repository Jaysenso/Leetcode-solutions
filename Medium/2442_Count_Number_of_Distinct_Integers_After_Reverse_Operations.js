/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let res = [];

    for(let i = 0; i < nums.length; i++){
        let reverseNum = String(nums[i]).split("").reverse().join("");
        res.push(Number(reverseNum));
    }
    nums.push(...res);
    return new Set(nums).size;

    
};
