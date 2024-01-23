class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        //Hashtable Approach (raise boolean flag if it exists)
        java.util.Hashtable<Integer, Integer> numbers = new java.util.Hashtable<>();
        
        //initialize all the boolean flags to false
        for(int i = 0; i < nums.length; i++) {
            numbers.put(i + 1, 0);
        }
        //we iterate through the nums array and raise the boolean flag if it exists in the array
        for(int i = 0; i < nums.length; i++) {
            numbers.put(nums[i], 1);
        }

        ArrayList<Integer> res = new ArrayList<Integer>();
        //we iterate through the hashtable and check the boolean flags (false == does not exist in nums)
        for(int i = 0; i < nums.length; i++) {
            if(numbers.get(i + 1) == 0) {
                res.add(i + 1);
            }
        }
        return res;
    }
}
