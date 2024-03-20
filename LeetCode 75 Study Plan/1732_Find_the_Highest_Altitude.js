/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    /**
        Two approach : either store all the altitudes in 1 array or update maxAltitude at every iteration    
     */
    let sum  = 0;
    let altitude = [0];
    // let maxAltitude = 0; //we always start at altitude 0, so just set maxAltitude to 0

    // for(let i = 0; i < gain.length; i++){
    //     maxAltitude = Math.max(maxAltitude, sum+=gain[i]);
    // }
    // return maxAltitude;
    for(let i = 0; i < gain.length;i++){
        altitude.push(sum+=gain[i]);
    }
    return Math.max(...altitude);
}
