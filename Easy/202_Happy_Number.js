/**
 * @param {number} n
 * @return {boolean}
 */

/**
Approach : 
* when a number isn't a happy Number, the sum of squares of the number will form a cyclic
* pattern (the sum will keep repeating itself afterawhile) hence, this can be used as a
* end condition to prevent it from going into an infinite loop 
* How? - [we append the sum of squares into an array(sumRecord) and check whether the new 
* sum exists in the sumRecord, if its exists => we terminate and return false]
*/

var isHappy = function(n) {
    let sumRecord = new Set();
    let sum;
    let happyNum = n.toString().split('');

    while(sum != 1) {
        sum = 0;
        for(let i = 0; i < happyNum.length; i++) {
            sum += happyNum[i] ** 2;
        }

        if(sumRecord.has(sum)) return false;

        sumRecord.add(sum);
        happyNum = sum.toString().split('');
    }
    
    return true;

};
