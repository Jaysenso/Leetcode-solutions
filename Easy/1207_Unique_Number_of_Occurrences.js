/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occur = new Map();
    let set = new Set();

    arr.map(num => occur.set(num, (occur.get(num) || 0) + 1));
    
    for(const [key,value] of occur){
        if(set.has(value)) return false;
        set.add(value);
    }
    return true;
};
