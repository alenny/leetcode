/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const subsets = function (numbers) {
    return helper(numbers, numbers.length);
};

function helper(numbers, length) {
    if (length === 0) {
        return [[]];
    }
    let prevRet = helper(numbers, length - 1);
    let n = numbers[length - 1];
    let ret = [];
    for (let r of prevRet) {
        ret.push(r);
        let rn = r.slice(); // copy r to a new array rn
        rn.push(n);
        ret.push(rn);
    }
    return ret;
}

module.exports = subsets;