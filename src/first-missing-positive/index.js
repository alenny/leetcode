/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
    let start = 0;
    while (start < nums.length) {
        let idx = start;
        let num = nums[idx];
        while (num > 0 && nums[num - 1] !== num) {
            let next = nums[num - 1];
            nums[num - 1] = num;
            num = next;
        }
        ++start;
    }
    for (let i = 1; i <= nums.length; ++i) {
        if (nums[i - 1] !== i) {
            return i;
        }
    }
    return nums.length + 1;
};

module.exports = firstMissingPositive;