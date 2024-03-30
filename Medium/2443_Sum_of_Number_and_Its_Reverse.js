/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    for(let i = 0; i <= num; i++) {
        if(i + reverse(i) === num) return true;
    }    
    return false;
};

function reverse(num){
    return Number(String(num).split("").reverse().join(""));
}
