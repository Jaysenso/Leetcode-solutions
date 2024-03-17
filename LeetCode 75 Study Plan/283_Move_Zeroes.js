/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /*
        Index j keep track of the non-zero element positios, maintaining the 
        relative order of the non-zero elements.
    */
    let j = 0; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[j] = nums[i];
            j++;
        }
    }

    /** 
        array.length - j == the no. of 0 occurences, hence we just fill up 
        the back of the arrayswith 0s.
    */
    while(j < nums.length){
        nums[j] = 0;
        j++;
    }
};
