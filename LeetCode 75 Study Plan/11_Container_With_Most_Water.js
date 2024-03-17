/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea = -Infinity;
    /**
        Approach : 2 pointers approach - using 2 pointers, we start off with
        maximum width for our container(j - i determines the width of the container). 
        The intuition => we will advance the shorter heigher backward/forward(depending 
        on which index i/j is the shorter one), to exhaustively search for the maximum 
        area from the given height array. We iterate through each elements and compute 
        the area ==
        (height == the shorter vertical line) * (width == index between the 2 vertical lines)
        This will guarantee finding the maximum area for the container
     */
    while(i <= j){
        area = Math.min(height[i], height[j]) * (j - i);
        maxArea = area > maxArea ? area : maxArea;
        if(height[i] < height[j]) i++;
        else j--;
    }
    return maxArea;
};
