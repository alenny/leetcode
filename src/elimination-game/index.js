/**
 * @param {number} n
 * @return {number}
 */
const lastRemaining = function (n) {
    // Idea: 
    // 1. after every step, the diff between 2 neighbor numbers is pow(2,step)
    // 2. when delete from left, the most left number is deleted
    // 3. when delete from right, if there are odd numbers, the most left number is also deleted;
    //    if there are even numbers, the most left number is remained.
    let currStep = 0, left = 1;
    while (n > 1) {
        if ((currStep & 1) === 0 || (n & 1)) {
            left += (1 << currStep);
        }
        ++currStep;
        n = (n >> 1);
    }
    return left;
};

module.exports = lastRemaining;