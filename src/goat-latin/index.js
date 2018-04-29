/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function (S) {
    let vowelSet = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    let words = S.split(' ');
    for (let i = 0; i < words.length; ++i) {
        let w = words[i];
        if (vowelSet.has(w[0])) {
            w = w + 'ma';
        } else {
            w = w.substring(1) + w[0] + 'ma';
        }
        w += getPostFix(i);
        words[i] = w;
    }
    return words.join(' ');
};

function getPostFix(idx) {
    let arr = new Array(idx + 1);
    arr.fill('a');
    return arr.join('');
}

module.exports = toGoatLatin;