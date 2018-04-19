/**
 * @param {number} K
 * @return {number}
 */
const preimageSizeFZF = function (K) {
    return binarySearch(0, K, K);
};

function binarySearch(from, to, target) {
    if (from > to) {
        return 0;
    }
    let mid = Math.floor((from + to) / 2);
    let count0 = countZeros(mid);
    if (count0 === target) {
        return 5;
    }
    return count0 > target ?
        binarySearch(from, mid - 1, target) :
        binarySearch(mid + 1, to, target);
}

function countZeros(n) {
    let count = n;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

module.exports = preimageSizeFZF;