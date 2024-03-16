/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    /**
    Approach : to guarantee O(N) time complexity, we just refrain from using 
    double-for loop to compute the prefix and postfix products
    NOTE: prefixProduct[i] == the product sum of every elements before i not inclusive of i
    similarly, postfixProduct[i] == the product sum of every elements after i not inclusive of i
    prefixProduct = [1,1,2,6] 
    postfixProduct = [24,12,4,1]
    result[i] = prefixProduct[i] * postfixProduct[i];
    result = [24,12,8,6]
    the produced result array is the product of array except self 
     */

    let prefixProduct = new Array(nums.length).fill(1);
    let postfixProduct = new Array(nums.length).fill(1);
    let res = [];

    //prefixProduct
    for(let i = 1; i < nums.length; i++){
        prefixProduct[i] = prefixProduct[i-1] * nums[i-1];
    }
    //postfixProduct
    for(let i = nums.length - 2; i >= 0; i--){
        postfixProduct[i] = postfixProduct[i+1] * nums[i+1];
    }
    //resultArray
    for(let i = 0; i < nums.length; i++){
        res[i] = prefixProduct[i] * postfixProduct[i];
    }
    return res;

};
