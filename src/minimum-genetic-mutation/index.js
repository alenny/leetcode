const ALPHABET = ['A', 'C', 'G', 'T'];

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function (start, end, bank) {
    let bankSet = new Map();
    bank.forEach(w => bankSet.set(w, false));
    let step = 1, currWords = [start];
    while (currWords.length > 0) {
        let nextWords = [];
        for (let w of currWords) {
            let chars = w.split('');
            for (let i = 0; i < w.length; ++i) {
                for (let letter of ALPHABET) {
                    if (letter === w[i]) {
                        continue;
                    }
                    chars[i] = letter;
                    let s = chars.join('');
                    chars[i] = w[i];
                    if (!bankSet.has(s) || bankSet.get(s) === true) {
                        continue;
                    }
                    bankSet.set(s, true);
                    if (s === end) {
                        return step;
                    }
                    nextWords.push(s);
                }
            }
        }
        currWords = nextWords;
        ++step;
    }
    return -1;
};

module.exports = minMutation;