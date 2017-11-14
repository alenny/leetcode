/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const permute = function (numbers) {
    if (numbers.length <= 1) {
        return [numbers];
    }
    let results = [];
    for (let i = 0; i < numbers.length; ++i) {
        let subNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1));
        let subResults = permute(subNumbers);
        for (let sr of subResults) {
            sr.push(numbers[i]);
            results.push(sr);
        }
    }
    return results;
};

module.exports = permute;