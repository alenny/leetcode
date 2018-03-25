import java.util.*;

class Solution {
    private Map<Integer, List<Integer>> _map;
    
    public Solution(int[] nums) {
        this._map = new HashMap<Integer, List<Integer>>();
        for (int i = 0; i < nums.length; ++i) {
            List<Integer> indices = this._map.get(nums[i]);
            if (indices == null) {
                indices = new ArrayList<Integer>();
                this._map.put(nums[i], indices);
            }
            indices.add(i);
        }
    }
    
    public int pick(int target) {
        List<Integer> indices = this._map.get(target);
        Random ran = new Random();
        return indices.get(ran.nextInt(indices.size()));
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int param_1 = obj.pick(target);
 */

public class Program {
    public static void main(String[] args) {
        int[] input = new int[] {1, 2, 3, 3, 3};
        Solution sln = new Solution(input);
        System.out.println(sln.pick(3));
        System.out.println(sln.pick(1));
    }
}