/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = function (S) {
    let map = new Map();
    for (let i = 0; i < S.length; ++i) {
        let indices = map.get(S[i]);
        if (!indices) {
            map.set(S[i], [i]);
        } else {
            indices.push(i);
        }
    }
    let arr = Array.from(map.values());
    arr.sort((a, b) => a[0] - b[0]);
    let lastRangeEnd = -1;
    let result = [];
    for (let indices of arr) {
        if (indices[0] <= lastRangeEnd) {
            result[result.length - 1] += Math.max(0, indices[indices.length - 1] - lastRangeEnd);
            lastRangeEnd = Math.max(indices[indices.length - 1], lastRangeEnd);
        } else {
            result.push(indices[indices.length - 1] - indices[0] + 1);
            lastRangeEnd = indices[indices.length - 1];
        }
    }
    return result;
};

module.exports = partitionLabels;