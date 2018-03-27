/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a.start - b.start);
    let toRemove = 0;
    let left = 0, right = 1;
    while (right < intervals.length) {
        if (intervals[left].end > intervals[right].start) {
            ++toRemove;
            if (intervals[left].end > intervals[right].end) {
                left = right;
            }
        } else {
            left = right;
        }
        ++right;
    }
    return toRemove;
};

module.exports = eraseOverlapIntervals;