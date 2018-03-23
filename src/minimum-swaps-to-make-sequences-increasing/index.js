/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const minSwap = function (A, B) {
    if (A.length === 0) {
        return 0;
    }
    // dpSwap[i] is the min swaps to keep the first i+1 numbers increasing by swapping the ith numbers
    // dpNoSwap[i] is the min swaps to keep the first i+1 numbers increasing without swapping the ith numbers
    let dpSwap = [1];
    let dpNoSwap = [0];
    for (let i = 1; i < A.length; ++i) {
        let noSwap = Number.POSITIVE_INFINITY;
        let swapped = Number.POSITIVE_INFINITY;
        if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
            noSwap = Math.min(noSwap, dpNoSwap[i - 1]);
            swapped = Math.min(swapped, dpSwap[i - 1] + 1);
        }
        if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
            noSwap = Math.min(noSwap, dpSwap[i - 1]);
            swapped = Math.min(swapped, dpNoSwap[i - 1] + 1);
        }
        dpSwap[i] = swapped;
        dpNoSwap[i] = noSwap;
    }
    return Math.min(dpSwap[dpSwap.length - 1], dpNoSwap[dpNoSwap.length - 1]);
};

module.exports = minSwap;