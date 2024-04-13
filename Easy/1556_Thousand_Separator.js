/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {

    if(n < 1000) return n.toString();

    let num = String(n).split("");
    let count = 0;
    let result = "";
    for(let i = num.length - 1; i >= 0; i--) {
        count++;
        result = num[i] + result;
        if(count%3 === 0 && i !== 0){
            result = "." + result;
        }
    }
    return result;

};
