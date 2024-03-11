/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let res = [];
    let i = 0;
    let j = 0;

    /*
    Approach : since we know both arrays are sorted in ascending order by id
    we can just use 2 pointers approach to traverse down and compare 
    if i < j we increment i then we compare and push it into res array
    if j < i we increment j then we compare and push it into res array
    */
    while(i < nums1.length && j < nums2.length){
        if(nums1[i][0] == nums2[j][0]){
            let sum = nums1[i][1] + nums2[j][1];
            res.push([nums1[i][0], sum]);
            i++;
            j++;
        }
        else if(nums1[i][0] < nums2[j][0]) {
            res.push(nums1[i]);
            i++;
        }
        else {
            res.push(nums2[j]);
            j++;
        }
    }

    /*
    in a scenario where one array is longer than the other (to handle the leftovers)
    we just check the respective index/pointer to see if it has reached its own array length
    if no - we will push the remaining elements into the res array
    */ 
    while(i < nums1.length){
        res.push(nums1[i]);
        i++;
    }

    while(j < nums2.length){
        res.push(nums2[j]);
        j++;
    }
    
    return res; 
};
