/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    /**
    1st approach : using auxiliary arrays
    */
    function auxiliaryApporach(nums){
        let even = [];
        let odd = [];

        for(let i = 0; i < nums.length; i++){
            if(nums[i] % 2 === 0) even.push(nums[i]);
            else odd.push(nums[i]);
        }
        even.push(...odd);
        return even;
    }
        
    /**
    2nd approach : in-place (no auxiliary space) 
    */
    function inplaceApproach(nums){
        let i = 0; let j = nums.length - 1;
        while(i < j){
            //look for an odd number from the start of the array
            while(i < j && nums[i] % 2  == 0) i++;
            //look for an even number from the back of the array
            while(i < j && nums[j] % 2 === 1) j--;
            //we then perform a swap to bring the even no. forward and odd no. backward
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        return nums;
    }
    
    //return auxiliaryApproach(nums);
    return inplaceApproach(nums);
};
