/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* leftRigthDifference(int* nums, int numsSize, int* returnSize){

    //dynamic malloc the ans arrays
    int *leftSum = (int*)malloc(sizeof(int)*numsSize);
    int *rightSum = (int*)malloc(sizeof(int)*numsSize);
    int *ansArray = (int*)malloc(sizeof(int)*numsSize);

    int i, j = numsSize;
    int sumLeft = 0, sumRight = 0, ans;
    
    //calculate left and right sum
    for(i = 0; i < numsSize; i++){
        leftSum[i] = sumLeft;
        sumLeft += nums[i];

        j -= 1;
        rightSum[j] = sumRight;
        sumRight += nums[j];
    }
    //compute both sums
    for(i = 0; i < numsSize; i++){
        ansArray[i] = abs(leftSum[i] - rightSum[i]);
        printf("%d ",ansArray[i]);
    }

    *returnSize = numsSize;
    return ansArray;
}