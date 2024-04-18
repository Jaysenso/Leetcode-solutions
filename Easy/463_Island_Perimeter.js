/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let res = 0;

    // 2 adjacent - 8 : 6
    // 3 adjacent - 12 : 8
    // 4 adjacent - 16 : 10

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] === 1) {
                res += 4;
                //check if theres islands adjacent to this island
                if(i > 0 && grid[i-1][j] === 1) res -=2;
                if(j > 0 && grid[i][j-1] === 1) res -=2;
            }
        }
    }
    return res;

};
