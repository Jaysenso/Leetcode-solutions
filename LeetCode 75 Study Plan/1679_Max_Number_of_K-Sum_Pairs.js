/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 /**
    Approach : Max number and pairs => can be approached with 2 pointers 
    sort the array and start from the front(i) and back(j), compute the sum
    if sum < k, we advance i. if sum > k we advance j else just choose one to advance
    Logic intuition is similar to 11. Container with Most Water
  */

var maxOperations = function(nums, k) {

    let arr = [...nums];
    let i = 0;
    let j = arr.length - 1;
    let maxSum = -Infinity;
    let operationCount = 0;

    arr.sort((a,b) => a-b);

    while(i < j){
        let sum = arr[i] + arr[j];
        if(sum === k){
            operationCount++;
            i++;
            j--;
        }
        else if(sum > k)
            j--;
        else 
            i++;
    }
    return operationCount;

};
