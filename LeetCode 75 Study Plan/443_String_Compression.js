/**
 * @param {character[]} chars
 * @return {number}
 */
 

 /**
    Question : count the number of consecutive characters and populate it in a res array
    return the res.lengh. If the group length is == 1, just append the char and ommit the count
    Approach : how do we know if we have reached the end of the consecutive characters?
  */

var compress = function(chars) {

    let i = 0;
    let j = 0;

    while(j < chars.length){
        let count = 0;
        let curr = chars[j];
        //identifying consecutive characters and count the number of times it appeared
        //once we found a different character, we can break out of the loop and the count
        //stores the length of this consecutive string 
        while(j < chars.length && chars[j] === curr){
            count++;
            j++;
        }
        chars[i++] = curr;
        if(count > 1){
            for(let digits of count.toString()){
                chars[i++] = digits;
            }
        } 
        console.log(chars);
    }
    return i;

    /** Using auxiliary space:
        let res = [];
        let count = 0;

        for(let i = 0; i < chars.length; i++){
            count++;
            if(chars[i+1] !== chars[i]){
                res.push(chars[i])
                if(count == 1) continue;
                res.push(count.toString());
                count = 0;
            }
        }
        return chars.length;
    */
};
