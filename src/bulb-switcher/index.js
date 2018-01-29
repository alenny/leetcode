/**
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = function (n) {
    // Only squares will be toggled odd times
    return Math.floor(Math.sqrt(n));
};

module.exports = bulbSwitch;