/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    /** Digital Root - If number is divisible by 9 completely then digital root(ans) is 9,
    else the digital root is remainder obtained.  */

    if(num === 0) return 0;
    return 1 + (num - 1) % 9; //num - 1 is to avoid (k*9) % 9 = 0 or
                              //number that is divisible by 9

    /** Brute force Approach - looping and repeatedly summing */

    // let x = String(num).split("");
    // while(true){
    //     if(x.length === 1) return Number(x.join());
    //     let sum = 0;
    //     for(let i = 0; i < x.length; i++){
    //         sum+=Number(x[i]);
    //     }
    //     x= [];
    //     x= String(sum).split("");
    // }
};
