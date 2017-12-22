/**
 * @param {number[]} numbers
 * @return {number}
 */
const longestConsecutive = function (numbers) {
    let map = new Map();
    for (let n of numbers) {
        map.set(n, false);
    }
    let longest = 0;
    for (let n of map.keys()) {
        if (map.get(n)) {
            continue;
        }
        let length = 1;
        let curr = n;
        while (map.has(++curr)) {
            ++length;
            map.set(curr, true);
        }
        curr = n;
        while (map.has(--curr)) {
            ++length;
            map.set(curr, true);
        }
        if (length > longest) {
            longest = length;
        }
    }
    return longest;
};

module.exports = longestConsecutive;