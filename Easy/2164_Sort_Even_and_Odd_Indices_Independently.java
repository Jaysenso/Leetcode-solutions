class Solution {
    public int[] sortEvenOdd(int[] nums) {

        int n = nums.length;
        int[] evenArray = new int[n];
        int[] oddArray = new int[n];
        int[] result = new int[n];

        int even = 0, odd = 0;
        //we are sorting even and odd indices elements , not even and odd numbers
        //in a case where the array is [1,5,7,3,9]
        //even indices elements are : 1 (index 0), 7 (index 2), 9 (index 4)
        //odd indices elements are : 5 (index 1), 3 (index 3);
        for(int i = 0; i < n; i++){
            if(i % 2 == 0)
                evenArray[even++] = nums[i];
            else
                oddArray[odd++] = nums[i];
        }
        //sort both arrays
        Arrays.sort(oddArray);
        Arrays.sort(evenArray);

        //reinitialize the aux arrays pointers
        even = 0;
        odd = oddArray.length - 1;

        //reinsert it back into a single array with the stated conditions
        for(int i = 0; i < n; i++){
            //even numbers at even indices
            if(i%2 == 0){
                //since we initialized & sorted an n size array, we need to find the first
                //appearance of non-zero elements
                while(evenArray[even] == 0){ 
                    even++;
                }
                result[i] = evenArray[even++];
            }
            //odd numbers at even indices (since odd numbers are in non-increasing order,we will  
            // iterate from the back of the oddArray(sorted in ascending order))
            else
                result[i] = oddArray[odd--];
        }
        return result;
    }

}
