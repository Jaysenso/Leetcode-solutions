class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {

        if(n == 0) {
            return true;
        }

        int flowerCount = n;

        //we first check if the current spot is empty
        //if it's empty, we check if it's the first pot
        //if it's the first pot, we check if the pot to the right is empty
        for(int i = 0; i < flowerbed.length; i++) {
            if(flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0) && (i == flowerbed.length - 1 ||flowerbed[i+1] == 0)) {
                flowerbed[i] = 1;
                flowerCount--;
                //if we successfully planted all the flowers (no flowers left)
                if(flowerCount == 0) 
                    return true;
            }
        }
        
        return false;

    }
}
