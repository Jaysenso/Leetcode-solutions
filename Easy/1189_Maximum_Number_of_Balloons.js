/**
* @param {string} text
* @return {number}
*/
/**
* Approach : 

*/

/**
Each characters is a limiting factor to whether if we can form an instance of "balloon". If any of the balloon characters' value remain 0, 
we know that we cannot form any instance of balloon. So we just take Math.min of each of the "balloon" letters, it returns the number of balloon 
instances we can form with the text input. In addition, since balloon requires 2 of "l" and "o", we just divide the frequency of these 2 letters 
by 2 and take the floor of it.

NOTE : math.floor is important : in a scenario where we have odd numbers of 'l' or 'o', we ensure that it does not return a fraction
*/
var maxNumberOfBalloons = function(text) {
    const map = {b : 0, a : 0, l : 0, o : 0, n : 0};

    for(let i of text)
        map[i]++;

    console.log(map);

    return Math.floor(Math.min(map.a,map.b,map.l/2, map.o/2, map.n));
};
