import java.util.*;

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * SummaryRanges obj = new SummaryRanges();
 * obj.addNum(val);
 * List<Interval> param_2 = obj.getIntervals();
 */
public class Program {
    public static void main(String[] args) {
        SummaryRanges sum = new SummaryRanges();
        sum.addNum(1);
        List<Interval> ret = sum.getIntervals();
        System.out.println("hello");
    }
}

/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
class Interval {
    public int start;
    public int end;

    public Interval() {
        start = 0;
        end = 0;
    }

    public Interval(int s, int e) {
        start = s;
        end = e;
    }
}

class SummaryRanges {
    private List<Interval> ranges;

    /** Initialize your data structure here. */
    public SummaryRanges() {
        ranges = new ArrayList<Interval>();
    }

    public void addNum(int val) {
        if (ranges.size() == 0) {
            ranges.add(new Interval(val, val));
        }
        int i = 0;
        while (i < ranges.size()) {
            Interval interval = ranges.get(i);
            if (val < interval.start - 1) {
                ranges.add(i, new Interval(val, val));
                return;
            }
            if (val == interval.start - 1) {
                interval.start = val;
                return;
            }
            if (val >= interval.start && val <= interval.end) {
                return;
            }
            if (val == interval.end + 1) {
                if (i == ranges.size() - 1 || val < ranges.get(i + 1).start - 1) {
                    interval.end = val;
                } else {
                    interval.end = ranges.get(i + 1).end;
                    ranges.remove(i + 1);
                }
                return;
            }
            // then, val > ranges[i].end + 1
            if (i == ranges.size() - 1) {
                ranges.add(new Interval(val, val));
                return;
            }
            ++i;
        }
    }

    public List<Interval> getIntervals() {
        return ranges;
    }
}
