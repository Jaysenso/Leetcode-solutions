/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = [];
    let sumRight = [];
    let leftSum = 0;
    let rightSum = 0;

    //To populate leftPrefixSum & rightPrefixSum 
    for(let i = 0; i < nums.length; i++){
        sumLeft.push(leftSum+=nums[i]);
        sumRight.unshift(rightSum+=nums[nums.length - 1 - i]);
    }

    /*
    Since we're looking for pivot index, we have to subtract pivot index element from both sum 
    index elements when doing comparison 
    */   
    for(let i = 0; i < nums.length; i++){
        if((sumLeft[i] - nums[i]) === (sumRight[i] - nums[i])) return i;
    }
    return -1;
};
