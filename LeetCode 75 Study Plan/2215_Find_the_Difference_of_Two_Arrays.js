/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    /**
        Both approaches are similar, we just delete to find the difference in both set
     */
    let ans1 = new Set(nums1);
    nums2.forEach(v => {ans1.delete(v)});
    let ans2 = new Set(nums2);
    nums1.forEach(v => {ans2.delete(v)});

    return [[...ans1],[...ans2]];

//     let i = 0;
//     let j = 0;
//     let set1 = new Set();
//     let set2 = new Set();

//     while(i < nums1.length || j < nums2.length){
//         if(i < nums1.length){
//             set1.add(nums1[i++]);
//         }
//         if(j < nums2.length){
//             set2.add(nums2[j++]);
//         }
//     }
//     return [[...isDifference(set1, set2)],[...isDifference(set2,set1)]];
// };


// function isDifference(setA, setB){
//     let _difference = new Set(setA);
//     for(const elem of setB){
//         _difference.delete(elem);
//     }
//     return _difference;
}
