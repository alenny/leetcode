/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
    let chunks = 0;
    let curr = 0, max = 0;
    while (curr < arr.length) {
        max = Math.max(max, arr[curr]);
        if (curr === max) {
            ++chunks;
        }
        ++curr;
    }
    return chunks;
};

module.exports = maxChunksToSorted;