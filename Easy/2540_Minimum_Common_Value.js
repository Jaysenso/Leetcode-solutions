/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    //we use set Map to record down the integers appeared in nums1
    let occurenceMap = new Map();

    for(let i = 0; i < nums1.length; i++){
        occurenceMap.set(nums1[i],true);
    }

    for(let i = 0; i < nums2.length; i++){
        if(occurenceMap.has(nums2[i])) 
            return nums2[i];
    }
    
    return -1;
};
