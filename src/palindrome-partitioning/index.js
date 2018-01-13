/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
    if (s.length === 0) {
        return [['']];
    }
    // find all palindromes by center character but saved by the right index
    let palindromes = new Array(s.length);
    for (let i = s.length - 1; i >= 0; --i) {
        palindromes[i] = [];
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes[right].push(s.substring(left, right + 1));
            --left;
            ++right;
        }
        if (i === s.length - 1) {
            continue;
        }
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes[right].push(s.substring(left, right + 1));
            --left;
            ++right;
        }
    }
    return partitionHelper(s, palindromes, s.length - 1);
};

function partitionHelper(s, palindromes, right) {
    let result = [];
    for (let str of palindromes[right]) {
        if (right - str.length < 0) {
            result.push([str]);
            continue;
        }
        let subResult = partitionHelper(s, palindromes, right - str.length);
        for (let r of subResult) {
            r.push(str);
            result.push(r);
        }
    }
    return result;
}

module.exports = partition;