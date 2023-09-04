 class Solution {
    public void moveZeroes(int[] nums) {

        //indice j will keep track my non-zero element position
        int j = 0;
        //indice i will traverse down the array looking for zero element
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != 0){
                nums[j] = nums[i];
                j++;
                //printArray(nums);
            }
        }
        // array.length - j == the no. of 0 occurences , hence we just fill up the back with 0s
        while(j < nums.length){
            nums[j] = 0;
            j++;
        }
    }
    public static void printArray(int[] array){
        System.out.printf("[");
        for(int i = 0; i < array.length; i++){

            System.out.printf("%d",array[i]);
            if(i < array.length - 1)
                System.out.printf(",");
        }
        System.out.println("]");
    }
}
