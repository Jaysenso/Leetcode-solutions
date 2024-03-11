/**
 * @param {number} n
 * @return {number}
 */

 /**
 Approach : for any arbitrary n & assuming n >= 2 : there is always a number 
 just smaller that will return a 1 after modulus. Example : 5 % 4 == 1, 4 % 3 == 1... and so on.
 Hence, we just need to address base case where n == 1 and return accordingly
  */
var distinctIntegers = function(n) {
    return n === 1 ? 1 : n - 1;
};
