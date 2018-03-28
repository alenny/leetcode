/**
 * @param {number[]} nums
 * @return {boolean}
 */
const circularArrayLoop = function (nums) {
    for (let i = 0; i < nums.length; ++i) {
        let idx = i, idx2 = i;
        let direction = nums[idx] > 0 ? 1 : -1;
        while (true) {
            idx = getNext(nums, idx);
            let t2 = getNext(nums, idx2);
            idx2 = getNext(nums, t2);
            if (direction === 1 && (nums[t2] < 0 || nums[idx2] < 0) ||
                direction === -1 && (nums[t2] > 0 || nums[idx2] > 0) ||
                nums[idx2] % nums.length === 0) {
                break;
            }
            if (idx === idx2) {
                return true;
            }
        }
    }
    return false;
};

function getNext(nums, idx) {
    let target = (idx + nums[idx]) % nums.length;
    return target >= 0 ? target : nums.length + target;
}

module.exports = circularArrayLoop;