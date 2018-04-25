/**
 * @param {number[]} nums
 * @return {boolean}
 */
const judgePoint24 = function (nums) {
    return judgeTarget(nums, 24);
};

function judgeTarget(nums, target) {
    if (nums.length === 1) {
        return nums[0] === target;
    }
    if (nums.length === 2) {
        let result = nums[0] + nums[1] === target ||
            nums[0] - nums[1] === target || nums[1] - nums[0] === target ||
            nums[0] * nums[1] === target ||
            (nums[1] !== 0 && nums[0] / nums[1] === target) || (nums[0] !== 0 && nums[1] / nums[0] === target);
        return result;
    }
    for (let oneIdx = 0; oneIdx < nums.length; ++oneIdx) {
        let one = nums[oneIdx];
        let others = nums.slice();
        others.splice(oneIdx, 1);
        if (judgeTarget(others, target - one) ||
            judgeTarget(others, target + one) ||
            judgeTarget(others, one - target) ||
            (one !== 0 && target !== 0 && (judgeTarget(others, target / one) || judgeTarget(others, one / target) || judgeTarget(others, target * one)))) {
            return true;
        }
    }
    if (nums.length === 4) {
        for (let ai = 0; ai < nums.length - 1; ++ai) {
            for (let bi = ai + 1; bi < nums.length; ++bi) {
                let a = nums[ai], b = nums[bi];
                let others = [];
                for (let j = 0; j < nums.length; ++j) {
                    if (j !== ai && j !== bi) {
                        others.push(nums[j]);
                    }
                }
                if (helper(others, a + b, target) ||
                    helper(others, a - b, target) || helper(others, b - a, target) ||
                    helper(others, a * b, target) ||
                    (b !== 0 && helper(others, a / b, target)) ||
                    (a !== 0 && helper(others, b / a, target))) {
                    return true;
                }
            }
        }
    }
    return false;
}

function helper(others, another, target) {
    others.push(another);
    let ret = judgeTarget(others, target);
    others.pop();
    return ret;
}

module.exports = judgePoint24;