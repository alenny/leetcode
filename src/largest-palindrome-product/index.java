/******************************************************************************

                            Online Java Debugger.
                Code, Run and Debug Java program online.
Write your code in this editor and press "Debug" button to debug program.

*******************************************************************************/
class Solution {
    public int largestPalindrome(int n) {
        long min = (long)Math.pow(10, n - 1), max = (long)Math.pow(10, n) - 1;
        long minProduct = min * min;
        long possiblePalindrome = max * max;
        while (possiblePalindrome >= minProduct) {
            possiblePalindrome = getSmallerPalindrome(possiblePalindrome);
            for (long i = Math.max(min, possiblePalindrome / max); i <= (long)Math.sqrt(possiblePalindrome); ++i) {
                if (possiblePalindrome % i > 0) {
                    continue;
                }
                long j = possiblePalindrome / i;
                if (j >= min && j <= max){
                    return (int)(possiblePalindrome % 1337);
                }
            }
        }
        return -1;
    }
    private long getSmallerPalindrome(long n) {
        if (n <= 10) {
            return n - 1;
        }
        String s = String.valueOf(n);
        int halfLen = s.length() >> 1;
        String left = s.substring(0, halfLen);
        String newHalf = left + s.substring(halfLen, s.length() - halfLen);
        while (true) {
            String newString = newHalf;
            for (int i = left.length() - 1; i >= 0; --i) {
                newString += left.charAt(i);
            }
            long newNum = Long.valueOf(newString);
            if (newNum < n) {
                return newNum;
            }
            newHalf = String.valueOf(Long.valueOf(newHalf) - 1);
            if (newHalf.equals("0")) {
                return 9;
            }
            if (left.length() == newHalf.length()) {
                left = newHalf;
            }
        }
    }
}

public class Main
{
	public static void main(String[] args) {
	    Solution solution = new Solution();
	    int ret = solution.largestPalindrome(8);
		System.out.println(ret);
	}
}

