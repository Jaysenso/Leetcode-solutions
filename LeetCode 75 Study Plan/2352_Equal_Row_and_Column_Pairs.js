/**
 * @param {number[][]} grid
 * @return {number}
 */
 
 /**
 Approach : create 2 hashmaps to keep track of rows & columns
            iterate through both hashmaps and compare, if we found a identical row/column
            increment count
 Issue : traversing rows is easy, what about traversing columns?
  */
var equalPairs = function(grid) {
    
    const rows = new Map();
    const columns = new Map();
    let rowNum, colNum, rowHash, colHash;
    let ans = 0;

    /**
    populating the specific rows and columns into their corresponding hash map
    this allow for easy comparison and allow us to check if there exists a matching pairs of
    row and column.
     */
    for(let i = 0; i < grid.length; i++){
        rowNum = [];
        colNum = [];
        for(let j = 0; j < grid[i].length; j++){
            rowNum.push(grid[i][j]);
            colNum.push(grid[j][i]);
        }

        rowHash = rowNum.join(",");
        colHash = colNum.join(",");

        rows.set(rowHash, (rows.get(rowHash) || 0) + 1);
        columns.set(colHash, (columns.get(colHash) || 0) + 1);
    }

    /**
    we do not simply just increment ans by the key value. We have to take into account
    a scenario where a specific row pattern occurs "x" times and the exact same pattern 
    occurs "y" times in the columns. To calculate the total number of equal 
    row-column pairs in the grid, we have to multiple x and y to obtain the total number 
    of unique pairs that can be formed between these matching rows and columns.
    */

    for(const [row,value] of rows){
        if(columns.has(row)){
            ans += value * columns.get(row);
        }
    }
    return ans;

};
