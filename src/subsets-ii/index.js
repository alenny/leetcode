/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
    let map = new Map();
    for (let num of nums) {
        let count = map.get(num);
        map.set(num, count ? count + 1 : 1);
    }
    let ret = [[], nums];
    let keys = Array.from(map.keys());
    for (let n = 1; n < nums.length; ++n) {
        subHelper(map, keys, 0, n, ret, []);
    }
    return ret;
};

function subHelper(map, keys, keyIdxBegin, n, ret, curr) {
    if (curr.length === n) {
        ret.push(curr.slice());
        return;
    }
    for (let keyIdx = keyIdxBegin; keyIdx < keys.length; ++keyIdx) {
        let keyMaxCount = Math.min(map.get(keys[keyIdx]), n - curr.length);
        for (let keyCount = 1; keyCount <= keyMaxCount; ++keyCount) {
            curr.push(keys[keyIdx]);
            subHelper(map, keys, keyIdx + 1, n, ret, curr);
        }
        curr.splice(curr.length - keyMaxCount);
    }
}

module.exports = subsetsWithDup;