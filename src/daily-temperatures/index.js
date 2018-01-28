/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    let ret = new Array(temperatures.length);
    helper(temperatures, 0, temperatures.length - 1, ret);
    return ret;
};

function helper(temperatures, begin, end, ret) {
    if (begin > end) {
        return;
    }
    let maxIndices = [begin];
    let max = temperatures[begin];
    let curr = begin + 1;
    while (curr <= end) {
        if (temperatures[curr] === max) {
            maxIndices.push(curr);
        } else if (temperatures[curr] > max) {
            max = temperatures[curr];
            maxIndices = [curr];
        }
        ++curr;
    }
    let newBegin = begin;
    for (let i = 0; i < maxIndices.length; ++i) {
        let idx = maxIndices[i];
        ret[idx] = end < temperatures.length - 1 ? end + 1 - idx : 0;
        helper(temperatures, newBegin, idx - 1, ret);
        newBegin = idx + 1;
    }
    helper(temperatures, newBegin, end, ret);
}

module.exports = dailyTemperatures;