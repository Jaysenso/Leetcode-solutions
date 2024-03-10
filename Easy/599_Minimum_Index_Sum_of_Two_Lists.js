/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

/**
1.store list1 in a setMap (key = string, value = index of string)
2.traverse through list2 and check if any of the elements exists in the setMap
3. if it exists, store the result into another map (ResultMap) 
    with key = string , value = key in setMap + index in list2. Simultaneously, update minIndex (smallest 
    string length/value in resultMap)
4. with ResultMap, we just have to traverse through and check which entry.value == minIndex, we just push
    the corresponding key into the result array
5. return the result array (it stores all the common strings with the least index sum)
*/

var findRestaurant = function(list1, list2) {
    
    let setMap = new Map();
    let resultMap = new Map();

    //1. store list1 in setMap
    for(let i = 0; i < list1.length; i++){
        //we store the string and its corresponding index value
        setMap.set(list1[i], i); 
    }

    let minIndex = Number.MAX_SAFE_INTEGER;
    let indexSum;
    //2. traverse through list2
    for(let i = 0; i < list2.length; i++){
        //3. if there exists a string in the setMap (we found a common string that exist in both listA and listB)
        if(setMap.has(list2[i])){
            //we compute the index sum and set it as the key value in resultMap
            
            indexSum = setMap.get(list2[i]) + i;
            minIndex = minIndex > indexSum ? indexSum : minIndex;
            resultMap.set(list2[i], indexSum);   
        }
    }

    let result = [];
    //4. we iterate through resultMap and extract all the strings that has the same value as minIndex
    resultMap.forEach((key,value) => {
        if(key == minIndex) {
            result.push(value);
        }
    })
    // 5. return the result array
    return result;

};
