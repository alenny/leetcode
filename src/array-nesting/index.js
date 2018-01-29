/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = function (nums) {
    let visited = new Array(nums.length);
    visited.fill(false);
    let begin = 0;
    let maxLength = 0;
    while (begin < nums.length) {
        if (visited[begin]) {
            ++begin;
            continue;
        }
        visited[begin] = true;
        let curr = begin;
        let length = 1;
        while (nums[curr] !== begin) {
            ++length;
            curr = nums[curr];
            visited[curr] = true;
        }
        if (length > maxLength) {
            maxLength = length;
        }
    }
    return maxLength;
};

module.exports = arrayNesting;