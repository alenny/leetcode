/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const threeSum = function (numbers) {
    let results = [];
    if (!numbers || numbers.length < 3) {
        return results;
    }
    let map = new Map();
    for (let i = 0; i < numbers.length; ++i) {
        let count = map.get(numbers[i]);
        map.set(numbers[i], count ? count + 1 : 1);
    }
    let distinct = Array.from(map.keys());
    distinct.sort();
    for (let i = 0; i < distinct.length; ++i) {
        let first = distinct[i];
        let firstCount = map.get(first);
        if (firstCount >= 3 && first === 0) {
            results.push([0, 0, 0]);
        }
        if (firstCount >= 2) {
            let third = -first * 2;
            if (third > first && map.has(third)) {
                results.push([first, first, third]);
            }
        }
        for (let j = i + 1; j < distinct.length; ++j) {
            let second = distinct[j];
            let third = -first - second;
            if ((third === second && map.get(second) > 1) || (third > second && map.has(third))) {
                results.push([first, second, third]);
            }
        }
    }
    return results;
};

module.exports = threeSum;