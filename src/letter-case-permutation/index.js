/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S) {
    let ret = [];
    let s = S.split('');
    dfs(s, 0, ret);
    return ret;
};

function dfs(s, idx, ret) {
    if (idx >= s.length) {
        ret.push(s.join(''));
        return;
    }
    while (idx < s.length && s[idx] >= '0' && s[idx] <= '9') {
        ++idx;
    }
    if (idx >= s.length) {
        dfs(s, idx, ret);
        return;
    }
    s[idx] = s[idx].toLowerCase();
    dfs(s, idx + 1, ret);
    s[idx] = s[idx].toUpperCase();
    dfs(s, idx + 1, ret);
}

module.exports = letterCasePermutation;