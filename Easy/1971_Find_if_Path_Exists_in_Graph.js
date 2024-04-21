/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    if(source === destination || n === 1) return true;

    let paths = new Map();

    for(const [curr, neighbour] of edges){
        if(!paths.get(curr)) paths.set(curr, []);
        if(!paths.get(neighbour)) paths.set(neighbour, []);

        paths.get(curr).push(neighbour);
        paths.get(neighbour).push(curr);
    }

    let q = [source];
    let currNode;
    let visited = [];

    while(q.length > 0) {
        currNode = q.shift();
        for(const neighbour of paths.get(currNode)) {
            if(!visited.includes(neighbour)) {
                q.push(neighbour);
                visited.push(neighbour);
            }
        }
        if(visited.includes(destination)) return true;
    }
    return false;
};
