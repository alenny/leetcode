/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = function (intervals, newInterval) {
    let ret = [], inserted = false;
    for (let interval of intervals) {
        if (interval.end < newInterval.start) {
            ret.push(interval);
        } else if (interval.start > newInterval.end) {
            if (!inserted) {
                ret.push(newInterval);
                inserted = true;
            }
            ret.push(interval);
        } else {
            mergeIntervalTo(interval, newInterval);
        }
    }
    if (!inserted) {
        ret.push(newInterval);
    }
    return ret;
};

function mergeIntervalTo(source, target) {
    target.start = Math.min(source.start, target.start);
    target.end = Math.max(source.end, target.end);
}

module.exports = insert;