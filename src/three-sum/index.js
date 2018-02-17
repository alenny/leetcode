/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const threeSumByMap = function (numbers) {
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

const threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ret = [];
    let prevNum = NaN;
    for (let i0 = 0; i0 < nums.length; ++i0) {
        if (nums[i0] === prevNum) {
            continue;   // skip duplication
        }
        let i1 = i0 + 1, i2 = nums.length - 1;
        while (i1 < i2) {
            let sum = nums[i0] + nums[i1] + nums[i2];
            if (sum > 0) {
                i2 = findDistinctNumberIndex(nums, i2, -1);
            } else if (sum < 0) {
                i1 = findDistinctNumberIndex(nums, i1, 1);
            } else {
                // sum === 0
                ret.push([nums[i0], nums[i1], nums[i2]]);
                i1 = findDistinctNumberIndex(nums, i1, 1);
                i2 = findDistinctNumberIndex(nums, i2, -1);
            }
        }
        prevNum = nums[i0];
    }
    return ret;
};

function findDistinctNumberIndex(nums, start, direction) {
    let idx = start + direction;
    while (idx >= 0 && nums[idx] === nums[start]) {
        idx += direction;
    }
    return idx;
}

module.exports = threeSum;