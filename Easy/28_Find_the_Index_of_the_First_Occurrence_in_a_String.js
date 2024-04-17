/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;

    let start_h = 0;

    while(start_h <= haystack.length - needle.length) {
        let found = true;
        for(let i = 0; i < needle.length; i++){
            if(haystack[start_h + i] !== needle[i]){
                found = false; //if any character doesn't match, set found to false
                break;
            }
        }
        if(found) return start_h;   
        start_h++;
    }
    return -1;
};
