/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
    if (g.length === 0 || s.length === 0) {
        return 0;
    }
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);
    let ig = 0, is = 0;
    while (ig < g.length && is < s.length) {
        while (ig < g.length && s[is] < g[ig]) {
            ++ig;
        }
        if (ig >= g.length) {
            break;
        }
        ++ig;
        ++is;
    }
    return is;
};

module.exports = findContentChildren;