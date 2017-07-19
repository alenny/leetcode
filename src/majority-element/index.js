/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    const threshold = Math.floor(nums.length / 2);
    const map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        let cnt = map.get(num);
        cnt = cnt ? cnt + 1 : 1;
        if (cnt > threshold) {
            return num;
        }
        map.set(num, cnt);
    }
    throw "no solution";
};

module.exports = majorityElement;