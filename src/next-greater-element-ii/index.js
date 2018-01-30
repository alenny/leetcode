/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElementsNLogN = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [-1];
    }
    let ret = new Array(nums.length);
    helper(nums, 0, nums.length - 1, ret);
    return ret;
};

function helper(nums, begin, end, ret) {
    if (begin === end) {
        ret[begin] = nums[(end + 1) % nums.length];
        return;
    }
    let max = Number.NEGATIVE_INFINITY;
    let maxIndices = [];
    let i = begin;
    while (begin < end && i <= end || begin > end && (i <= end || i >= begin)) {
        if (nums[i] === max) {
            maxIndices.push(i);
        } else if (nums[i] > max) {
            max = nums[i];
            maxIndices = [i];
        }
        if (i === end) {
            break;
        }
        i = (i + 1) % nums.length;
    }
    let maxNext = begin === 0 && end === nums.length - 1 ? -1 : nums[(end + 1) % nums.length];
    let preIdx = begin;
    for (let i = 0; i < maxIndices.length; ++i) {
        let idx = maxIndices[i];
        ret[idx] = maxNext;
        let nextIdx = (idx - 1 + nums.length) % nums.length;
        if (preIdx - nextIdx !== 1 && !(preIdx === 0 && nextIdx === nums.length - 1)) {
            helper(nums, preIdx, nextIdx, ret);
        }
        preIdx = (idx + 1) % nums.length;
    }
    if (begin === 0 && end === nums.length - 1) {
        let target = (maxIndices[0] - 1 + nums.length) % nums.length;
        if (!(preIdx === 0 && target === nums.length - 1)) {
            helper(nums, preIdx, target, ret);
        }
    } else if (preIdx - end !== 1 && !(preIdx === 0 && end === nums.length - 1)) {
        helper(nums, preIdx, end, ret);
    }
}

const nextGreaterElementsStackIndex = function (nums) {
    let stack = [];
    let ret = [];
    for (let i = nums.length - 1; i >= 0; --i) {
        stack.push(i);
    }
    for (let i = nums.length - 1; i >= 0; --i) {
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        ret[i] = stack.length === 0 ? -1 : nums[stack[stack.length - 1]];
        stack.push(i);
    }
    return ret;
}

const nextGreaterElements = function (nums) {
    // Stack of values
    let stack = [];
    let ret = [];
    for (let i = nums.length - 1; i >= 0; --i) {
        stack.push(nums[i]);
    }
    for (let i = nums.length - 1; i >= 0; --i) {
        while (stack.length > 0 && nums[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        ret[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(nums[i]);
    }
    return ret;
}

module.exports = nextGreaterElements;