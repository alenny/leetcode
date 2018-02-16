/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    let map = new Map();
    for (let num of nums) {
        let count = map.get(num);
        map.set(num, count ? count + 1 : 1);
    }
    let keys = Array.from(map.keys());
    return build(keys, map, nums.length);
};

function build(keys, map, countLeft) {
    if (countLeft === 0) {
        return [[]];
    }
    let ret = [];
    for (let key of keys) {
        let count = map.get(key);
        if (count === 0) {
            continue;
        }
        map.set(key, count - 1);
        let prevRet = build(keys, map, countLeft - 1);
        for (let r of prevRet) {
            r.push(key);
            ret.push(r);
        }
        map.set(key, count);
    }
    return ret;
}

module.exports = permuteUnique;