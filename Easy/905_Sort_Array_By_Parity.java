class Solution {
    public int[] sortArrayByParity(int[] nums) {
        //auxiliary array approach
        int n = nums.length;
        int[] result = new int[n];
        //left pointer will start from first index and right pointer will start from the last 
        //index in the aux array
        int left = 0;
        int right = n - 1;

        for(int i = 0; i < n; i++){
            //left pointer will increment once an even number is found
            if(nums[i] % 2 == 0){
                result[left] = nums[i];
                left++;
            }
            //right pointer will decrement once an odd number is found
            else{
                result[right] = nums[i];
                right--;
            }
        }
        return result;
    }
}
