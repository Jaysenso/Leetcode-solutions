class Solution {
    public int[] sortArrayByParityII(int[] nums) {
    //faster approach 
        int[] result = new int[nums.length];
        int even = 0;
        int odd = 1;

        for(int i = 0; i < nums.length; i++){
            if(nums[i]%2 == 0){
                result[even] = nums[i];
                even+=2;
            }
            else{
                result[odd] = nums[i];
                odd+=2;
            }
        }
        return result;
    }

    //brute force approach
        // int n = nums.length;
        // int[] oddArray = new int[n/2];
        // int[] evenArray = new int[n/2];
        // int[] result = new int[n];
        // int even = 0, odd = 0;

        // for(int i = 0; i < n; i++){
        //     if(nums[i] % 2 == 0)
        //         evenArray[even++] = nums[i];
        //     else
        //         oddArray[odd++] = nums[i];
        // }
        // even = 0; odd = 0; //reinitialize the indicies

        // //resort them according to stated conditions
        // for(int i = 0; i < n; i++){
        //     if(i%2 == 0)
        //         result[i] = evenArray[even++];
        //     else
        //         result[i] = oddArray[odd++];
        // }
        // return result;
    }
