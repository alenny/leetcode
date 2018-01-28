/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
    let map = new Map();
    for (let n of nums) {
        let count = map.get(n);
        map.set(n, count ? count + 1 : 1);
    }
    let count = 0;
    let set = new Set();
    for (let n of map.keys()) {
        if (k === 0 && map.get(n) > 1) {
            let flag = n + '-' + n;
            if (!set.has(flag)) {
                ++count;
                set.add(flag);
            }
        } else if (k > 0) {
            if (map.has(n - k)) {
                let flag1 = (n - k) + '-' + n;
                let flag2 = n + '-' + (n - k);
                if (!set.has(flag1) && !set.has(flag2)) {
                    ++count;
                    set.add(flag1);
                    set.add(flag2);
                }
            }
            if (map.has(n + k)) {
                let flag1 = (n + k) + '-' + n;
                let flag2 = n + '-' + (n + k);
                if (!set.has(flag1) && !set.has(flag2)) {
                    ++count;
                    set.add(flag1);
                    set.add(flag2);
                }
            }
        }
    }
    return count;
};

module.exports = findPairs;