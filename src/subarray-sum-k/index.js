/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
const subarraySumFullMatrix = function (numbers, k) {
    // mat[i][j] (i<=j) is the sum of numbers' subarray [i..j]
    let size = numbers.length;
    let mat = new Array(size);
    let count = 0;
    for (let i = 0; i < size; ++i) {
        mat[i] = new Array(size);
        mat[i].fill(0);
        mat[i][i] = numbers[i];
        if (numbers[i] === k) {
            ++count;
        }
    }
    for (let scope = 1; scope < size; ++scope) {
        for (let i = 0; i < size - scope; ++i) {
            let from = i;
            let to = i + scope;
            let sum = mat[from][to - 1] + mat[from + 1][to] - mat[from + 1][to - 1];
            mat[from][to] = sum;
            if (sum === k) {
                ++count;
            }
        }
    }
    return count;
};

const subarraySum2Array = function (numbers, k) {
    let size = numbers.length;
    let mat = new Array(2);
    mat[1] = numbers.slice();
    mat[0] = new Array(size);
    mat[0].fill(0);
    let count = 0;
    for (let n of numbers) {
        if (n === k) {
            ++count;
        }
    }
    let curr = 0, prev = 1;
    for (let scope = 1; scope < size; ++scope) {
        for (let i = 0; i < size - scope; ++i) {
            let from = i;
            let sum = mat[prev][from] + mat[prev][from + 1] - mat[curr][from + 1];
            mat[curr][from] = sum;
            if (sum === k) {
                ++count;
            }
        }
        [curr, prev] = [prev, curr];
    }
    return count;
};

const subarraySum = function (numbers, k) {
    // Note subarray [i..j] = [0..j] - [0..i-1],
    // so we just need to find i and j to let k = sum(0..j) - sum(0..i-1)
    let sumMap = new Map();
    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; ++i) {
        sum += numbers[i];
        if (sum === k) {
            ++count;
        }
        // look for subarray
        let extra = sum - k;
        let extraCount = sumMap.get(extra);
        if (extraCount) {
            // note the extraCount of sub arrays are all smaller than [0..i]
            count += extraCount;
        }
        // store sum(0..i)
        let sameSumCount = sumMap.get(sum);
        sumMap.set(sum, sameSumCount ? sameSumCount + 1 : 1);
    }
    return count;
};

module.exports = subarraySum;