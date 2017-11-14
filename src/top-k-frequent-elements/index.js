/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (numbers, k) {
    let map = new Map();
    for (let n of numbers) {
        let c = map.get(n);
        map.set(n, c ? c + 1 : 1);
    }
    let arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    let ret = [];
    for (let i = 0; i < k; ++i) {
        ret.push(arr[i][0]);
    }
    return ret;
};

module.exports = topKFrequent;