/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {

    /**
        in Javascript, theoretically we can just compare literal string
        "01:15" < "02:00" and "03:00" > "02:00".But My solution is 
        more intuitive??
     */

    event1 = event1.map(v => {
            const replacedString = v.replace(":", "");
            return Number(replacedString);
            }
        )

    event2 = event2.map(v => {
            const replacedString = v.replace(":", "");
            return Number(replacedString);
            }
        )

    const startMax = Math.max(event1[0], event2[0]);
    const endMin = Math.min(event1[1], event2[1]); 

    if(startMax <= endMin){
        return true;
    }
    else return false;    
};
