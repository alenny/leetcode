class WordDictionaryLengthMap {
    constructor() {
        this.lengthMap = new Map();
    }
    /**
     * Adds a word into the data structure. 
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let letterPosMap = this.lengthMap.get(word.length);
        if (!letterPosMap) {
            letterPosMap = new Map();
            this.lengthMap.set(word.length, letterPosMap);
        }
        for (let i = 0; i < word.length; ++i) {
            let key = word[i] + i;
            let wordsCol = letterPosMap.get(key);
            if (!wordsCol) {
                letterPosMap.set(key, [word]);
            } else {
                wordsCol.push(word);
            }
        }
    }
    /**
     * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let letterPosMap = this.lengthMap.get(word.length);
        if (!letterPosMap) {
            return false;
        }
        let i = 0;
        while (i < word.length && word[i] === '.') {
            ++i;
        }
        if (i === word.length) {
            return true;
        }
        let key = word[i] + i;
        let wordsCol = letterPosMap.get(key);
        if (!wordsCol) {
            return false;
        }
        let regex = new RegExp('^' + word + '$', '');
        for (let w of wordsCol) {
            if (w.match(regex)) {
                return true;
            }
        }
        return false;
    }
}

const CHAR_CODE_A = 'a'.charCodeAt(0);

class TrieNode {
    constructor() {
        this.children = [];
        this.hasWord = false;
    }
}

// Use Trie and backtracking
class WordDictionary {
    constructor() {
        this.trieRoot = new TrieNode();
    }
    /**
     * Adds a word into the data structure. 
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.trieRoot;
        for (let i = 0; i < word.length; ++i) {
            let chIdx = word.charCodeAt(i) - CHAR_CODE_A;
            if (!node.children[chIdx]) {
                node.children[chIdx] = new TrieNode();
            }
            node = node.children[chIdx];
        }
        node.hasWord = true;
    }
    /**
     * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.backTrack(this.trieRoot, word, 0);
    }
    backTrack(node, word, idx) {
        if (!node) {
            return false;
        }
        if (idx === word.length) {
            return node.hasWord;
        }
        if (word[idx] === '.') {
            for (let child of node.children) {
                if (this.backTrack(child, word, idx + 1)) {
                    return true;
                }
            }
            return false;
        }
        let chIdx = word.charCodeAt(idx) - CHAR_CODE_A;
        return node.children[chIdx] ? this.backTrack(node.children[chIdx], word, idx + 1) : false;
    }
}

module.exports = WordDictionary;

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */