class Solution {
    public int pivotIndex(int[] nums) {
        

        int leftSum = 0;
        int totalSum = 0;

        for(int i = 0; i < nums.length; i++) {
            totalSum += nums[i];
        }

        //as we traverse down, we will calculate the leftSum
        //TotalSum - leftSum - pivot = rightSum
        //We just compare leftSum & rightSum at every iteration
        for(int i = 0; i < nums.length; leftSum += nums[i++]) {
            if(leftSum  == totalSum - leftSum - nums[i]) {
                return i;
            }
        }

        return -1;

    }
}
