/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let r = 0, w = 0, b = 0;
    let i;
    for (i = 0; i < nums.length; ++i) {
        switch (nums[i]) {
            case 0: ++r; break;
            case 1: ++w; break;
            case 2: ++b; break;
            default:
                throw 'unexpected input';
        }
    }
    let rPos = 0, wPos = r, bPos = r + w;
    while (rPos < r) {
        switch (nums[rPos]) {
            case 0:
                ++rPos;
                break;
            case 1:
                while (nums[wPos] === 1) {
                    ++wPos;
                }
                exchangeElem(nums, rPos, wPos++);
                break;
            case 2:
                while (nums[bPos] === 2) {
                    ++bPos;
                }
                exchangeElem(nums, rPos, bPos++);
                break;
        }
    }
    while (wPos < r + w) {
        switch (nums[wPos]) {
            case 1:
                ++wPos;
                break;
            case 2:
                while (nums[bPos] === 2) {
                    ++bPos;
                }
                exchangeElem(nums, wPos, bPos++);
                break;
        }
    }
};

function exchangeElem(nums, idx0, idx1) {
    [nums[idx0], nums[idx1]] = [nums[idx1], nums[idx0]];
}

module.exports = sortColors;