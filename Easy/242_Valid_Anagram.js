/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let  chars_s = s.split("").sort().join("");
    let  chars_t = t.split("").sort().join("");
    return chars_s === chars_t;

    /**
        Hashtable Approach
     */
    // if(s.length !== t.length) return false;
    // let map_s = new Map();
    // let map_t = new Map();
    // let chars_s = s.split("");
    // let chars_t = t.split("");

    // chars_s.map(char => map_s.set(char, (map_s.get(char) || 0) +1));
    // chars_t.map(char => map_t.set(char, (map_t.get(char) || 0) +1));

    // for(const char of chars_s){
    //     if(map_s.get(char) !== map_t.get(char)) return false;
    // }
    // return true;
};
