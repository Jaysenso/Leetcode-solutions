/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rods = [];
    for(let i = 0; i < 10 ; i++)
        rods.push({'R' : 0 , 'G' : 0 , 'B' : 0});

    /**
        Approach : we can represent each individual rod as an object with the 
        following properties : {'R' : 0 , 'G' : 0 , 'B' : 0}), this is used to 
        keep track the number of each colored rings. We then push these rod objects 
        into an array (rods), iterate through the rings' content and 
        update the count.
    */
    for(let i = 0; i < rings.length; i+=2){
        let rodIndex = Number(rings[i+1]);
        let color = rings[i];
        rods[rodIndex][color] = 1;
    }

    /**
        learnt this Math.min() technique from [1189. Maximum number of Balloons] 
        community solution. Each colored rings acts as a limiting factor => as
        long as Math.min() returns 1 , we know that all 3 colored rings exist in that rod,
        then we can use the same return value to increment sum. On the other hand, if any 
        of the colored rings is not present, Math.min() return value is 0 and sum would not 
        be incremented. 
    */ 
    let sum = 0;
    for(let i = 0; i < rods.length; i++){
        sum += Math.min(rods[i]['R'],rods[i]['G'],rods[i]['B']);
    }
    return sum;
};
