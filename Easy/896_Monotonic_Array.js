/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length < 2) return true;
    
    let direction = 0; // 0 means unknown, 1 means increasing, -1 means decreasing

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            if(direction === 0) direction = 1;
            else if(direction === -1) return false;
        }
        else if(nums[i] < nums[i-1]){
            if(direction === 0) direction = -1;
            else if(direction === 1) return false;
        }
    }
    return true;


    /**
        first solution : brute force approach 
     */
    let monoFlag = false;
    let isIncreasing = false;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i+1]) {
            if(nums[i] < nums[i+1] && monoFlag === false){
                isIncreasing = true;
                monoFlag = true;
            }
            else if(nums[i] > nums[i+1] && monoFlag === false){
                isIncreasing = false;
                monoFlag = true;
            }

            if(isIncreasing && monoFlag === true) {
                if(nums[i] > nums[i+1])
                    return false;
            }
            else if(!isIncreasing && monoFlag === true){
                if(nums[i] < nums[i+1])
                    return false;
            }
        }
    }
    return true;
};
