/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {

    /*
    using inbuilt library - .replaceAll()
    */
    let max = String(num);
    let min = String(num);

    for(let i = 0; i < max.length; i++){
        if(max[i] != 9){
            max = max.replaceAll(max[i], 9);
            break;
        }
    }
    return max - min.replaceAll(min[0], 0);

    /*
    Brute Force method - without any js inbuilt library

    let array = String(num);
    let array1 = [...array];
    let array2 = [...array];
    //We re-map the first non-nine digit to 9 => obtaining our maximum value
    for(let i = 0; i < array1.length; i++){
            //locate the first non-nine digit 
            if(array1[i] != 9){
                //we store array[i] in a variable and find all the occurences in the array
                let temp = array1[i];
                array1[i] = 9;
                //we will change every occurence of array[i] to 9
                for(let j = i + 1 ; j < array1.length; j++){
                    if(array1[j] == temp)
                        array1[j] = array1[i];
                }
                break;
            }
    }
    //Similarly, We re-map the first non-zero digit to 0 => obtaining our minimum value
    for(let i = 0; i < array2.length; i++){
            //locate the first non-zero digit 
            if(array2[i] != 0){
                //we store array[i] in a variable and find all the occurences in the array
                let temp = array2[i];
                array2[i] = 0;
                //we will change every occurence of array[i] to 9
                for(let j = i + 1 ; j < array2.length; j++){
                    if(array2[j] == temp)
                        array2[j] = array2[i];
                }
                break;
            }
    }



    return Number(array1.join('')) - Number(array2.join(''));
    */
};
