class Intersection {
    constructor(begin, end, required) {
        this.begin = begin;
        this.end = end;
        this.required = required;
    }
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function (intervals) {
    intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let queue = [], total = 0, qi = 0, ii = 0;
    while (ii < intervals.length) {
        let begin = intervals[ii][0], end = intervals[ii][1];
        if (qi === queue.length) {
            queue.push(new Intersection(begin, end, 2));
            ++ii;
            continue;
        }
        if (queue[qi].end < begin) {
            total += queue[qi++].required;
            continue;
        }
        // begin <= queue[qi].end
        queue[qi].begin = begin;
        if (queue[qi].required === 2) {
            if (begin === queue[qi].end) {
                ++total;
                queue[qi].required = 1;
                queue.push(new Intersection(begin + 1, end, 1));
            }
            queue[qi].end = Math.min(queue[qi].end, end);
            ++ii;
            continue;
        }
        // queue[qi].required === 1
        if (end <= queue[qi].end) {
            queue[qi].end = end;
            queue[qi].required = 2;
            if (qi + 1 < queue.length) {
                queue.pop();
            }
        } else if (qi + 1 < queue.length) {
            queue[qi + 1].end = Math.min(queue[qi + 1].end, end);
        } else {
            queue.push(new Intersection(queue[qi].end + 1, end, 1));
        }
        ++ii;
    }
    while (qi < queue.length) {
        total += queue[qi++].required;
    }
    return total;
};

module.exports = intersectionSizeTwo;