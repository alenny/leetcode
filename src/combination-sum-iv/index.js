/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4ByDFS = function (nums, target) {
    nums.sort((a, b) => b - a);
    let status = { ns: [], counts: [], count: 0, total: 0 };
    combineHelper(nums, 0, target, status);
    return status.total;
};

function combineHelper(nums, numIdx, target, status) {
    for (let idx = numIdx; idx < nums.length; ++idx) {
        let currNum = nums[idx];
        let currCount = 0;
        let newTarget = target;
        while (currNum <= newTarget) {
            ++currCount;
            newTarget -= currNum;
            if (currCount === 1) {
                status.ns.push(currNum);
                status.counts.push(1);
            } else {
                ++status.counts[status.counts.length - 1];
            }
            ++status.count;
            if (newTarget === 0) {
                updateTotal(status);
                break;
            }
            combineHelper(nums, idx + 1, newTarget, status);
        }
        if (currCount > 0) {
            status.ns.pop();
            status.counts.pop();
            status.count -= currCount;
        }
    }
}

function updateTotal(status) {
    let total = 1;
    let countLeft = status.count;
    for (let i = 0; i < status.ns.length - 1; ++i) {
        total *= calC(countLeft, status.counts[i]);
        countLeft -= status.counts[i];
    }
    status.total += total;
}

function calC(n, r) {
    let up = n;
    for (let i = n - 1; i > Math.max(r, n - r); --i) {
        up *= i;
    }
    let down = Math.min(r, n - r);
    for (let i = down - 1; i >= 2; --i) {
        down *= i;
    }
    return up / down;
}

const combinationSum4 = function (nums, target) {
    nums.sort((a, b) => a - b);
    let dp = new Array(target + 1);
    dp[0] = 1;
    for (let t = 1; t <= target; ++t) {
        dp[t] = 0;
        for (let n of nums) {
            if (n > t) {
                break;
            }
            dp[t] += dp[t - n];
        }
    }
    return dp[target];
};

module.exports = combinationSum4;