/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    /**
        Approach : O(N) linear approach => the logic lies in the firstNumber & secondNumber. By keep tracking of all lowest possible values,
        we can increase our chances of locating a triplet subsequence in the array. when we update secondNumber, we know there was a number before it 
        (which was smaller, stored in firstNumber) and now we are looking for a number greater than secondNumber to satisfy the increasing triplet condition.
        The Brute force approach exhausts all possible combinations to find the triplet subsequence. It will work only if the nums.lengh is small since it has a
        O(N^3) time complexity
     */
    let firstNumber = Number.MAX_VALUE;
    let secondNumber = Number.MAX_VALUE;
    
    for(let currentNumber of nums){
        console.log(firstNumber,secondNumber,currentNumber);
        if(currentNumber > firstNumber && currentNumber > secondNumber){
            return true;
        }
        if(currentNumber > firstNumber){
            secondNumber = currentNumber;
        }
        else{
            firstNumber = currentNumber;
        }
    }
    return false;

    /** Brute-force approach : similar to the one above but with O(N^3) complexity
    
    for(let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] > first){
                let second = nums[j];
                for(let k = j + 1; k < nums.length; k++){
                    if(nums[k] > second){
                        return true;
                    }
                }
            }
        }
    }
    return false;
    */ 

};
