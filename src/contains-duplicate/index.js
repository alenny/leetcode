/**
 * @param {number[]} numbers
 * @return {boolean}
 */
const containsDuplicate = function (numbers) {
    let set = new Set();
    for (let n of numbers) {
        if (set.has(n)) {
            return true;
        }
        set.add(n);
    }
    return false;
};

module.exports = containsDuplicate;