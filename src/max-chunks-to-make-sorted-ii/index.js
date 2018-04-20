/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
    if (arr.length === 0) {
        return 0;
    }
    let chunkMaxes = [arr[0]];
    let idx = 1;
    while (idx < arr.length) {
        let preMax = chunkMaxes[chunkMaxes.length - 1];
        while (chunkMaxes.length > 0 && arr[idx] < chunkMaxes[chunkMaxes.length - 1]) {
            chunkMaxes.pop();
        }
        chunkMaxes.push(Math.max(preMax, arr[idx]));
        ++idx;
    }
    return chunkMaxes.length;
};

module.exports = maxChunksToSorted;