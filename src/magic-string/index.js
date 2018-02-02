/**
 * @param {number} n
 * @return {number}
 */
const magicalString = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    let nums = [1, 2, 2];
    let p = 2, countOne = 1;
    while (nums.length < n) {
        let nextNum = nums[nums.length - 1] === 1 ? 2 : 1;
        for (let i = 0; i < nums[p]; ++i) {
            nums.push(nextNum);
        }
        if (nextNum === 1) {
            countOne += nums[p];
        }
        ++p;
    }
    if (nums.length > n && nums[nums.length - 1] === 1) {
        --countOne;
    }
    return countOne;
};

module.exports = magicalString;