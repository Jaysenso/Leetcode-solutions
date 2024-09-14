function canBeEqual(target: number[], arr: number[]): boolean {
    /**base case: if both arrays length are different, it can never be equal */
    if(target.length !== arr.length) return false;


    const count = new Array(1001).fill(0);
    
    for(let i = 0; i < target.length; i++){
        count[arr[i]]++;
        count[target[i]]--;
    }
    for (const c of count){
        if(c !== 0){
            return false;
        }
    }
    return true;
};
