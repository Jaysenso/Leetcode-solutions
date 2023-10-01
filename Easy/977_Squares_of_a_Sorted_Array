class Solution {
//brute force approach
    // public int[] sortedSquares(int[] nums) {
    //     for(int i = 0; i < nums.length; i++){
    //         nums[i] = nums[i] * nums[i];
    //     }

    //     Arrays.sort(nums);
    //     return nums;
    // }


    //2 pointers approach 
    //since array nums is sorted in non-decreasing order(or sorted in descending order from both ends to the mid point)
    public int[] sortedSquares(int[] nums) {
        int n = nums.length - 1;
        int left = 0;
        int right = nums.length - 1;
        int resultIndex = n;
        int[] result = new int[nums.length];

        //breakout of while loop when left or right pointer crossed each other
        while(left <= right){
            //compare left and right pointers absolute values (decrement/increment 
            // the pointers once we found the larger value of the 2)     
            if(Math.abs(nums[left]) <= Math.abs(nums[right])){
                result[resultIndex] = nums[right] * nums[right]; 
                right--;
            }
            else{
                result[resultIndex] = nums[left] * nums[left];
                left++;
            }
            //decrement result array pointer to an empty array slot for the next larger value
            resultIndex--;
        }   
        return result;
    }
}
