/**
 * @param {string} S
 * @return {string}
 */
const reorganizeString = function (S) {
    let map = new Map();
    for (let ch of S) {
        let count = map.get(ch);
        map.set(ch, count ? count + 1 : 1);
    }
    let arr = Array.from(map.entries());
    arr.sort((a, b) => b[1] - a[1]); // count descending
    let firstHalfLength = (S.length + 1) >> 1;
    if (arr[0][1] > firstHalfLength) {
        return '';
    }
    let count = 0;
    let secondHalfArrIdx, secondHalfElemCount;
    for (let i = 0; i < arr.length; ++i) {
        count += arr[i][1];
        if (count > firstHalfLength) {
            secondHalfArrIdx = i;
            secondHalfElemCount = count - firstHalfLength;
            break;
        }
    }
    let ret = '';
    let firstHalfArrIdx = 0, firstHalfElemCount = arr[0][1];
    while (ret.length < S.length - 1) {
        ret += arr[firstHalfArrIdx][0] + arr[secondHalfArrIdx][0];
        if (--firstHalfElemCount === 0) {
            ++firstHalfArrIdx;
            firstHalfElemCount = arr[firstHalfArrIdx][1];
        }
        if (--secondHalfElemCount === 0) {
            ++secondHalfArrIdx;
            if (secondHalfArrIdx >= arr.length) {
                break;
            }
            secondHalfElemCount = arr[secondHalfArrIdx][1];
        }
    }
    if (ret.length < S.length) {
        ret += arr[firstHalfArrIdx][0];
    }
    return ret;
};

module.exports = reorganizeString;