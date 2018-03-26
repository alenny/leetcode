/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
    let set = new Set();
    const CODE_A = 'a'.charCodeAt(0);
    const dict = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    for (let word of words) {
        let code = '';
        for (let i = 0; i < word.length; ++i) {
            let pos = word.charCodeAt(i) - CODE_A;
            let charCode = dict[pos];
            code += charCode;
        }
        set.add(code);
    }
    return set.size;
};

module.exports = uniqueMorseRepresentations;