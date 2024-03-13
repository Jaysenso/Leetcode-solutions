/**
 * @param {number[]} arr
 * @return {number[][]}
 */

 /**

Sort the array in ascending (is easier to iterate through & compute abs. difference and the resultant array 
has to be in ascending order anyways)
Iterate through arr, let difference = MAX_VALUE and compute the difference between current element and the element 
after current element. We then check if the computed difference is less than minDiff variable : 
if yes => update minDiff with the computed difference and reinitialize the result array and push these 2 elements
if the differences are equal => we dont reinitialize, but just append it into the res array
if no => we dont do anything

*/
var minimumAbsDifference = function(arr) {
    let minDiff = Number.MAX_VALUE;
    let res = [];
    arr.sort((a,b) => a - b);

    for(let i = 0; i < arr.length - 1; i++){

        let diff = arr[i+1] - arr[i];

        if(minDiff > diff) {
            minDiff = diff;
            res = [[arr[i], arr[i+1]]];
        }else if(minDiff === diff)
            res.push([arr[i],arr[i + 1]]);
    }   
        
    return res;
};
