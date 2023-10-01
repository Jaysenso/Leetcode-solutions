class Solution {
    public int largestInteger(int num) {
        //convert num into a string (array)
        char[] digits = String.valueOf(num).toCharArray();
        char temp;
        for(int i = 0; i < digits.length; i++){
            for(int j = i + 1; j < digits.length; j++){
                //this look for the larger value and check if they are of same parity
                //(odd - odd) & (even - even) will always return an even number
                if(digits[j] > digits[i] && (digits[j] - digits[i]) % 2 == 0){
                    //we swap the position if its larger 
                    //(pushing all the larger values to the front)
                    temp = digits[j];
                    digits[j] = digits[i];
                    digits[i] = temp;
                }
            }
        }

    return Integer.parseInt(new String(digits));
       
    }
}
