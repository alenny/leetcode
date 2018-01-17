/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function (candies) {
    let set = new Set();
    for (let c of candies) {
        set.add(c);
    }
    return Math.min(set.size, candies.length / 2);
};

module.exports = distributeCandies;