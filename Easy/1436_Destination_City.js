/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let pathMap = new Map();
    let departures = new Set(); 

    for(let i = 0; i < paths.length; i++){
        pathMap.set(paths[i][0], paths[i][1]);
        departures.add(paths[i][0]);
    }
    
    for(const [start,end] of pathMap.entries()){
        if(!departures.has(end)) return end;
    }
    return;
};
