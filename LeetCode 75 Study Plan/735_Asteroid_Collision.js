/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  
    let stack = [];
    for(const asteroid of asteroids){
        let isAlive = true; //keep track if the incoming left dir. asteroid survived
        //check for colision : incoming asteroid moving left and stack top moving right
        while(isAlive && stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0){
            isAlive = -asteroid > stack[stack.length - 1];
            //The only time we dont pop top is when the stack top asteroid is bigger than incoming asteroid
            if(-asteroid >= stack[stack.length - 1]){
                stack.pop();
            }   
        }
        //if incoming asteroid is alive, we will push it into the stack 
        if(isAlive){
            stack.push(asteroid);
        }
    }
    return stack;
};

