/**
 * @param {number} n
 * @return {number}
 */

var alternateDigitSum = function(n) {
    //we stringify the integer and split it into individual digits
    const digits = n.toString().split("");
    let sum = 0;

    //even index : positive - odd index : negative 
    for(let i = 0; i < digits.length; i++)
        sum += Number(digits[i]) * (i % 2 === 0 ? 1 : -1);
    
    return sum;
};
