/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let ss = s.trim().split(" ");
    return ss[ss.length - 1].length;
}
