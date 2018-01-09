/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = function (A, B, C, D) {
    let mapAB = getSumCountMap(A, B);
    let mapCD = getSumCountMap(C, D);
    let total = 0;
    for (let keyAB of mapAB.keys()) {
        let countCD = mapCD.get(-keyAB);
        if (!countCD) {
            continue;
        }
        let countAB = mapAB.get(keyAB);
        total += countAB * countCD;
    }
    return total;
};

function getSumCountMap(arr0, arr1) {
    let map = new Map();
    for (let i = 0; i < arr0.length; ++i) {
        for (let j = 0; j < arr1.length; ++j) {
            let sum = arr0[i] + arr1[j];
            let count = map.get(sum);
            map.set(sum, count ? count + 1 : 1);
        }
    }
    return map;
}

module.exports = fourSumCount;