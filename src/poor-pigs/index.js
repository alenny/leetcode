/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = function (buckets, minutesToDie, minutesToTest) {
    // This is a very Hard math problem, should not be tagged as Easy
    // Note the best case is no pig dies in the test
    return Math.ceil(Math.log(buckets) / Math.log(Math.floor(minutesToTest / minutesToDie) + 1));
};

module.exports = poorPigs;