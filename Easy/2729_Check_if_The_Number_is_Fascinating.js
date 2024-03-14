/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
/* My solution :
    let concatenate = n.toString() + (2 * n) + (3 * n);
    let arr = new Array(9).fill(0);
    
    for(let i = 0; i < concatenate.length; i++){
        arr[concatenate[i]-1]++;
    }

    for(let i = 0; i < arr.length; i++)
        if(arr[i] !== 1) return false; 

    return true;
*/

    //Community Solution :
    return "123456789" === (n.toString() + (2 * n) + (3 * n)).split('').sort().join('');

};
