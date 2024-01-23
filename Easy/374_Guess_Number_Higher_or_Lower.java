/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        //edge cases
        if(n == 1) return 1;
        if(guess(n) == 0) return n;

        //Binary Search
        int leftBound = 1;
        int rightBound = n;
    
        while(leftBound < rightBound) {
            int mid = leftBound + (rightBound - leftBound) / 2;
            //my guess is higher than the target
            if(guess(mid) == -1)
                rightBound = mid - 1;
            //my guess is lower than the target
            else if(guess(mid) == 1) 
                leftBound = mid + 1;
            //my guess is equal to the target
            else if(guess(mid) == 0) {
                return mid;
            }

        }
        return leftBound;
    }
}
