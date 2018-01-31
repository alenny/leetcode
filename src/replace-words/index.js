class DictNode {
    constructor() {
        this.isRoot = false;
        this.children = new Map();
    }
}
/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dict, sentence) {
    let dictMap = new Map();
    for (let word of dict) {
        let map = dictMap;
        let node;
        for (let ch of word) {
            node = map.get(ch);
            if (!node) {
                node = new DictNode();
                map.set(ch, node);
            }
            map = node.children;
        }
        node.isRoot = true;
    }
    let words = sentence.split(' ');
    let retWords = [];
    for (let word of words) {
        let map = dictMap;
        let prefixChars = [];
        for (let char of word) {
            let node = map.get(char);
            if (!node) {
                prefixChars = [];
                break;
            }
            prefixChars.push(char);
            if (node.isRoot) {
                break;
            }
            map = node.children;
        }
        retWords.push(prefixChars.length > 0 ? prefixChars.join('') : word);
    }
    return retWords.join(' ');
};

module.exports = replaceWords;