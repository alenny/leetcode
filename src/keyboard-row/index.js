/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    let rows = [];
    rows.push(new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']));
    rows.push(new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']));
    rows.push(new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']));
    let ret = [];
    for (let word of words) {
        let lowerWord = word.toLowerCase();
        let row;
        for (let i = 0; i < rows.length; ++i) {
            if (rows[i].has(lowerWord[0])) {
                row = rows[i];
                break;
            }
        }
        let inOneRow = true;
        for (let i = 1; i < lowerWord.length; ++i) {
            if (!row.has(lowerWord[i])) {
                inOneRow = false;
                break;
            }
        }
        if (inOneRow) {
            ret.push(word);
        }
    }
    return ret;
};

module.exports = findWords;