/**
 * @param {number[]} A
 * @return {boolean}
 */
const splitArraySameAverageBackTracking = function (A) {
    let sum = 0;
    A.forEach(a => sum += a);
    let avg = sum / A.length;
    let cache = [];
    for (let i = 0; i < A.length; ++i) {
        cache[i] = [];
        for (let c = 0; c < A.length; ++c) {
            cache[i][c] = [];
        }
    }
    for (let idx = 1; idx < A.length; ++idx) {
        if (helper(A, idx, avg, 0, 0, cache)) {
            return true;
        }
    }
    return false;
};

function helper(A, idx, avg, count, sum, cache) {
    if (idx === A.length) {
        return false;
    }
    if (cache[idx][count][sum]) {
        return cache[idx][count][sum];
    }
    ++count;
    sum += A[idx];
    if (count > 0 && sum / count === avg) {
        return true;
    }
    for (let j = idx + 1; j < A.length; ++j) {
        if (helper(A, j, avg, count, sum, cache)) {
            return false;
        }
    }
    --count;
    sum -= A[idx];
    cache[idx][count][sum] = false;
    return false;
}

const splitArraySameAverageDP = function (A) {
    let sum = 0;
    A.forEach(a => sum += a);
    let avg = sum / A.length;
    // DP
    let dp = [];
    for (let end = 0; end < A.length; ++end) {
        dp[end] = [];
        for (let count = 0; count <= end + 1; ++count) {
            dp[end][count] = new Set();
        }
    }
    dp[0][0].add(0);
    dp[0][1].add(A[0]);
    for (let end = 1; end < A.length; ++end) {
        dp[end][0].add(0);
        dp[end][1].add(A[end]);
        for (let count = 2; count <= Math.min(end + 1, A.length - 1); ++count) {
            let prevSum = avg * count - A[end];
            for (let prevEnd = count - 2; prevEnd < end; ++prevEnd) {
                if (dp[prevEnd][count - 1].has(prevSum)) {
                    return true;
                }
                for (let k of dp[prevEnd][count - 1].keys()) {
                    let currSum = k + A[end];
                    if (currSum + currSum === sum && count + count === A.length) {
                        return true;
                    }
                    dp[end][count].add(currSum);
                }
            }
        }
    }
    return false;
};

const splitArraySameAverage = function (A) {
    let sum = 0;
    A.forEach(a => sum += a);
    if (!isPossible(sum, A.length)) {
        return false;
    }
    let avg = sum / A.length;
    let cache = [];
    for (let begin = 1; begin < A.length; ++begin) {
        cache[begin] = [];
        for (let count = 1; count < A.length; ++count) {
            cache[begin][count] = [];
        }
    }
    for (let count = 1; count < A.length; ++count) {
        if (findSumCount(avg * count - A[0], count - 1, A, 1, cache)) {
            return true;
        }
    }
    return false;
};

function findSumCount(sum, count, A, begin, cache) {
    if (count === 0) {
        return Math.abs(sum) < 0.000001;
    }
    if (cache[begin][count][sum] !== undefined) {
        return cache[begin][count][sum];
    }
    for (let i = begin; i <= A.length - count; ++i) {
        if (findSumCount(sum - A[i], count - 1, A, i + 1, cache)) {
            cache[begin][count][sum] = true;
            return true;
        }
    }
    cache[begin][count][sum] = false;
    return false;
}

// Pre-checking to avoid TLE
function isPossible(sum, aLength) {
    for (let i = 1; i <= aLength / 2; ++i) {
        if (sum * i % aLength === 0) {
            return true;
        }
    }
    return false;
}

module.exports = splitArraySameAverage;