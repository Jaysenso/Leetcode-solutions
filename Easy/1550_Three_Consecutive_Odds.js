/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for(let num of arr) {
        if(num % 2 !== 0){
            count ++;
            if(count >= 3) return true;
        }else {
            count = 0;
        }
    }
    return false;

    // let left = 0;
    // let right = 0;
    // let count;
    
    // while(left < arr.length){
    //     if(arr[left] % 2 !== 0) {
    //         count = 0;
    //         right = left;
    
    //         while(arr[right] % 2 !== 0 && arr[right] !== undefined){
    //             right++;
    //             count++;
    //             if(count >= 3) return true;
    //         }
    //         left = right;
    //     }
    //     left++;
    // }
    // return false;
};
