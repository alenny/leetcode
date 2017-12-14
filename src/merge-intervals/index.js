/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const Interval = require('../_utils/interval');

const merge = function (intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }
    let ret = [];
    intervals.sort((a, b) => a.start === b.start ? a.end - b.end : a.start - b.start);
    let [left, right] = [intervals[0].start, intervals[0].end];
    for (let c = 1; c < intervals.length; ++c) {
        if (intervals[c].start <= right) {
            if (intervals[c].end > right) {
                right = intervals[c].end;
            }
        } else {
            ret.push(new Interval(left, right));
            [left, right] = [intervals[c].start, intervals[c].end];
        }
    }
    ret.push(new Interval(left, right));
    return ret;
};

module.exports = merge;