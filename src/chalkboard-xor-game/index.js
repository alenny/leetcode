/**
 * @param {number[]} nums
 * @return {boolean}
 */
const xorGameBackTracking = function (nums) {
    let cache = new Map();
    let status = new Array(Math.ceil(nums.length / 32));
    status.fill(-1);
    let bitCounts = new Array(32);
    bitCounts.fill(0);
    let indexes = new Set();
    for (let i = 0; i < nums.length; ++i) {
        increaseBitCounts(bitCounts, nums[i]);
        indexes.add(i);
    }
    return canWin(nums, indexes, status, bitCounts, cache);
};

function canWin(nums, indexes, status, bitCounts, cache) {
    let key = makeKey(status);
    if (cache.has(key)) {
        return cache.get(key);
    }
    if (isWinning(bitCounts)) {
        cache.set(key, true);
        return true;
    }
    let thisIndexes = Array.from(indexes.keys());
    let winning = false, ti = 0;
    while (ti < thisIndexes.length && !winning) {
        let idx = thisIndexes[ti];
        indexes.delete(idx);
        reduceBitCounts(bitCounts, nums[idx]);
        setFlag(status, idx, false);
        if (!canWin(nums, indexes, status, bitCounts, cache)) {
            winning = true;
        }
        setFlag(status, idx, true);
        increaseBitCounts(bitCounts, nums[idx]);
        indexes.add(idx);
        ++ti;
    }
    cache.set(key, winning);
    return winning;
}

function reduceBitCounts(bitCounts, num) {
    for (let i = 0; i < 32; ++i) {
        if (num & (1 << i)) {
            --bitCounts[i];
        }
    }
}

function increaseBitCounts(bitCounts, num) {
    for (let i = 0; i < 32; ++i) {
        if (num & (1 << i)) {
            ++bitCounts[i];
        }
    }
}

function isWinning(bitCounts) {
    for (let count of bitCounts) {
        if (count & 1) {
            return false;
        }
    }
    return true;
}

function makeKey(status) {
    return status.join(',');
}

function setFlag(status, idx, available) {
    let numIdx = idx >> 5;
    let bitIdx = idx % 32;
    status[numIdx] = available ? status[numIdx] | (1 << bitIdx) : status[numIdx] & ~(1 << bitIdx);
}

const xorGame = function (nums) {
    if (nums.length === 0) {
        return true;
    }
    let result = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        result ^= nums[i];
    }
    if (result === 0) {
        return true;
    }
    return (nums.length & 1) === 0;
};

module.exports = xorGame;