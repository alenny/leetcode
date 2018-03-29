/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLengthByCounting = function (nums) {
    let zerosArr = [0], onesArr = [0];
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            zerosArr[i + 1] = zerosArr[i] + 1;
            onesArr[i + 1] = onesArr[i];
        } else {
            zerosArr[i + 1] = zerosArr[i];
            onesArr[i + 1] = onesArr[i] + 1;
        }
    }
    let length;
    for (length = nums.length; length > 0; --length) {
        for (let left = 0; left <= nums.length - length; ++left) {
            let right = left + length;
            if (onesArr[right] - onesArr[left] === zerosArr[right] - zerosArr[left]) {
                return length;
            }
        }
    }
    return length;
};

const findMaxLength = function (nums) {
    let diffMap = new Map();
    let zeros = 0, ones = 0;
    diffMap.set(0, [0]);
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            ++zeros;
        } else {
            ++ones;
        }
        let diff = zeros - ones;
        let col = diffMap.get(diff);
        if (!col) {
            diffMap.set(diff, [i + 1]);
        } else {
            col.push(i + 1);
        }
    }
    let maxLength = 0;
    for (let col of diffMap.values()) {
        if (col.length < 2) {
            continue;
        }
        maxLength = Math.max(maxLength, col[col.length - 1] - col[0]);
    }
    return maxLength;
};

module.exports = findMaxLength;