public class Program {
    public static void main(String[] args) {
        Solution sln = new Solution();
        String result = sln.smallestGoodBase("3");
        System.out.println(result);
    }
}

class Solution {
    public String smallestGoodBase(String n) {
        long num = Long.parseLong(n);
        long component = (long) Math.floor(Math.log(num) / Math.log(2));
        long prevBase = 0;
        while (component > 1) {
            long base = (long) Math.floor(Math.pow(num, 1.0 / component));
            if (base == prevBase) {
                --component;
                continue;
            }
            if (isGoodBase(num, component, base)) {
                return Long.toString(base);
            }
            prevBase = base;
            --component;
        }
        return Long.toString(num - 1);
    }

    private boolean isGoodBase(long num, long component, long base) {
        long sum = 1, comp = 1, prod = 1;
        while (comp <= component) {
            prod *= base;
            sum += prod;
            if (sum == num) {
                return true;
            }
            ++comp;
        }
        return false;
    }
}