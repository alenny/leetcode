/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosestByMap = function (nums, target) {
    let sumMap = new Map();
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            let sum = nums[i] + nums[j];
            let idxCol = sumMap.get(sum);
            if (!idxCol) {
                sumMap.set(sum, [[i, j]]);
            } else {
                idxCol.push([i, j]);
            }
        }
    }
    let sums = Array.from(sumMap.keys());
    sums.sort((a, b) => a - b);
    let minDiffAbs = Number.POSITIVE_INFINITY;
    let minDiffAbsSum;
    for (let i = 0; i < nums.length; ++i) {
        let result = search(sums, sumMap, target - nums[i], 0, sums.length - 1, i) + nums[i];
        let diffAbs = Math.abs(result - target);
        if (diffAbs < minDiffAbs) {
            minDiffAbs = diffAbs;
            minDiffAbsSum = result;
        }
    }
    return minDiffAbsSum;
};

function search(sums, sumMap, t, begin, end, numIdx) {
    if (end <= begin) {
        return finalize(sums, sumMap, t, begin, numIdx);
    }
    let mid = (begin + end) >> 1;
    if (sums[mid] === t) {
        return finalize(sums, sumMap, t, mid, numIdx);
    }
    return sums[mid] > t ? search(sums, sumMap, t, begin, mid - 1, numIdx) :
        search(sums, sumMap, t, mid + 1, end, numIdx);
}

function finalize(sums, sumMap, t, sumIdx, numIdx) {
    if (sums[sumIdx] > t) {
        while (sumIdx > 0 && sums[sumIdx] > t) {
            --sumIdx;
        }
    } else if (sums[sumIdx] < t) {
        while (sumIdx < sums.length - 1 && sums[sumIdx] < t) {
            ++sumIdx;
        }
    }
    let minDiffAbs = Number.POSITIVE_INFINITY, minDiffSum;
    let left = sumIdx;
    while (left >= 0) {
        let diffAbs = Math.abs(t - sums[left]);
        if (diffAbs >= minDiffAbs) {
            break;
        }
        let idxCol = sumMap.get(sums[left]);
        let idxNoDuplicate = false;
        for (let pair of idxCol) {
            if (pair[0] !== numIdx && pair[1] !== numIdx) {
                idxNoDuplicate = true;
                break;
            }
        }
        if (idxNoDuplicate) {
            minDiffAbs = diffAbs;
            minDiffSum = sums[left];
        }
        --left;
    }
    let right = sumIdx + 1;
    while (right < sums.length) {
        let diffAbs = Math.abs(t - sums[right]);
        if (diffAbs >= minDiffAbs) {
            break;
        }
        let idxCol = sumMap.get(sums[right]);
        let idxNoDuplicate = false;
        for (let pair of idxCol) {
            if (pair[0] !== numIdx && pair[1] !== numIdx) {
                idxNoDuplicate = true;
                break;
            }
        }
        if (idxNoDuplicate) {
            minDiffAbs = diffAbs;
            minDiffSum = sums[right];
        }
        ++right;
    }
    return minDiffSum;
}

const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result, minAbsDiff = Number.POSITIVE_INFINITY;
    for (let i0 = 0; i0 < nums.length; ++i0) {
        // pin the (i0)th number as the first number
        let i1 = i0 + 1, i2 = nums.length - 1;
        while (i1 < i2) {
            let sum = nums[i0] + nums[i1] + nums[i2];
            if (sum > target) {
                --i2;
            } else if (sum < target) {
                ++i1;
            } else {
                // sum === t
                return sum;
            }
            let absDiff = Math.abs(target - sum);
            if (absDiff < minAbsDiff) {
                minAbsDiff = absDiff;
                result = sum;
            }
        }
    }
    return result;
};

module.exports = threeSumClosest;