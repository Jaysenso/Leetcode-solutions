/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let islandCount = 0;

    const dfs = (i,j) => {
        if(i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") return;
        grid[i][j] = "0";
        //perform dfs on all 4 neighbours
        dfs(i-1,j);
        dfs(i+1,j);
        dfs(i,j-1);
        dfs(i,j+1);
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === "1") {
                dfs(i,j);
                islandCount++;
            }
        }
    }
    return islandCount;
};
