/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let map = new Map();
  
    nums.forEach(v => map.set(v));
    nums.sort((a,b) => a-b);
    for(const num of nums){
        if(map.has(-num)) return -num;
    }
    return -1;

};
