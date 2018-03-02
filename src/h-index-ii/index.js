/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
    let idx = citations.length - 1;
    while (idx >= 0 && citations[idx] > citations.length - 1 - idx) {
        --idx;
    }
    return citations.length - idx - 1;
};

module.exports = hIndex;