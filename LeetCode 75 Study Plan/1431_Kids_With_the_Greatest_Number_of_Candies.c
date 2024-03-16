/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* kidsWithCandies(int* candies, int candiesSize, int extraCandies, int* returnSize){

    int i;
    int max = candies[0];
    *returnSize = candiesSize;
    bool *result = malloc(sizeof(bool)*(*returnSize));
  
    for(i=1; i< candiesSize; i++){
        max = (candies[i] > max) ? candies[i] : max;
    }
  
    for(i=0; i< candiesSize; i++){
        if (candies[i] + extraCandies >= max)
            result[i] = true;
        else
            result[i] = false;
    }
  
    return result;
}
