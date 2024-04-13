/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    /**
    2 pointers - traverseing left to right and right to left
    */
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i];
        //so that we dont compute middle index twice (i,i) in odd-sized matrix
        if(mat.length - 1 - i !== i){
            sum += mat[i][mat.length-1-i];
        }
    }
    return sum;

    // let left = 0;
    // let right = mat.length - 1;
    // let sum = 0;

    // for(let i = 0; i <  mat.length; i++){
    //     if(mat.length % 2 !== 0 && i === Math.floor(mat.length/2)){
    //         sum += mat[i][left];
    //     }else{
    //         sum += mat[i][left];
    //         sum += mat[i][right];
    //     }
    //     left++;
    //     right--;
    // }

    // return sum;
};
