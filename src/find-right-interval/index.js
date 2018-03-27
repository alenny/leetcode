/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
const findRightInterval = function (intervals) {
    let startInfos = [];
    let endInfos = [];
    for (let i = 0; i < intervals.length; ++i) {
        startInfos.push([intervals[i].start, i]);
        endInfos.push([intervals[i].end, i]);
    }
    startInfos.sort((s1, s2) => s1[0] - s2[0]);
    endInfos.sort((e1, e2) => e1[0] - e2[0]);
    let si = 0, ei = 0;
    let ret = new Array(intervals.length);
    ret.fill(-1);
    while (si < intervals.length && ei < intervals.length) {
        if (startInfos[si][0] >= endInfos[ei][0]) {
            ret[endInfos[ei][1]] = startInfos[si][1];
            ++ei;
        } else {
            ++si;
        }
    }
    return ret;
};

module.exports = findRightInterval;