class MagicDictionary {
    constructor() {
        this.map = new Map();
    }
    /**
     * Build a dictionary through a list of words 
     * @param {string[]} dict
     * @return {void}
     */
    buildDict(dict) {
        for (let word of dict) {
            for (let i = 0; i < word.length; ++i) {
                let sub = word.substring(0, i) + '*' + word.substring(i + 1);
                let ch = this.map.get(sub);
                if (!ch) {
                    this.map.set(sub, word[i]);
                } else {
                    this.map.set(sub, '*');
                }
            }
        }
    }
    /**
     * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        for (let i = 0; i < word.length; ++i) {
            let sub = word.substring(0, i) + '*' + word.substring(i + 1);
            let ch = this.map.get(sub);
            if (ch && (ch === '*' || ch !== word[i])) {
                return true;
            }
        }
        return false;
    }
}

module.exports = MagicDictionary;

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */