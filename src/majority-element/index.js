/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElementByMap = function (nums) {
    const threshold = Math.floor(nums.length / 2);
    const map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        let cnt = map.get(num);
        cnt = cnt ? cnt + 1 : 1;
        if (cnt > threshold) {
            return num;
        }
        map.set(num, cnt);
    }
    throw "no solution";
};

const majorityElement = function (nums) {
    let bitOnes = new Array(32);
    bitOnes.fill(0);
    for (let num of nums) {
        for (let i = 0; i < bitOnes.length; ++i) {
            let mask = 1 << i;
            if (num & mask) {
                ++bitOnes[i];
            }
        }
    }
    let result = 0, half = nums.length >> 1;
    for (let i = 0; i < bitOnes.length; ++i) {
        if (bitOnes[i] > half) {
            result |= (1 << i);
        }
    }
    return result;
};

module.exports = majorityElement;