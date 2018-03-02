/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
    citations.sort((a, b) => b - a);
    let idx = 0;
    while (idx < citations.length && citations[idx] > idx) {
        ++idx;
    }
    return idx;
};

module.exports = hIndex;