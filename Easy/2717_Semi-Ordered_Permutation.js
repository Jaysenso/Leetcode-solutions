/**
 * @param {number[]} nums
 * @return {number}
 */

 /**

 Approach : sort array ? identify whats the value of n nums[nums.length - 1]

  */
var semiOrderedPermutation = function(nums) {
    sorted = [...nums];
    //we make a copy of nums and sort it to know whats the value of n
    sorted = sorted.sort((a,b) => a-b); 
    let n = sorted[nums.length - 1]; 
    //the number of operations to move n to the back ==:
    let n_operations = nums.length - nums.indexOf(n) - 1;

    /*IMPORTANT : we have to physically move n to the correct position before calculating
    the number of operations to move 1 to the front, since both events are not 
    independent from each other
    */
    nums.splice(nums.indexOf(n),1);
    nums.push(n);
    return n_operations + nums.indexOf(1);

};





